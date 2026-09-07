"use client";

import { useState } from "react";

// Digital suggestions inspired by the sources below, not manufacturer tint codes.
const colors = [
  { name: "Trắng kem", hex: "#F2EFE6", family: "Trung tính" },
  { name: "Trắng ngà", hex: "#E9E3D5", family: "Trung tính" },
  { name: "Be cát", hex: "#D3C4AC", family: "Trung tính" },
  { name: "Xám be", hex: "#BCB5AA", family: "Trung tính" },
  { name: "Khaki ấm", hex: "#B6A58A", family: "Tông đất" },
  { name: "Nâu taupe", hex: "#958579", family: "Tông đất" },
  { name: "Nâu cacao", hex: "#65564D", family: "Tông đất" },
  { name: "Đất nung", hex: "#B77E67", family: "Tông đất" },
  { name: "Xanh sage", hex: "#A5AE9A", family: "Xanh thiên nhiên" },
  { name: "Xanh olive", hex: "#7D8267", family: "Xanh thiên nhiên" },
  { name: "Xanh xám", hex: "#9DADB2", family: "Xanh thiên nhiên" },
  { name: "Xanh navy", hex: "#34465B", family: "Xanh thiên nhiên" },
];

export default function ColorPicker() {
  const [selected, setSelected] = useState(colors[0]);
  const [family, setFamily] = useState("Tất cả");
  const [status, setStatus] = useState("");
  const visible = colors.filter(color => family === "Tất cả" || color.family === family);
  return (
    <section id="bang-mau" className="section color-section" aria-labelledby="color-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="color-title">Chọn sắc màu. <br />Gợi mở không gian.</h2>
          <p>12 sắc độ gợi ý từ các nhóm màu được ưa chuộng và xu hướng 2026. <br />Chọn một ô màu để xem trên mảng tường mẫu.</p>
        </div>
        <div className="color-layout">
          <div>
            <div className="filters color-filters" role="group" aria-label="Lọc họ màu">
              {["Tất cả", "Trung tính", "Tông đất", "Xanh thiên nhiên"].map(item => <button key={item} aria-pressed={family === item} onClick={() => setFamily(item)}>{item}</button>)}
            </div>
            <div className="swatch-grid" role="group" aria-label="Chọn màu sơn tham khảo">
              {visible.map(color => <button className="swatch" key={color.hex} aria-pressed={selected.hex === color.hex} aria-label={`${color.name}, ${color.hex}`} onClick={() => { setSelected(color); setStatus(""); }}>
                <span className="swatch-fill" style={{ backgroundColor: color.hex }} />
                <span className="swatch-name">{color.name}</span>
              </button>)}
            </div>
          </div>
          <div className="color-preview">
            <div className="wall-preview" style={{ backgroundColor: selected.hex }} role="img" aria-label={`Mảng tường mẫu màu ${selected.name}`}>
              <span className="wall-caption">Mảng tường mẫu</span>
              <div className="wall-trim" /><div className="wall-floor" />
            </div>
            <div className="color-selection" aria-live="polite"><h3>{selected.name}</h3><p>Màu hiển thị: <strong>{selected.hex}</strong></p></div>
            <button className="text-link" onClick={async () => {
              try { await navigator.clipboard.writeText(`${selected.name} — ${selected.hex} (màu tham khảo, không phải mã pha ABOSSI)`); setStatus("Đã sao chép tên và màu hiển thị."); }
              catch { setStatus(`Không thể sao chép tự động. Bạn có thể ghi lại: ${selected.name} — ${selected.hex}.`); }
            }}>Sao chép màu để trao đổi</button>
            <p className="color-status" role="status">{status}</p>
          </div>
        </div>
        <p className="color-disclaimer">Màu gợi ý trên màn hình có thể khác màu sơn thực tế. Vui lòng đối chiếu mẫu màu ABOSSI và xác nhận khả năng pha cho dòng sơn bạn chọn.</p>
        <details className="color-sources"><summary>Nguồn tham khảo xu hướng màu</summary><p>Tuyển chọn theo các nhóm màu phổ biến của <a href="https://www.benjaminmoore.com/en-us/paint-colors/most-popular" target="_blank" rel="noopener noreferrer">Benjamin Moore</a> và xu hướng trung tính ấm 2026 của <a href="https://blog.sherwin-williams.com/color/a-year-in-color/color-of-the-year-2026/" target="_blank" rel="noopener noreferrer">Sherwin-Williams</a>. </p></details>
      </div>
    </section>
  );
}
