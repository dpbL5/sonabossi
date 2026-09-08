"use client";
import { useActionState } from "react";
import { sendContact, type ContactFormState } from "@/app/actions/contact";
import { Arrow } from "./Brand";

const initialState: ContactFormState = { ok: false };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContact,
    initialState,
  );

  return (
    <form action={formAction} className="contact-form">
      <h3>Trao đổi nhu cầu hợp tác</h3>
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
        <label className="span-full" htmlFor="email">
          Email liên hệ *
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email liên hệ"
            required
            maxLength={254}
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

      <button type="submit" className="button button-red" disabled={isPending}>
        {isPending ? "Đang gửi..." : "Chuẩn bị nội dung hợp tác"} <Arrow />
      </button>
      {state.message && (
        <p role="status" className="form-status">
          {state.message}
        </p>
      )}
    </form>
  );
}
