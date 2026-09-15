import Link from "next/link";
import { Arrow } from "./Brand";
import Gallery from "./Gallery";

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
        <Gallery limit={6} />
        <p className="gallery-note">
          Hình ảnh công trình và hoạt động do chủ website cung cấp.
        </p>
      </div>
    </section>
  );
}
