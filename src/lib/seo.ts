import type { Metadata } from "next";
import { productPath, type Product } from "@/lib/products";

// Canonical origin confirmed by the site owner. SITE_URL permits an explicit deployment override.
export const siteUrl = new URL(process.env.SITE_URL || "https://sonabossi.com");
if (!['https:', 'http:'].includes(siteUrl.protocol) || siteUrl.username || siteUrl.password || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash) {
  throw new Error('SITE_URL phải là tên miền gốc HTTP(S), không có đường dẫn, query hoặc thông tin đăng nhập.');
}

export const seoPages = {
  '/': {
    title: 'Sơn ABOSSI — Sơn nội thất, ngoại thất & chống thấm',
    description: 'Khám phá sơn ABOSSI với công nghệ Na Uy: sơn nội thất, ngoại thất, sơn lót và chống thấm. Thông tin sản phẩm dành cho đại lý và nhà thầu.',
  },
  '/gioi-thieu': {
    title: 'Giới thiệu sơn ABOSSI — Công nghệ Na Uy',
    description: 'Tìm hiểu thương hiệu sơn ABOSSI, dấu ấn công nghệ Na Uy và các nhóm giải pháp sơn dành cho đại lý phân phối, nhà thầu và công trình Việt.',
  },
  '/san-pham': {
    title: '13 sản phẩm sơn ABOSSI & bảng màu tham khảo',
    description: 'Xem 13 sản phẩm ABOSSI: sơn nội thất, ngoại thất, sơn lót và chống thấm. Khám phá đặc tính trên bao bì, lọc nhóm sơn và thử bảng màu tham khảo.',
  },
  '/du-an': {
    title: 'Không gian & cảm hứng phối màu sơn | ABOSSI',
    description: 'Khám phá bộ sưu tập không gian truyền cảm hứng: ý tưởng phối màu sơn cho biệt thự, căn hộ và nhà phố, kết hợp hài hòa giữa sắc màu và kiến trúc.',
  },
} as const;

export function pageMetadata(path: keyof typeof seoPages): Metadata {
  const { title, description } = seoPages[path];
  const url = new URL(path, siteUrl);
  const images = [{ url: new URL('/secBanner.png', siteUrl).href, width: 1859, height: 846, alt: 'Các nhóm sản phẩm sơn ABOSSI' }];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'vi_VN', siteName: 'Sơn ABOSSI', title, description, url, images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}

export function productMetadata(product: Product): Metadata {
  const url = new URL(productPath(product.id), siteUrl);
  const title = `${product.name} — ${product.code} | Sơn ABOSSI`;
  const description = product.summary;
  const images = [
    {
      url: new URL(product.image, siteUrl).href,
      width: 1280,
      height: 1280,
      alt: `${product.name} — ${product.code} — Sơn ABOSSI`,
    },
  ];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'vi_VN', siteName: 'Sơn ABOSSI', title, description, url, images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}
