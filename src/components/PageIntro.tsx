import Link from "next/link";
export default function PageIntro({
  title,
  description,
  name,
}: {
  title: string;
  description: string;
  name: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <nav aria-label="Đường dẫn" className="breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{name}</span>
        </nav>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
