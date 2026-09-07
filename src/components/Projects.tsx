import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Brand";
export const projects = [
  {
    id: "biet-thu",
    name: "Biệt thự giữa khoảng xanh",
    category: "Biệt thự",
    image: "/images/villa.jpg",
    surface: "Mặt tiền · Sơn ngoại thất",
    description:
      "Bề mặt sáng kết hợp cùng mảng xanh, làm nổi bật đường nét kiến trúc hiện đại.",
  },
  {
    id: "can-ho",
    name: "Một khoảng lặng giữa phố",
    category: "Căn hộ",
    image: "/images/interior.jpg",
    surface: "Phòng khách · Sơn nội thất",
    description:
      "Sắc trung tính, ánh sáng tự nhiên và vật liệu gỗ tạo nên một không gian liền mạch.",
  },
  {
    id: "nha-pho",
    name: "Đón sáng vào từng góc nhỏ",
    category: "Nhà phố",
    image: "/images/architecture.jpg",
    surface: "Không gian sống · Sơn nội thất",
    description:
      "Kết hợp những bề mặt sáng với điểm nhấn vật liệu để không gian có chiều sâu.",
  },
  {
    id: "sinh-hoat",
    name: "Nhẹ nhàng trong từng đường nét",
    category: "Căn hộ",
    image: "/images/apartment.jpg",
    surface: "Không gian sinh hoạt · Hoàn thiện bề mặt",
    description:
      "Gợi ý cách phối hợp màu sắc và bề mặt cho các khu vực sinh hoạt trong nhà.",
  },
];
export default function Projects() {
  return (
    <section className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <h2>
            Sắc màu hiện diện. <br />
            Không gian thành hình.
          </h2>
          <Link className="text-link" href="/du-an">
            Khám phá không gian & dự án <Arrow />
          </Link>
        </div>
        <div className="project-preview">
          {projects.slice(0, 2).map((project) => (
            <Link
              href={`/du-an#${project.id}`}
              className="project-card"
              key={project.id}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={`${project.name} — hình minh họa`}
                  fill
                  sizes="(max-width: 760px) 100vw, 60vw"
                />
              </div>
              <div className="project-info">
                <div>
                  <span>{project.surface}</span>
                  <h3>{project.name}</h3>
                </div>
                <Arrow diagonal />
              </div>
            </Link>
          ))}
        </div>
        <p className="image-note">Bộ sưu tập không gian truyền cảm hứng.</p>
      </div>
    </section>
  );
}
