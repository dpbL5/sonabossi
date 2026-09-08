"use client";
import { ContactForm } from "./ContactForm";

export default function Contact() {
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
        <ContactForm />
      </div>
    </section>
  );
}
