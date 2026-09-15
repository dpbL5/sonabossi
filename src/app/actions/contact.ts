"use server";

import { Resend } from "resend";
import { buildContactEmail } from "@/lib/contact-email";
import { siteUrl } from "@/lib/seo";

export type ContactFormState = {
  ok: boolean;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

// Sandbox resend.dev chỉ giao được tới email tài khoản Resend —
// sau khi verify domain riêng thì đổi RESEND_CONTACT_FROM/TO trong .env
const FROM =
  process.env.RESEND_CONTACT_FROM?.trim() ||
  "Sơn ABOSSI Test Email <onboarding@resend.dev>";
const TO = process.env.RESEND_CONTACT_TO?.trim() || "";

export async function sendContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  if (!name || !phone || !email) {
    return {
      ok: false,
      message: "Vui lòng điền họ tên, số điện thoại và email.",
    };
  }

  const payload = {
    name,
    phone,
    email,
    role: String(formData.get("role") ?? "").trim(),
    region: String(formData.get("region") ?? "").trim(),
    message: String(formData.get("message") ?? "")
      .trim()
      .slice(0, 2000),
  };

  if (!TO) {
    console.error("RESEND_CONTACT_TO chưa được cấu hình trong .env");
    return { ok: false, message: "Hệ thống đang bận, vui lòng thử lại sau." };
  }

  const { subject, html, text } = buildContactEmail(payload, {
    siteUrl,
    receivedAt: new Date(),
  });

  const { data, error } = await resend.emails.send(
    {
      from: FROM,
      to: TO,
      replyTo: payload.email,
      subject,
      html,
      text,
    },
    { idempotencyKey: `contact-form/${crypto.randomUUID()}` },
  );

  if (error) {
    console.error("Resend gửi mail thất bại:", error.message);
    return {
      ok: false,
      message: "Gửi email thất bại, bạn vui lòng thử lại sau.",
    };
  }

  console.log("Đã gửi email lead, id:", data?.id);
  return {
    ok: true,
    message: "Cảm ơn bạn! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.",
  };
}
