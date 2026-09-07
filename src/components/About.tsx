import Image from "next/image";
import Link from "next/link";
import { Arrow, Flag } from "./Brand";
export default function About() {
  return <section className="section about-section"><div className="container about-grid"><div className="about-photo"><Image src="/images/architecture.jpg" alt="Kiến trúc với bề mặt sáng và vật liệu gỗ tự nhiên, hình minh họa" fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="origin-plaque"><Flag /><span>Cảm hứng Na Uy.<br /><strong>Dấu ấn ABOSSI.</strong></span></div></div><div className="about-copy"><h2>Từ tinh thần Na Uy,<br />đến công trình Việt.</h2><p>Vẻ đẹp của một công trình bắt đầu từ những lựa chọn kỹ lưỡng. Từ sắc màu, bề mặt đến hệ sơn phù hợp cho từng không gian.</p><p>Mang dấu ấn công nghệ Na Uy, ABOSSI giới thiệu các giải pháp sơn nội thất, ngoại thất và chống thấm — để đại lý và nhà thầu dễ dàng bắt đầu từ nhu cầu thực tế của công trình.</p><Link className="text-link" href="/gioi-thieu">Tìm hiểu về ABOSSI <Arrow /></Link></div></div></section>;
}
