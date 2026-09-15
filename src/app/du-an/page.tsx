import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Gallery from "@/components/Gallery";
import { Arrow } from "@/components/Brand";
export const metadata = pageMetadata("/du-an");
export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        name="Dự án"
        title="Từ sắc màu đến không gian."
        description="Khám phá không gian nhà ở, công trình đang hoàn thiện và hoạt động giao sơn tại công trường."
      />
      <section className="section">
        <div className="container">
          <Gallery />
          <p className="gallery-note">
            Hình ảnh công trình và hoạt động do chủ website cung cấp.
          </p>
        </div>
      </section>
      <section className="simple-cta">
        <div className="container">
          <h2>
            Công trình của bạn,
            <br />
            giải pháp cùng ABOSSI.
          </h2>
          <Link className="button button-white" href="/#hop-tac">
            Trao đổi nhu cầu công trình <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
