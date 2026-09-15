# Sơn ABOSSI

Website tiếng Việt dành cho đại lý và nhà thầu, xây dựng bằng Next.js App Router, React và CSS dùng token chung.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở http://localhost:3000. Kiểm tra production: `npm run build`, sau đó `npm start`. Nếu môi trường chặn cổng nội bộ của Turbopack, dùng `npm run build -- --webpack` hoặc `npm run dev -- --webpack`.

## Thiết kế và nội dung

- `DESIGN.md`: hệ thống thiết kế được viết trước khi triển khai, đối chiếu lại với giao diện hoàn thiện.
- `PRODUCT.md`: đối tượng, nguồn nội dung và những thông tin cần bổ sung.
- `src/app/globals.css`: màu sắc, typography, layout, responsive và trạng thái tương tác.
- `src/data/products.json`: 13 sản phẩm, tên dòng, label trên bao bì và ánh xạ tên ảnh gốc.
- `src/components/ProductCatalog.tsx`: danh mục có bộ lọc 4 nhóm; ảnh bao bì mở được để đọc nhãn.
- `src/components/Services.tsx`: ba nhóm giải pháp và ảnh sản phẩm đại diện trên trang chủ.
- `src/components/Projects.tsx`: khối gallery 6 ảnh không gian và công trình trên trang chủ.
- `src/components/Gallery.tsx`: gallery masonry, mỗi ảnh chỉ có alt text.
- `src/data/gallery.ts`: 20 ảnh kèm kích thước thật và alt text mô tả nội dung.
- `src/components/Contact.tsx`: chuẩn bị và sao chép nội dung hợp tác trên trình duyệt. Chưa có backend, không gửi hay lưu dữ liệu ra ngoài.

| Route | Nội dung |
| --- | --- |
| `/` | Trang chủ |
| `/gioi-thieu` | Giới thiệu thương hiệu |
| `/san-pham` | Danh mục sơn, bộ lọc, thông tin ứng dụng |
| `/du-an` | Gallery không gian và công trình |

## Trước khi đưa vào sử dụng chính thức

Bổ sung catalogue kỹ thuật (quy cách và thông số), hồ sơ công trình thực tế, thông tin liên hệ và kênh nhận yêu cầu hợp tác. Thay dữ liệu minh họa bằng nội dung đã xác minh. Hiện không tự tạo chứng chỉ, chính sách giá hoặc dự án đã thi công.

Logo và banner giữ nguyên từ tài nguyên người dùng. Font Be Vietnam Pro lưu local. Ảnh không gian và công trình do người dùng cung cấp, chuyển từ `public/temp/willBeUsed` vào `public/images/du-an`; nguồn ở `public/images/SOURCES.md`. Tham chiếu thiết kế: https://weblium.com/templates/demo/flooring-solutions-website-design-310.

## SEO

Tên miền chuẩn: `https://sonabossi.com` (chủ website xác nhận). `src/lib/seo.ts` quản lý title, description, canonical và metadata chia sẻ riêng cho 4 trang. `robots.txt` tham chiếu `sitemap.xml`; sitemap chỉ liệt kê URL trang, không liệt kê anchor/bộ lọc. Dữ liệu JSON-LD WebSite khai báo tên và ngôn ngữ website, không tự tạo thông tin doanh nghiệp hoặc đánh giá.

Nếu đổi tên miền, đặt `SITE_URL` thành origin HTTP(S) mới và build lại. Khi triển khai, cấu hình HTTPS và chuyển hướng các biến thể tên miền về tên miền chuẩn ở hosting, rồi gửi sitemap vào Google Search Console. Thay đổi metadata không bảo đảm điểm số cụ thể hoặc thứ hạng tìm kiếm.

Kiểm tra HTML SEO của bản build: `node scripts/check-seo.mjs`.
