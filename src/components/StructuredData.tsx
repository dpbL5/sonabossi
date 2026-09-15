import { siteUrl } from "@/lib/seo";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["WebSite", "Organization"],
    name: "CÔNG TY TNHH SX&TM LUYẾN THANH",
    alternateName: "SƠN ABOSSI",
    url: siteUrl.href,
    inLanguage: "vi-VN",
    brand: { "@type": "Brand", name: "SƠN ABOSSI" },
    logo: new URL("/sonabossi.png", siteUrl).href,
    telephone: "+84978566993",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cầu Xà Kiều, Xã Ứng Thiên",
      addressLocality: "Hà Nội",
      addressRegion: "Hà Nội",
      addressCountry: "VN",
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
