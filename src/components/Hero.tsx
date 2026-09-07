import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Brand";
export default function Hero() {
  return <>
    <section className="hero">
      <Image src="/images/interior.jpg" alt="Không gian phòng khách sáng, tường màu trung tính và vật liệu tự nhiên — ảnh minh họa" fill sizes="100vw" preload className="hero-photo" />
      <div className="hero-shade" />
      <div className="container hero-inner"><div className="hero-copy"><h1>Sắc màu bền đẹp.<br />Vững bước<br /><span>cùng công trình.</span></h1><p>Giải pháp sơn từ công nghệ Na Uy.<br />Cùng đại lý và nhà thầu kiến tạo những không gian mang dấu ấn riêng.</p><div className="hero-actions"><Link className="button button-red" href="/san-pham">Khám phá sản phẩm <Arrow /></Link><Link className="text-link" href="/gioi-thieu">Câu chuyện ABOSSI <Arrow diagonal /></Link></div></div></div>
      
    </section>
    <div className="solution-strip"><div className="container strip-inner"><p>Mỗi bề mặt.<br /><strong>Một giải pháp phù hợp.</strong></p><Link href="/san-pham#noi-that">Sơn nội thất <Arrow diagonal /></Link><Link href="/san-pham#ngoai-that">Sơn ngoại thất <Arrow diagonal /></Link><Link href="/san-pham#chong-tham">Sơn chống thấm <Arrow diagonal /></Link></div></div>
  </>;
}
