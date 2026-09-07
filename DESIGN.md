---
name: Sơn ABOSSI
description: Website sơn dành cho đại lý và nhà thầu, với nhận diện Na Uy.
colors:
  navy: "#00205b"
  navy-deep: "#00163f"
  red: "#ba0c2f"
  red-dark: "#940a26"
  white: "#fff"
  surface: "#f3f5f7"
  ink: "#17263e"
  muted: "#5b6575"
  line: "#dce1e7"
typography:
  display:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "clamp(42px, 5.1vw, 74px)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  control: "2px"
spacing:
  section: "96px"
  section-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.red-dark}"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
---

<!-- Design-first direction retained; implementation dimensions reconciled after the four routes were built. Source: src/app/globals.css, src/app/layout.tsx, src/components/. -->

# ABOSSI — Hệ thống thiết kế

## Overview
Website sơn dành cho đại lý và nhà thầu. Kế thừa bố cục ảnh lớn, danh mục và công trình của mẫu Flooring Solutions / Weblium; chuyển nhận diện sang đỏ, navy và trắng từ cờ Na Uy. Cảm giác rõ ràng, vững chắc, hiện đại. Logo gốc giữ nguyên tỷ lệ và màu.

## Colors
| Token | Giá trị | Vai trò |
| --- | --- | --- |
| `--navy` | `#00205B` | Tiêu đề, navigation, vùng thương hiệu và footer |
| `--navy-deep` | `#00163F` | Hover navy, nền đậm |
| `--red` | `#BA0C2F` | CTA chính, trạng thái được chọn |
| `--red-dark` | `#940A26` | Hover CTA |
| `--white` | `#FFFFFF` | Nền chính, chữ trên nền đậm |
| `--surface` | `#F3F5F7` | Phân vùng, nền ảnh sản phẩm |
| `--ink` | `#17263E` | Nội dung chính |
| `--muted` | `#5B6575` | Mô tả và chú thích |
| `--line` | `#DCE1E7` | Đường phân cách và viền trường nhập |

Nền sáng phục vụ đọc danh mục và xem vật liệu trong điều kiện làm việc ban ngày. Navy sở hữu vùng hợp tác; navy-deep làm nền footer. Đỏ tập trung vào hành động và navigation hiện tại; filter được chọn dùng navy. Gradient trên ảnh hero phục vụ độ đọc của chữ, không dùng như trang trí độc lập. Không đổi màu logo.

## Typography
Be Vietnam Pro lưu local, fallback sans-serif; các weight 400, 500, 600, 700 được nạp. Một họ chữ dùng cho cả display, body và label; không có font serif hoặc mono riêng. Body mặc định 15px / 1.75; đoạn văn tối đa 70ch. Tiêu đề weight 600 và `text-wrap: balance`.

| Vai trò | Kích thước / line-height | Tracking |
| --- | --- | --- |
| H1 mặc định / hero desktop | `clamp(42px, 5.1vw, 74px)` / 1.16 | -0.035em |
| H1 trang con | `clamp(38px, 4.2vw, 60px)` / 1.16 | -0.035em |
| H2 mặc định | `clamp(30px, 3.1vw, 44px)` / 1.3 | -0.03em |
| H3 mặc định | 24px / 1.4 | -0.025em |
| Body | 15px / 1.75, các mô tả 13–16px | normal |
| Button / navigation | 13px, weight 600 / 500 | normal |
| Form label / chú thích | 12px / 9–12px | normal |

Hero H1 ở viewport ≤1100px dùng 60px, ≤760px dùng `clamp(39px, 8.2vw, 60px)`, ≤380px dùng 37px. H1 trang con ở ≤760px là 39px. H2 hợp tác dùng `clamp(34px, 3.6vw, 50px)` và 38px trên mobile. Không ép chữ hoa toàn bộ nội dung dài.

## Layout
Container tối đa 1240px; gutter mỗi bên 48px, giảm xuống 32px ở ≤1100px và 20px ở ≤760px. Section dùng token `--space-section`: 96px, giảm xuống 64px ở ≤760px. Khoảng cách nhóm thường dùng 8, 12, 16, 24, 32, 48, 64px; bố cục câu chuyện/hợp tác có gap 72–88px trước khi thu nhỏ.

- Danh mục trên trang chủ: 3 cột, gap 28px (20px ở ≤900px), chuyển thẳng sang 1 cột tại ≤760px, gap 36px; không có bước 2 cột.
- Danh mục `/san-pham`: các hàng ảnh/nội dung 1:1, gap 64px (40px ở ≤1100px), chuyển 1 cột gap 24px ở ≤760px.
- Công trình trang chủ: 2 cột 1.2:1, gap 32px, cột thứ hai lệch xuống 60px. Gallery `/du-an`: 2 cột bằng nhau, gap 56px theo hàng và 32px theo cột. Cả hai chuyển 1 cột ở ≤760px; bỏ độ lệch.
- Header desktop cao 92px. Menu mobile xuất hiện ở ≤900px, header cao 76px; ≤760px còn 72px. Topbar cao 36px, mobile 32px.
- Hero cao tối thiểu 610px, 580px ở ≤1100px, 690px ở ≥1600px; mobile dùng chiều cao nội dung và 250px vùng ảnh dưới.
- Form 2 cột; ở ≤900px chuyển 1 cột trong panel cạnh copy; ≤760px panel nằm dưới copy, các field trở lại 2 cột; ≤380px còn 1 cột. Footer 4 → 2 cột ở ≤900px; ≤760px phần thương hiệu chiếm cả hàng; ≤380px còn 1 cột.

## Elevation & Depth
Các bề mặt không shadow. Phân vùng bằng nền trắng, surface, navy và đường viền; độ sâu đến từ ảnh lớn và plaque Na Uy phủ trên ảnh. Hero có lớp gradient sáng để giữ độ đọc.

## Shapes
Button, filter và field bo góc rất nhẹ bằng `--radius: 2px`. Ảnh và thẻ có cạnh vuông. Nút mũi tên phủ trên ảnh là hình vuông 46px dù class tên `round-arrow`. Ảnh nhóm sơn trang chủ có tỷ lệ 1.18, đổi thành 1.5 ở ≤760px; ảnh công trình tỷ lệ 1.5, riêng ảnh thứ hai trong preview là 1.4. Ảnh catalogue dùng min-height 420px, mobile 300px; không có tỷ lệ 4:3 bắt buộc.

## Components
- Header trắng: logo trái, 4 liên kết giữa, nút Hợp tác cùng ABOSSI bên phải; mobile menu có nhãn, đóng bằng Escape hoặc chọn link.
- Button primary đỏ, inverse trắng; padding 14px 24px, min-height 52px. CTA header min-height 46px. Secondary là text-link navy, min-height 44px; chưa có button viền navy. Mũi tên SVG 20px, stroke 1.7.
- Thẻ danh mục trang chủ liên kết tới nhóm sản phẩm. Catalogue dùng hàng ảnh/nội dung, disclosure native `details` và filter button có `aria-pressed`; filter chọn dùng nền navy/chữ trắng, không chọn nền trong suốt/viền line. Điều hướng hash cùng trang đặt lại filter để hiện mục đích.
- Thẻ dự án: ảnh kiến trúc, tên và hạng mục bên dưới; hình học theo Shapes. Chỉ ghi nhận là dự án thực tế khi có hồ sơ xác minh.
- Biểu mẫu: panel trắng trên navy, padding 36px → 26px ở ≤900px → 24px 20px ở ≤760px. Field nền trắng, viền line 1px, min-height 46px, padding 11px 12px; label luôn hiển thị. Required và phone pattern dùng validation native. Kết quả là textarea có label, chỉ đọc và nút sao chép, có thông báo trạng thái và hướng dẫn sao chép thủ công nếu clipboard lỗi; không gửi ra ngoài.
- Footer navy, liên kết nội bộ và logo trên nền trắng.

### Bốn trang đã triển khai
1. `/`: hero công trình + CTA hợp tác; nhóm sơn; câu chuyện nguồn gốc; dự án minh họa; khối hợp tác.
2. `/gioi-thieu`: thương hiệu, nguồn gốc công nghệ Na Uy theo logo, cách tiếp cận giải pháp cho đại lý/nhà thầu.
3. `/san-pham`: danh mục nội thất, ngoại thất, chống thấm; bộ lọc và thông tin ứng dụng; CTA tư vấn.
4. `/du-an`: các không gian minh họa, bộ lọc loại công trình, thông tin hạng mục; ghi rõ đang chờ hồ sơ dự án thực tế.

### Tương tác và accessibility
Button/link chuyển màu trong 180ms; mũi tên dịch phải 3px trong 180ms. Ảnh liên kết zoom 1.035 trong 350ms với `cubic-bezier(.16,1,.3,1)`. Tương tác đặc trưng là chọn nhóm sơn và xem thông tin ứng dụng trực tiếp. Nội dung không ẩn chờ animation. Tôn trọng `prefers-reduced-motion`. Focus đỏ 3px, offset 5px; skip link; aria-current trên navigation; aria-pressed trên filter. Button/menu/filter chính có mục bấm tối thiểu 44px. Trên mobile, line break ở section heading trở thành khoảng trắng để giữ từ tách biệt.

## Do's and Don'ts

- **Do** giữ logo gốc, palette Na Uy, nội dung tiếng Việt và ưu tiên đại lý/nhà thầu.
- **Do** giữ nhãn minh họa và mô tả đúng chức năng sao chép nội dung.
- **Don't** tự thêm shadow, pill hoặc bộ font thứ hai vào hệ thống cạnh vuông hiện tại.
- **Don't** biến hình stock thành hồ sơ dự án đã xác minh.

### Nội dung cần hoàn thiện
Chưa xác nhận thông số kỹ thuật, giá bán, chiết khấu đại lý, công trình thực tế và kênh tiếp nhận. Không tự tạo chứng chỉ, bảo hành, số liệu, đánh giá hoặc khách hàng. Hình stock là minh họa. Biểu mẫu hiện chuẩn bị nội dung hợp tác có thể sao chép, chưa gửi ra ngoài.

## Cập nhật danh mục từ ảnh bao bì
Trang sản phẩm dùng 13 ảnh thật do người dùng cung cấp, chia 4 nhóm nội thất, ngoại thất, sơn lót, chống thấm. Lưới 3 cột, 2 cột ở 1000px trở xuống, 1 cột ở 600px trở xuống. Ảnh vuông giữ toàn bộ bao bì bằng object-fit: contain, bề mặt trắng và viền 1px; tên 20px/1.5, tên dòng 11px, label nền surface. Nhấn ảnh mở nguyên bản ở tab mới. Số sản phẩm cập nhật theo bộ lọc. Giữ anchor nhóm cũ và thêm son-lot. Dữ liệu tại src/data/products.json.

## Bảng màu tham khảo
`ColorPicker.tsx` trên trang sản phẩm: 12 sắc độ biên tập, lọc ba họ màu, nút swatch có aria-pressed và focus; chọn màu cập nhật mảng tường CSS và tên/HEX, có sao chép kèm trạng thái lỗi. Hai cột chuyển thành một ở 900px, lưới swatch 4 → 3 cột ở 480px. Không coi HEX là mã pha ABOSSI; nguồn xu hướng và giới hạn khả năng pha hiển thị tại bảng.
