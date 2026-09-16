import { groupName, productPath, type Product } from "@/lib/products";
import { siteUrl } from "@/lib/seo";

export default function ProductStructuredData({
  product,
}: {
  product: Product;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.code,
    description: product.summary,
    image: new URL(product.image, siteUrl).href,
    category: groupName(product.category),
    url: new URL(productPath(product.id), siteUrl).href,
    brand: { "@type": "Brand", name: "SƠN ABOSSI" },
    manufacturer: {
      "@type": "Organization",
      name: "CÔNG TY TNHH SX&TM LUYẾN THANH",
      url: siteUrl.href,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
