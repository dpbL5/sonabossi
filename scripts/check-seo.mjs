// Run after a production build: node scripts/check-seo.mjs
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const base = new URL(process.env.SITE_URL || 'https://sonabossi.com');
const routes = ['/', '/gioi-thieu', '/san-pham', '/du-an'];
const titles = new Set();
const descriptions = new Set();
const sitemap = readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
const robots = readFileSync('.next/server/app/robots.txt.body', 'utf8');
for (const route of routes) {
  const html = readFileSync(`.next/server/app/${route === '/' ? 'index' : route.slice(1)}.html`, 'utf8');
  const url = new URL(route, base).href;
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert(title && description, `Missing metadata: ${route}`);
  titles.add(title);
  descriptions.add(description);
  assert.equal(new URL(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]).href, url, `Canonical: ${route}`);
  assert.equal(new URL(html.match(/<meta property="og:url" content="([^"]+)"/)?.[1]).href, url, `OG URL: ${route}`);
  assert(html.includes('<meta name="twitter:card" content="summary_large_image"'));
  assert(html.includes(new URL('/secBanner.png', base).href));
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  assert(json, `Missing structured data: ${route}`);
  const data = JSON.parse(json);
  const types = Array.isArray(data['@type']) ? data['@type'] : [data['@type']];
  assert(types.includes('WebSite'));
  assert.equal(data.url, base.href);
  assert(sitemap.includes(`<loc>${url}</loc>`), `Missing sitemap URL: ${route}`);
}
assert.equal(titles.size, routes.length, 'Duplicate titles');
assert.equal(descriptions.size, routes.length, 'Duplicate descriptions');
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
assert(robots.includes('Allow: /'));
assert(robots.includes(`Sitemap: ${new URL('/sitemap.xml', base).href}`));
console.log('SEO checks PASS: 4 unique titles/descriptions, canonical, OG/Twitter, WebSite JSON-LD, sitemap and robots.');
