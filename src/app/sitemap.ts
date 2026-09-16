import type { MetadataRoute } from 'next';
import { products, productPath } from '@/lib/products';
import { seoPages, siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.keys(seoPages).map(path => ({ url: new URL(path, siteUrl).href })),
    ...products.map(product => ({ url: new URL(productPath(product.id), siteUrl).href })),
  ];
}
