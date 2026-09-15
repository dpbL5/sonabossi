---
name: Sơn ABOSSI
description: Hệ thống thiết kế website sơn cho đại lý và nhà thầu, nhận diện Na Uy.
colors:
  signal-red: "#ba0c2f"
  ember-red: "#940a26"
  deep-flag-navy: "#00205b"
  midnight-navy: "#00163f"
  pure-white: "#ffffff"
  cool-paper: "#f3f5f7"
  slate-ink: "#17263e"
  quiet-slate: "#5b6575"
  pale-line: "#dce1e7"
typography:
  display:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "clamp(42px, 5.1vw, 74px)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "clamp(38px, 4.2vw, 60px)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  headline-hero-mobile:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "clamp(39px, 8.2vw, 60px)"
    fontWeight: 600
    lineHeight: 1.16
  title-lg:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "clamp(30px, 3.1vw, 44px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  title-lg-contact:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "clamp(34px, 3.6vw, 50px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  scale:
    micro: "10px"
    caption: "11px"
    meta: "12px"
    label: "13px"
    control: "14px"
    body-sm: "15px"
    body: "16px"
    lead: "17px"
    emphasis: "18px"
rounded:
  square: "0px"
  control: "2px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
  section-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ember-red}"
  button-white:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.deep-flag-navy}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
    height: "52px"
  button-white-hover:
    backgroundColor: "{colors.cool-paper}"
  text-link:
    textColor: "{colors.deep-flag-navy}"
    rounded: "{rounded.control}"
    padding: "8px 0"
    height: "44px"
  filter-chip:
    textColor: "{colors.slate-ink}"
    rounded: "{rounded.control}"
    padding: "11px 20px"
    height: "46px"
  filter-chip-selected:
    backgroundColor: "{colors.deep-flag-navy}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.control}"
    padding: "11px 20px"
    height: "46px"
  field:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.slate-ink}"
    rounded: "{rounded.control}"
    padding: "11px 12px"
    height: "46px"
---

<!-- Design-first direction retained; implementation dimensions reconciled against src/app/globals.css, src/components/ and the rendered routes. Tokens in the frontmatter are normative; the prose explains where each is applied. -->

# Design System: Sơn ABOSSI

## Overview

**Creative North Star: "The Norwegian Standard"**

Rõ ràng như một bản đặc tả thi công, vững chắc như bề mặt phơi ngoài trời. Website nói với đại lý sơn và nhà thầu — người mua theo nhóm sản phẩm và đọc nhãn bao bì, không mua theo cảm hứng. Vì vậy hệ thống đặt thông tin lên trước: mảng ảnh lớn để nhận diện vật liệu, nền sáng để đọc catalogue ban ngày, và một bảng màu lấy từ cờ Na Uy làm dấu hiệu xuất xứ công nghệ.

Bố cục kế thừa thói quen của mẫu Flooring Solutions / Weblium — ảnh lớn, danh mục chia nhóm, khối công trình — rồi thay toàn bộ da màu bằng đỏ, navy và trắng. Cạnh vuông, không shadow, không pill: độ sâu đến từ ảnh và từ các mảng navy đặc, không từ hiệu ứng. Màu chỉ xuất hiện để đánh dấu hành động (đỏ) và vùng thương hiệu (navy); phần còn lại là giấy trắng và đường kẻ 1px.

Chữ chỉ dùng một họ Be Vietnam Pro cho mọi vai trò, không có serif hay mono. Nhịp điệu đến từ khoảng cách và bậc thang cỡ chữ, không từ trang trí; logo gốc giữ nguyên tỷ lệ và màu, không đổi để hợp palette.

**Key Characteristics:**
- Nền sáng là mặc định; navy là vùng, đỏ là hành động.
- Surfaces phẳng, cạnh vuông, phân vùng bằng nền và đường viền 1px.
- Một họ chữ, thang rời rạc 10–18px cho nội dung, thang riêng cho tiêu đề.
- Ảnh là vật liệu: ảnh sản phẩm giữ nguyên bao bì trên nền trắng, không cắt.
- Tương tác tối thiểu và dứt khoát: đổi màu 180ms, mũi tên dịch 3px.

## Colors

Bảng màu lấy trực tiếp từ cờ Na Uy — đỏ và navy trên nền trắng — nên không có màu thứ ba nào cần bào chế. Mọi giá trị bên dưới là hex, khớp với biến CSS trong `src/app/globals.css`. Hai màu minh họa trong bảng thử màu (`#F5F3EC` trần, `#B8A58C` sàn) và `#DDD` trong template email nằm ngoài palette: đó là nội dung minh họa, không phải token.

### Primary

- **Signal Red** (`#BA0C2F`, biến `--red`): CTA chính, liên kết điều hướng đang mở, trạng thái được chọn trên filter, focus ring. Là màu duy nhất được phép đòi sự chú ý.
- **Ember Red** (`#940A26`, biến `--red-dark`): chỉ dùng cho trạng thái hover của nút đỏ.

### Secondary

- **Deep Flag Navy** (`#00205B`, biến `--navy`): tiêu đề, navigation, khối hợp tác, filter được chọn, viền nút phụ. Vùng thương hiệu mặc định.
- **Midnight Navy** (`#00163F`, biến `--navy-deep`): nền footer và hover dạng đậm; không dùng cho chữ trên nền sáng.
- **Navy tints** (`#E7EDF7`, `#E1E8F2`, `#CBD8EE`, `#D1DDEF`, `#C0CEE4`, `#C3D0E5`): các bậc chữ phụ và meta đặt trên nền navy — pha theo hue navy chứ không dùng xám. Đường kẻ trên nền navy dùng `#355180`, riêng đường phân cách chân footer dùng `#29436D`.

### Neutral

- **Pure White** (`#FFFFFF`, biến `--white`): nền chính, panel form, chữ trên mọi nền đậm.
- **Cool Paper** (`#F3F5F7`, biến `--surface`): phân vùng section, nền ảnh sản phẩm và trang giới thiệu, nền chip đặc tính.
- **Slate Ink** (`#17263E`, biến `--ink`): nội dung chính trên nền sáng.
- **Quiet Slate** (`#5B6575`, biến `--muted`): mô tả, chú thích, tên dòng sản phẩm, meta — luôn là chữ phụ, không bao giờ là chữ chính.
- **Pale Line** (`#DCE1E7`, biến `--line`): đường phân cách và viền field 1px.

### Named Rules

**The Signal-Only Rule.** Đỏ chỉ dành cho hành động và vị trí điều hướng hiện tại; không dùng làm nền section, không dùng cho chữ dài, không dùng trang trí. Sự hiếm hoi của nó chính là tín hiệu.

**The Navy-Owns-Dark Rule.** Mọi bề mặt đậm đều là navy hoặc navy-deep; không dùng đen. Chữ trên nền đậm dùng Pure White hoặc sắc navy nhạt pha theo nền, không dùng xám.

**The No-Logo-Recolor Rule.** Logo gốc `public/sonabossi.png` giữ nguyên tỷ lệ và màu trên mọi nền; đặt trên khối trắng khi nền là navy.

## Typography

**Display Font:** Be Vietnam Pro (với `sans-serif`)
**Body Font:** Be Vietnam Pro (với `sans-serif`)
**Label/Mono Font:** không có — hệ thống chỉ dùng một họ chữ

**Character:** Một họ chữ duy nhất gánh cả display, body và label; sự phân cấp đến từ cỡ, weight và khoảng cách chứ không từ việc đổi font. Weight 400, 500, 600, 700 được nạp local, không gọi mạng. Tiêu đề weight 600 với `text-wrap: balance`; tracking âm nhẹ để tiêu đề lớn không bị rời chữ.

### Hierarchy

- **Display** (600, `clamp(42px, 5.1vw, 74px)` / 1.16, tracking -0.035em): H1 hero trang chủ. Ở ≤1100px cố định 60px, ≤760px `clamp(39px, 8.2vw, 60px)`, ≤380px 37px.
- **Headline** (600, `clamp(38px, 4.2vw, 60px)` / 1.16, tracking -0.035em): H1 của ba trang con; ≤760px cố định 39px.
- **Title lg** (600, `clamp(30px, 3.1vw, 44px)` / 1.3, tracking -0.03em): H2 section toàn site; khối hợp tác dùng `clamp(34px, 3.6vw, 50px)` và 38px trên mobile. Tiêu đề thẻ và panel (bài viết sản phẩm, panel form, dialog bao bì) nằm trong khoảng 21–24px và không theo thang clamp.
- **Title** (600, 24px / 1.4, tracking -0.025em): H3 mặc định — tên nhóm sơn, tiêu đề nguyên tắc, tên thẻ danh mục.
- **Body** (400, 16px / 1.7, tối đa 70ch): nội dung chính. Đoạn dẫn (hero, mở đầu trang con, dải giải pháp) dùng 17px / 1.8; mô tả và thẻ 14–15px.
- **Label** (500–600, 13px): label form, breadcrumb, meta thẻ, footer. Sau đó là các bậc nhỏ hơn cho topbar, chip bao bì, chú thích ảnh: 10–12px.

Thang nội dung rời rạc, đặt tên theo mục đích trong `typography.scale`: micro 10 · caption 11 · meta 12 · label 13 · control 14 · body-sm 15 · body 16 · lead 17 · emphasis 18. Control (button, navigation, filter, field) đứng ở 14px — một bậc trên label để tay và mắt tách được vùng bấm khỏi văn bản.

### Named Rules

**The One-Family Rule.** Không thêm serif, mono hay font thứ hai cho bất kỳ vai trò nào; nếu cần phân biệt, dùng weight, cỡ hoặc tracking.

**The Heading-Holds Rule.** Khi thang nội dung tăng, tiêu đề giữ nguyên cỡ — tương phản bậc thang đến từ khoảng cách, không từ việc kéo tiêu đề lên theo.

**The Tighter-Leading Rule.** Cỡ chữ càng lớn thì line-height càng siết: 1.16 cho display, 1.3–1.4 cho tiêu đề, 1.7–1.8 cho đoạn đọc. Không áp một tỷ lệ chung cho mọi vai trò.

## Layout

Container tối đa 1240px; gutter mỗi bên 48px, giảm xuống 32px ở ≤1100px và 20px ở ≤760px. Section dùng token `--space-section`: 96px, giảm xuống 64px ở ≤760px. Khoảng cách nhóm thường dùng 8, 12, 16, 24, 32, 48, 64px; bố cục câu chuyện/hợp tác có gap 72–88px trước khi thu nhỏ.

- Danh mục trên trang chủ: 3 cột, gap 28px (20px ở ≤900px), chuyển thẳng sang 1 cột tại ≤760px, gap 36px; không có bước 2 cột.
- Danh mục `/san-pham`: các hàng ảnh/nội dung 1:1, gap 64px (40px ở ≤1100px), chuyển 1 cột gap 24px ở ≤760px. Lưới sản phẩm 3 cột, 2 cột ở ≤1000px, 1 cột ở ≤600px.
- Dự án trang chủ: gallery masonry 3 cột, gap 32px; `/du-an` hiển thị toàn bộ ảnh, trang chủ hiển thị 6 ảnh đầu. Cả hai chuyển 2 cột ở ≤1000px và 1 cột ở ≤700px.
- Header desktop cao 92px. Menu mobile xuất hiện ở ≤900px, header cao 76px; ≤760px còn 72px. Topbar cao 36px, mobile 32px.
- Hero cao tối thiểu 610px, 580px ở ≤1100px, 690px ở ≥1600px; mobile dùng chiều cao nội dung và 250px vùng ảnh dưới.
- Form 2 cột; ở ≤900px chuyển 1 cột trong panel cạnh copy; ≤760px panel nằm dưới copy, các field trở lại 2 cột; ≤380px còn 1 cột. Footer 4 → 2 cột ở ≤900px; ≤760px phần thương hiệu chiếm cả hàng; ≤380px còn 1 cột.
- Bảng màu tham khảo: hai cột 1.2:1, gap 48px; chuyển một cột ở ≤900px, lưới swatch 4 → 3 cột ở ≤480px.

## Elevation & Depth

Hệ thống này **không có shadow**. Không có shadow ở bất kỳ trạng thái nào — kể cả hover, focus hay dialog. Độ sâu được tạo bằng ba thứ khác: đổi nền (Pure White → Cool Paper → Deep Flag Navy → Midnight Navy), đường viền 1px Pale Line, và ảnh lớn phủ mảng màu. Plaque Na Uy trên trang giới thiệu nổi lên bằng nền navy đặc chồng lên ảnh, không bằng bóng đổ. Hero dùng lớp gradient sáng để giữ độ đọc của chữ trên ảnh, không dùng như trang trí độc lập.

### Named Rules

**The Flat-By-Default Rule.** Bề mặt phẳng ở mọi trạng thái. Cần tách một khối khỏi nền thì đổi nền hoặc thêm viền 1px — không thêm `box-shadow`.

**The Hue-Not-Gray Rule.** Chữ phụ trên nền màu phải pha theo nền đó (navy nhạt trên navy) hoặc dùng Pure White; không đặt xám trung tính lên nền đậm.

## Shapes

Bo góc gần như không tồn tại: control (button, filter, field, swatch) dùng `--radius: 2px`, mọi thứ khác — ảnh, thẻ, khối màu — vuông cạnh. Không có pill, không bo tròn lớn, không cắt ảnh theo hình học. Nút mũi tên phủ trên ảnh là hình vuông 46px dù class tên `round-arrow`.

Tỷ lệ ảnh là một phần của hình dạng: ảnh nhóm sơn trang chủ 1.18, đổi thành 1.5 ở ≤760px; ảnh gallery giữ nguyên tỷ lệ gốc của từng ảnh, không ép khung; ảnh bao bì sản phẩm vuông 1:1 với `object-fit: contain` để không cắt nhãn; ảnh catalogue min-height 420px, mobile 300px. Không có tỷ lệ 4:3 bắt buộc.

### Named Rules

**The Square-By-Default Rule.** Mặc định là 0px. Chỉ control được bo 2px, và không có bậc nào ở giữa.

**The Uncropped-Packaging Rule.** Ảnh bao bì sản phẩm không bao giờ bị cắt: khung vuông, nền trắng, viền 1px, `object-fit: contain`.

## Components

Đặc tính chung: refined and restrained. Component không tự gây chú ý; chúng đổi màu khi có tương tác và giữ nguyên hình dạng trong mọi trạng thái.

### Buttons

- **Shape:** bo 2px, không shadow, cạnh vuông vức.
- **Primary:** nền Signal Red, chữ Pure White, padding 14px 24px, min-height 52px, chữ 14px weight 600, gap 24px giữa nhãn và mũi tên.
- **Hover / Focus:** hover đổi nền sang Ember Red trong 180ms; focus-visible dùng outline đỏ 3px, offset 5px. Mũi tên SVG 20px (stroke 1.7) dịch phải 3px trong 180ms khi hover.
- **Inverse:** nền Pure White, chữ Deep Flag Navy, hover nền Cool Paper. Dùng trên nền navy và trên ảnh.
- **Business CTA trong header:** biến thể của primary, min-height 46px, chữ 13px.
- **Secondary:** không có button viền navy. Hành động phụ là text-link navy 14px weight 600, min-height 44px, gap 16px, hover chuyển đỏ và mũi tên dịch 3px.

### Chips

Hai loại chip, cùng ngôn ngữ hình dạng nhưng khác vai trò.

- **Filter chip:** nền trong suốt, viền 1px Pale Line, bo 2px, padding 11px 20px, min-height 46px, chữ 14px. Hover đổi viền sang navy. Trạng thái chọn (`aria-pressed="true"`) đảo thành nền Deep Flag Navy chữ Pure White — không dùng nền trong suốt hay viền line cho trạng thái chọn.
- **Đặc tính bao bì (`paint-labels`):** chip thông tin, nền Cool Paper, chữ navy 12px, padding 4px 9px, bo 2px. Không bấm được, chỉ để đọc đặc tính in trên bao bì.
- **Số lượng sản phẩm** đứng cạnh filter dưới dạng `role="status"` 13px Quiet Slate, cập nhật theo bộ lọc.

### Cards / Containers

- **Corner Style:** 0px.
- **Background:** Pure White trên nền trang; Cool Paper cho ô ảnh và vùng phân tách.
- **Shadow Strategy:** không có (xem Elevation & Depth).
- **Border:** ảnh bao bì và ô swatch có viền 1px Pale Line; thẻ nội dung không viền.
- **Internal Padding:** padding chữ phía trên ảnh 20–22px; panel form 36px, giảm 26px ở ≤900px và 24px 20px ở ≤760px.
- **Hover:** chỉ ảnh được zoom — `scale(1.035)` trong 350ms với `cubic-bezier(.16,1,.3,1)`. Thẻ không đổi nền, không nâng lên.

### Product Card (danh mục sơn)

- Ảnh là một `<button>` mở dialog, có nút phủ chữ "Xem bao bì" kèm mũi tên chéo (11–12px), hover chuyển sang đỏ; `aria-haspopup="dialog"`.
- Tên sản phẩm dùng h3 21px / 1.5; tên dòng (`paint-code`) 12px Quiet Slate, `overflow-wrap: anywhere`.
- Chip đặc tính nằm giữa, cuối thẻ là text-link; `margin-top: auto` giữ hàng link thẳng đáy giữa các thẻ cao thấp khác nhau.
- Anchored group `scroll-margin-top: 120px`; nhóm giữ id cũ và có thêm `son-lot`.

### Gallery công trình

Lưới masonry dựng bằng CSS `column-count`: 3 cột gap 32px, 2 cột gap 24px ở ≤1000px, 1 cột ở ≤700px. Mỗi ô là một `div` giữ nguyên tỷ lệ ảnh gốc — `next/image` nhận đúng `width`/`height` thật và ảnh đặt `width: 100%; height: auto`, không ép khung, không crop. Khung ảnh vuông cạnh, viền 1px Pale Line trên nền Cool Paper; hover chỉ zoom ảnh `scale(1.035)` trong 350ms.

Không có caption dưới ảnh: gallery chỉ hiển thị ảnh, không tiêu đề, không overlay, không hover-only. Mỗi ảnh mang alt text mô tả nội dung thật trong `src/data/gallery.ts` (ảnh dựng lại mô tả theo bố cục nhìn thấy, không gán thành công trình đã thi công). Gallery không có bộ lọc và không đánh số. Cuối gallery có ghi chú 14px Quiet Slate nêu ảnh do chủ website cung cấp; không gán ảnh thành dự án ABOSSI đã thi công.

### Inputs / Fields

- **Style:** nền Pure White, viền 1px Pale Line, bo 2px, min-height 46px, padding 11px 12px, chữ 14px Slate Ink; placeholder Quiet Slate.
- **Label:** luôn hiển thị phía trên field, 13px weight 500, gap 7px — không dùng placeholder thay label. Field bắt buộc đánh dấu `*` ngay trong nhãn.
- **Focus:** outline đỏ 3px offset 5px như mọi control; không đổi viền, không glow.
- **Validation:** dùng native — `required` và `pattern` cho số điện thoại kèm `title` giải thích.

### Navigation

- **Desktop:** header trắng sticky cao 92px, viền dưới 1px Pale Line. Logo trái 210×44, bốn liên kết giữa (14px weight 500, `nowrap`), nút CTA phải. Liên kết đang mở dùng `aria-current="page"` → chữ đỏ kèm gạch chân 2px×18px đặt lệch trái dưới chữ; hover cũng chuyển đỏ.
- **Topbar:** dải navy cao 36px, chữ 12px, cờ Na Uy 20×15 bên trái, thông tin liên hệ bên phải (ẩn ở ≤760px).
- **Mobile:** menu xuất hiện ở ≤900px, header còn 76px (72px ở ≤760px). Mỗi mục là hàng 52px viền dưới 1px, đóng bằng Escape hoặc khi chọn liên kết.
- **Footer:** nền Midnight Navy, chữ 13px pha navy nhạt, logo trên khối trắng; lưới 4 cột → 2 cột ở ≤900px.

### Dialog bao bì kèm đặc tả sản phẩm (signature)

`<dialog>` native mở bằng `showModal()`, không tự vẽ overlay. Khung `min(900px, 100% - 40px)`, padding 20px, nền trắng, viền 1px, backdrop `rgb(0 22 63 / 72%)`. Đầu dialog là tên sản phẩm (22px) cùng tên dòng 13px Quiet Slate ở dưới, và nút Đóng 44px viền navy đảo màu khi hover.

Thân dialog là lưới hai cột `1.05fr / 0.95fr`, gap 28px, `align-items: stretch`. Cột trái là panel viền 1px Pale Line, padding 12px, ảnh bao bì căn giữa và dùng `object-fit: contain` để luôn thấy trọn nhãn. Cột phải là bản đặc tả, cuộn dọc khi tràn (`max-height: calc(100dvh - 180px)`), gồm: chip navy mang huy hiệu in trên bao bì (ví dụ "Chống bong tróc") kèm dòng lưu ý 13px ("Sản phẩm không mùi"); đoạn mô tả 16px; và ba khối tiêu đề 13px/600 navy — **Đặc tính nổi bật** (gạch đầu dòng 8px màu đỏ), **Ứng dụng** (gạch đầu dòng navy), **Khuyến nghị thi công** (bảng `dl` hai cột `minmax(104px, 0.8fr) / 1.2fr`, đường 1px giữa các hàng: lớp lót, số lớp, dụng cụ, pha loãng, khô bề mặt, định mức tham khảo). Cuối cột là dòng 13px Quiet Slate nêu bảo hành 10 năm và tiêu chí môi trường in trên bao bì (ECO: không APEO, không kim loại nặng, không formaldehyde, VOC thấp).

Nội dung lấy từ `src/data/products.json` qua các trường `tagline`, `note`, `summary`, `features`, `usage`, `specs`. Ở ≤900px dialog về một cột — ảnh trên, đặc tả dưới — và chính dialog cuộn thay cho cột phải. Bấm ra ngoài khung hoặc đóng dialog đều xoá lựa chọn.

### Bảng màu tham khảo (ColorPicker)

12 sắc độ biên tập chia ba họ màu, lọc bằng chip có `aria-pressed`. Swatch là nút: viền 1px Pale Line, padding 5px, ô màu cao 72px (64px ở ≤480px), tên màu 13px. Swatch được chọn dùng outline navy 2px offset 2px (khác focus đỏ); chọn màu cập nhật mảng tường CSS và tên/HEX kèm nút sao chép có trạng thái lỗi. HEX không phải mã pha ABOSSI và điều đó được ghi ngay tại bảng, kèm nguồn xu hướng.

### Biểu mẫu hợp tác

Panel trắng đặt trên nền navy, padding 36px → 26px ở ≤900px → 24px 20px ở ≤760px. Sáu field trong lưới hai cột (`span-full` cho email và nhu cầu): họ tên, số điện thoại, email, bạn là, khu vực, nhu cầu. Nút submit là primary full-width, `justify-content: space-between`, hiển thị "Đang gửi..." khi pending. Kết quả là `role="status"` 13px bên dưới form, rỗng thì không chiếm chỗ. Form gửi qua Server Action (`useActionState`) và Resend; lỗi trả về câu thông báo tiếng Việt nêu đúng việc cần làm.

### Email thông báo lead (Resend)

Dựng trong `src/lib/contact-email.ts` và gửi từ Server Action. Khổ 600px, nền Cool Paper, thẻ trắng viền 1px Pale Line, không bo góc và không đổ bóng. Đầu thư là dải navy chứa logo trên nền trắng (ảnh 200×67 lấy từ `public/images/email/logo-sonabossi.png`, bản rút gọn của logo gốc) và dải ba màu cờ Na Uy cao 6/3/3px (đỏ, trắng, navy). Khối tiêu đề gồm nhãn 13px Quiet Slate "Yêu cầu liên hệ mới", tên khách 26px navy, dòng meta "vai trò · khu vực" 15px Quiet Slate. Hai hành động đứng cạnh nhau: nút đỏ "Gọi {số}" (`tel:`) và nút viền navy "Trả lời email" (`mailto:`) — đỏ chỉ dành cho hành động chính. Bảng thông tin liên hệ lặp lại đúng kiểu bảng đặc tả trong dialog bao bì: nhãn 13px Quiet Slate, giá trị 15px Slate Ink, đường 1px Pale Line giữa các hàng. Nhu cầu khách ghi nằm trong panel Cool Paper viền trái 3px navy và giữ nguyên xuống dòng; không có nhu cầu thì bỏ hẳn panel. Cuối thư là footer navy đậm chứa pháp nhân, địa chỉ, hotline và website. Kèm bản text thuần cho client không dựng HTML.

Ở ≤600px thư về một cột và hai nút xếp dọc full-width. Font brand Be Vietnam Pro nhúng bằng `@font-face` trỏ về `public/fonts/`; client không hỗ trợ sẽ rơi về font hệ thống, nên mọi khối chữ phải đọc được với cả hai. Ảnh chỉ có logo, luôn kèm alt; không dùng ảnh banner vì client chặn ảnh theo mặc định.

### Bốn trang đã triển khai

1. `/`: hero công trình + CTA hợp tác; nhóm sơn; câu chuyện nguồn gốc; gallery 6 ảnh không gian và công trình; khối hợp tác.
2. `/gioi-thieu`: thương hiệu, nguồn gốc công nghệ Na Uy theo logo, cách tiếp cận giải pháp cho đại lý/nhà thầu.
3. `/san-pham`: bảng màu tham khảo; danh mục nội thất, ngoại thất, sơn lót, chống thấm; bộ lọc, dialog bao bì kèm đặc tả và khuyến nghị thi công; CTA tư vấn.
4. `/du-an`: gallery masonry 20 ảnh không gian và công trình, chỉ hiển thị ảnh kèm alt text mô tả; ghi rõ ảnh do chủ website cung cấp, chưa phải hồ sơ dự án đã xác minh.

### Tương tác và accessibility

Button/link chuyển màu trong 180ms; mũi tên dịch phải 3px trong 180ms. Ảnh liên kết zoom 1.035 trong 350ms với `cubic-bezier(.16,1,.3,1)`. Tương tác đặc trưng là chọn nhóm sơn và xem thông tin ứng dụng trực tiếp. Nội dung không ẩn chờ animation. Tôn trọng `prefers-reduced-motion` (tắt transition và animation, dùng cuộn tức thời). Focus đỏ 3px, offset 5px; skip link; `aria-current` trên navigation; `aria-pressed` trên filter và swatch. Button/menu/filter chính có mục bấm tối thiểu 44px. Trên mobile, line break ở section heading trở thành khoảng trắng để giữ từ tách biệt.

## Do's and Don'ts

### Do:

- **Do** giữ logo gốc, bảng màu cờ Na Uy, nội dung tiếng Việt và ưu tiên đại lý/nhà thầu.
- **Do** giữ nhãn minh họa và mô tả đúng chức năng của từng khối.
- **Do** để đỏ ở mức tối thiểu: hành động, vị trí điều hướng hiện tại, trạng thái chọn.
- **Do** dùng đường viền 1px Pale Line và đổi nền khi cần tách khối.
- **Do** giữ `--radius: 2px` cho control và 0px cho mọi thứ còn lại.
- **Do** đọc lại giá trị trong `src/app/globals.css` trước khi thêm cỡ chữ mới, và cập nhật `typography.scale` nếu bậc mới là thật.

### Don't:

- **Don't** thêm shadow, pill, hay bộ font thứ hai vào hệ thống cạnh vuông hiện tại.
- **Don't** dùng đen thay navy cho bề mặt đậm, và không đặt xám trung tính lên nền màu.
- **Don't** cắt ảnh bao bì sản phẩm hay đổi tỷ lệ khung vuông của nó.
- **Don't** dùng placeholder thay label, và không bỏ trạng thái focus-visible.
- **Don't** thêm bậc cỡ chữ mới ngoài thang đã khai báo mà không cập nhật hệ thống.
- **Don't** biến hình stock thành hồ sơ dự án đã xác minh.

### Nội dung cần hoàn thiện

Chưa xác nhận thông số kỹ thuật, giá bán, chiết khấu đại lý, công trình thực tế và kênh tiếp nhận. Không tự tạo chứng chỉ, bảo hành, số liệu, đánh giá hoặc khách hàng. Hình stock là minh họa. Biểu mẫu đã gửi lead qua Resend (cần `RESEND_API_KEY`, `RESEND_CONTACT_TO`), nhưng copy cạnh form vẫn nói "sao chép nội dung" — cần thống nhất lại. Tiêu đề thẻ và panel còn 8 giá trị theo breakpoint (21, 22, 23, 25, 27, 28, 32, 37px) chưa gộp thành thang, nên chưa khai báo trong `typography`.
