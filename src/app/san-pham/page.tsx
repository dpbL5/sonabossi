import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import ColorPicker from "@/components/ColorPicker";
import ProductCatalog from "@/components/ProductCatalog";
export const metadata = pageMetadata("/san-pham");
export default function ProductsPage(){return <><PageIntro name="Sản phẩm" title="Đúng hệ sơn. Đẹp từng bề mặt." description="Khám phá 13 sản phẩm ABOSSI: sơn nội thất, ngoại thất, sơn lót và chống thấm. Xem bao bì và lựa chọn dòng sơn phù hợp với hạng mục công trình."/><div className="container color-jump"><a className="text-link" href="#bang-mau">Khám phá bảng màu tham khảo ↓</a></div><ColorPicker/><ProductCatalog/><section className="catalog-banner container"><Image src="/herobanner2.png" alt="Banner các nhóm sản phẩm sơn ABOSSI" width={2172} height={724} sizes="100vw"/></section></>;}
