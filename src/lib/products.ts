import data from "@/data/products.json";

export type ProductGroupId = "noi-that" | "ngoai-that" | "son-lot" | "chong-tham";

export type Product = {
  id: string;
  category: ProductGroupId;
  name: string;
  code: string;
  labels: string[];
  image: string;
  tagline: string;
  note?: string;
  summary: string;
  features: string[];
  usage: string[];
  specs: { label: string; value: string }[];
  composition?: string[];
  criteria?: { name: string; unit: string; result: string }[];
};

export const products = data as Product[];

export const productGroups: { id: ProductGroupId; name: string }[] = [
  { id: "noi-that", name: "Sơn nội thất" },
  { id: "ngoai-that", name: "Sơn ngoại thất" },
  { id: "son-lot", name: "Sơn lót" },
  { id: "chong-tham", name: "Sơn chống thấm" },
];

export function groupName(category: ProductGroupId) {
  return (
    productGroups.find((group) => group.id === category)?.name ?? "Sản phẩm"
  );
}

export function productPath(slug: string) {
  return `/san-pham/${slug}`;
}

export function getProduct(slug: string) {
  return products.find((product) => product.id === slug);
}

export const packagingNote =
  "Bảo hành 10 năm · Không APEO, không kim loại nặng, không formaldehyde, hàm lượng VOC thấp";
