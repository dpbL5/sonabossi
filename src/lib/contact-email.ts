export type ContactLead = {
  name: string;
  phone: string;
  email: string;
  role: string;
  region: string;
  message: string;
};

export type ContactEmail = {
  subject: string;
  html: string;
  text: string;
};

const NAVY = "#00205b";
const NAVY_DEEP = "#00163f";
const RED = "#ba0c2f";
const INK = "#17263e";
const MUTED = "#5b6575";
const LINE = "#dce1e7";
const SURFACE = "#f3f5f7";
const WHITE = "#ffffff";
const ON_NAVY = "#c3cddf";

const FONT =
  "'Be Vietnam Pro',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif";

function type(
  size: number,
  color: string,
  weight = 400,
  lineHeight = 1.6,
): string {
  return `font-family:${FONT};font-size:${size}px;line-height:${lineHeight};font-weight:${weight};color:${color};`;
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Giá trị đi vào tiêu đề email phải là một dòng duy nhất.
function line(value: string): string {
  return esc(value.replace(/\s+/g, " ").trim());
}

function multiline(value: string): string {
  return esc(value).replace(/\r?\n/g, "<br />");
}

function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function specRow(label: string, value: string): string {
  return `<tr>
              <td class="spec-label" width="150" style="width:150px;padding:11px 16px 11px 0;border-bottom:1px solid ${LINE};vertical-align:top;${type(13, MUTED)}">${esc(label)}</td>
              <td style="padding:11px 0;border-bottom:1px solid ${LINE};vertical-align:top;${type(15, INK)}">${esc(value)}</td>
            </tr>`;
}

export function buildContactEmail(
  lead: ContactLead,
  options: { siteUrl: URL; receivedAt: Date },
): ContactEmail {
  const { siteUrl, receivedAt } = options;
  const logo = new URL("/images/email/logo-sonabossi.png", siteUrl).href;
  const fonts = new URL("/fonts/", siteUrl).href;

  const subject = `Yêu cầu liên hệ mới: ${line(lead.name)} (${line(lead.phone)})`;
  const meta = [lead.role, lead.region].filter(Boolean).join(" · ");
  const received = new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(receivedAt);

  const details = [
    ["Họ và tên", lead.name],
    ["Số điện thoại", lead.phone],
    ["Email", lead.email],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => specRow(label, value))
    .join("\n            ");

  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>${esc(subject)}</title>
<style>
@font-face{font-family:'Be Vietnam Pro';font-style:normal;font-weight:400;src:url('${fonts}be-vietnam-400.ttf') format('truetype');}
@font-face{font-family:'Be Vietnam Pro';font-style:normal;font-weight:600;src:url('${fonts}be-vietnam-600.ttf') format('truetype');}
body{margin:0;padding:0;background:${SURFACE};}
img{border:0;outline:none;text-decoration:none;}
a{text-decoration:none;}
@media (max-width:600px){
.wrapper{padding:14px 10px !important;}
.card{width:100% !important;}
.pad{padding-left:20px !important;padding-right:20px !important;}
.title{font-size:23px !important;}
.action-cell{display:block !important;width:100% !important;margin-bottom:10px !important;}
.action-cell:last-child{margin-bottom:0 !important;}
.actions{width:100% !important;}
.action{display:block !important;width:100% !important;padding:14px 0 !important;text-align:center !important;}
.action-gap{display:none !important;}
.spec-label{width:108px !important;padding-right:12px !important;}
}
</style>
</head>
<body style="margin:0;padding:0;background:${SURFACE};">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${line(`Yêu cầu liên hệ mới từ ${lead.name}`)} — ${line(lead.phone)}${meta ? ` — ${line(meta)}` : ""}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SURFACE};">
  <tr>
    <td class="wrapper" align="center" style="padding:28px 12px;">
      <table role="presentation" class="card" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:${WHITE};border:1px solid ${LINE};">
        <tr>
          <td class="pad" style="padding:18px 28px;background:${NAVY};">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="background:${WHITE};padding:9px 12px;">
                  <img src="${logo}" width="200" height="67" alt="Sơn ABOSSI — Technology of Norway" style="display:block;width:200px;height:67px;">
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="font-size:0;line-height:0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td height="6" style="height:6px;background:${RED};font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr><td height="3" style="height:3px;background:${WHITE};font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr><td height="3" style="height:3px;background:${NAVY};font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="pad" style="padding:30px 28px 0;">
            <p style="margin:0 0 10px;${type(13, MUTED, 500)}">Yêu cầu liên hệ mới</p>
            <h1 class="title" style="margin:0;${type(26, NAVY, 600, 1.3)}">${esc(lead.name)}</h1>
            ${meta ? `<p style="margin:10px 0 0;${type(15, MUTED)}">${esc(meta)}</p>` : ""}
          </td>
        </tr>
        <tr>
          <td class="pad" style="padding:22px 28px 0;">
            <table role="presentation" class="actions" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td class="action-cell" style="background:${RED};">
                  <a class="action" href="${telHref(lead.phone)}" style="display:inline-block;padding:13px 20px;${type(15, WHITE, 500, 1)}">Gọi ${esc(lead.phone)}</a>
                </td>
                <td class="action-gap" width="10">&nbsp;</td>
                <td class="action-cell" style="border:1px solid ${NAVY};">
                  <a class="action" href="mailto:${esc(lead.email)}" style="display:inline-block;padding:12px 20px;${type(15, NAVY, 500, 1)}">Trả lời email</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="pad" style="padding:26px 28px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${LINE};">
            ${details}
            </table>
          </td>
        </tr>
        ${
          lead.message
            ? `<tr>
          <td class="pad" style="padding:24px 28px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SURFACE};border-left:3px solid ${NAVY};">
              <tr>
                <td style="padding:14px 16px;">
                  <p style="margin:0 0 6px;${type(13, MUTED, 500)}">Nhu cầu khách ghi</p>
                  <div style="${type(15, INK, 400, 1.7)}">${multiline(lead.message)}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>`
            : ""
        }
        <tr>
          <td class="pad" style="padding:22px 28px 28px;">
            <p style="margin:0;${type(13, MUTED, 400, 1.7)}">Trả lời email này để gửi thư trực tiếp cho khách. Yêu cầu nhận lúc ${esc(received)} (giờ Việt Nam).</p>
          </td>
        </tr>
        <tr>
          <td class="pad" style="padding:22px 28px;background:${NAVY_DEEP};">
            <p style="margin:0 0 8px;${type(13, WHITE, 600)}">CÔNG TY TNHH SX&amp;TM LUYẾN THANH</p>
            <p style="margin:0 0 10px;${type(12, ON_NAVY, 400, 1.7)}">Thương hiệu SƠN ABOSSI · Cầu Xà Kiều, Xã Ứng Thiên, Hà Nội</p>
            <p style="margin:0;${type(12, ON_NAVY, 400, 1.7)}"><a href="tel:+84978566993" style="color:${WHITE};text-decoration:none;">0978 566 993</a> · <a href="https://sonabossi.com/" style="color:${WHITE};text-decoration:none;">Sonabossi.com</a></p>
            <p style="margin:12px 0 0;${type(11, "#8ea0bd", 400, 1.7)}">Sơn của người Việt. Công nghệ từ Na-uy</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  const text = [
    "YÊU CẦU LIÊN HỆ MỚI",
    `${lead.name}${meta ? ` — ${meta}` : ""}`,
    "",
    `Họ và tên: ${lead.name}`,
    `Số điện thoại: ${lead.phone}`,
    `Email: ${lead.email}`,
    ...(lead.message ? ["", "Nhu cầu khách ghi:", lead.message] : []),
    "",
    `Trả lời email này để gửi thư trực tiếp cho khách. Yêu cầu nhận lúc ${received} (giờ Việt Nam).`,
    "",
    "CÔNG TY TNHH SX&TM LUYẾN THANH",
    "Thương hiệu SƠN ABOSSI · Cầu Xà Kiều, Xã Ứng Thiên, Hà Nội",
    "0978 566 993 · Sonabossi.com",
  ].join("\n");

  return { subject, html, text };
}
