import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Brand";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <h1 className="sr-only">Sơn ABOSSI — Sơn của người Việt</h1>
        <Image
          src="/images/hero-banner.png"
          alt="Sáu thùng sơn ABOSSI nội thất, ngoại thất và chống thấm trên banner đỏ trắng có logo, pháp nhân và slogan thương hiệu"
          width={1774}
          height={887}
          sizes="100vw"
          preload
          className="hero-photo"
        />
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
