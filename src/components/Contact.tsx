"use client";
import { useState } from "react";
import { Arrow } from "./Brand";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="hop-tac" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <h2>
            Cùng ABOSSI
            <br />
            mở ra cơ hội mới.
          </h2>
          <p>
            Bạn đang tìm nguồn sơn cho đại lý hay giải pháp cho một công trình?
            Bắt đầu bằng nhu cầu của bạn.
          </p>
          <div className="partner-line">
            <span>Đại lý phân phối</span>
            <span>Nhà thầu thi công</span>
          </div>
          <p className="contact-note">
            Điền nhu cầu và sao chép nội dung để trao đổi cùng ABOSSI.
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <h3>Trao đổi nhu cầu hợp tác</h3>
          {submitted ? (
            <div className="brief-result">
              <p className="form-status" role="status">
                Đã gửi thông tin liên hệ.
              </p>
            </div>
          ) : (
            <>
              <div className="form-grid">
                <label>
                  Họ và tên *
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Nguyễn Văn An"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  Số điện thoại *
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Số điện thoại liên hệ"
                    pattern="[+]?[0-9][0-9 ]{7,17}[0-9]"
                    title="Nhập số điện thoại từ 9 đến 20 ký tự, gồm chữ số, khoảng trắng và dấu + ở đầu nếu có."
                    required
                    maxLength={20}
                  />
                </label>
                <label>
                  Bạn là
                  <select name="role" defaultValue="Đại lý phân phối">
                    <option>Đại lý phân phối</option>
                    <option>Nhà thầu thi công</option>
                    <option>Chủ công trình</option>
                  </select>
                </label>
                <label>
                  Khu vực
                  <input
                    name="region"
                    autoComplete="address-level1"
                    placeholder="Tỉnh / thành phố"
                    maxLength={100}
                  />
                </label>
              </div>
              <label>
                Nhu cầu của bạn
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Nhóm sản phẩm, hạng mục hoặc nhu cầu mở đại lý..."
                  maxLength={2000}
                />
              </label>
              <button type="submit" className="button button-red">
                Chuẩn bị nội dung hợp tác <Arrow />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
