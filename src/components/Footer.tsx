import Link from "next/link";
import { Flag, Logo } from "./Brand";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="ABOSSI — Trang chủ">
              <Logo />
            </Link>
            <p>
              Sắc màu khởi nguồn từ cảm hứng.
              <br />
              Giải pháp bắt đầu từ công trình.
            </p>
            <span className="origin">
              <Flag /> TECHNOLOGY OF NORWAY
            </span>
          </div>
          <div>
            <h2>Khám phá ABOSSI</h2>
            <Link href="/gioi-thieu">Về thương hiệu</Link>
            <Link href="/san-pham">Danh mục sản phẩm</Link>
            <Link href="/du-an">Không gian & dự án</Link>
          </div>
          <div>
            <h2>Giải pháp sơn</h2>
            <Link href="/san-pham#noi-that">Sơn nội thất</Link>
            <Link href="/san-pham#ngoai-that">Sơn ngoại thất</Link>
            <Link href="/san-pham#chong-tham">Sơn chống thấm</Link>
          </div>
          <div>
            <h2>Cùng phát triển</h2>
            <Link href="/#hop-tac">Dành cho đại lý</Link>
            <Link href="/#hop-tac">Dành cho nhà thầu</Link>
            <p>
              Cùng trao đổi giải pháp cho
              <br />
              công trình tiếp theo của bạn.
            </p>
          </div>
          <div className="footer-company">
            <h2>Thông tin doanh nghiệp</h2>
            <p className="company-name">CÔNG TY TNHH SX&amp;TM LUYỆN THANH</p>
            <p>
              <strong>Thương hiệu:</strong> SƠN ABOSSI
              <br />
              <strong>Địa chỉ:</strong> Cầu Quảng Nguyên, Quảng Phú Cầu,
              Ứng Hòa, Hà Nội
            </p>
            <a href="tel:+84978566993">Điện thoại: 0978 566 993</a>
            <a href="https://sonabossi.com/" rel="noopener noreferrer">
              Website: Sonabossi.com
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sơn ABOSSI.</span>
          <span>Công nghệ Na Uy · Không gian Việt</span>
          <a href="#main">Về đầu trang ↑</a>
        </div>
      </div>
    </footer>
  );
}
