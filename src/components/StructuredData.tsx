import { siteUrl } from '@/lib/seo';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sơn ABOSSI',
    alternateName: 'ABOSSI',
    url: siteUrl.href,
    inLanguage: 'vi-VN',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
