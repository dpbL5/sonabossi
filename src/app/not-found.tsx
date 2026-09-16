import Link from "next/link";
import { Arrow } from "@/components/Brand";

export default function NotFound() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <nav aria-label="Đường dẫn" className="breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Không tìm thấy trang</span>
          </nav>
          <h1>Không tìm thấy trang này.</h1>
          <p>
            Đường dẫn không tồn tại hoặc sản phẩm đã được thay đổi. Xem lại danh
            mục sơn ABOSSI để chọn đúng dòng sản phẩm.
          </p>
        </div>
      </section>
      <section className="simple-cta">
        <div className="container">
          <h2>
            Xem lại
            <br />
            danh mục sản phẩm.
          </h2>
          <Link className="button button-white" href="/san-pham">
            Xem sản phẩm <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
