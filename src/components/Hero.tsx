import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Brand";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/hero-banner.png"
          alt="Năm thùng sơn ABOSSI trên sân đá, nền hồ, núi và biệt thự — ảnh thương hiệu"
          fill
          sizes="100vw"
          preload
          className="hero-photo"
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-eyebrow">Công ty TNHH SX & TM Luyến thanh</p>
            <h1>
              Sơn ABOSSI.
              <br />
              <span>Sơn của người Việt</span>
            </h1>
            <p>
              Giải pháp sơn từ công nghệ Na Uy.
              <br />
              Cùng đại lý và nhà thầu kiến tạo những không gian mang dấu ấn
              riêng.
              <br />
              Đẹp mãi với thời gian.
            </p>
            <div className="hero-actions">
              <Link className="button button-red" href="/san-pham">
                Khám phá sản phẩm <Arrow />
              </Link>
              <Link className="text-link" href="/gioi-thieu">
                Câu chuyện ABOSSI <Arrow diagonal />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="solution-strip">
        <div className="container strip-inner">
          <p>
            Mỗi bề mặt.
            <br />
            <strong>Một giải pháp phù hợp.</strong>
          </p>
          <Link href="/san-pham#noi-that">
            Sơn nội thất <Arrow diagonal />
          </Link>
          <Link href="/san-pham#ngoai-that">
            Sơn ngoại thất <Arrow diagonal />
          </Link>
          <Link href="/san-pham#chong-tham">
            Sơn chống thấm <Arrow diagonal />
          </Link>
        </div>
      </div>
    </>
  );
}
