import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Brand";
import ProductCard from "@/components/ProductCard";
import ProductStructuredData from "@/components/ProductStructuredData";
import {
  getProduct,
  groupName,
  packagingNote,
  products,
} from "@/lib/products";
import { productMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? productMetadata(product) : {};
}

const safety = [
  "Đậy kín nắp sau khi dùng, bảo quản nơi khô ráo, thoáng mát và cách xa nguồn nhiệt, thiết bị phát lửa.",
  "Đeo găng tay và khẩu trang khi thi công, tránh để sơn dính vào mắt và da.",
  "Không đổ sơn ra môi trường; thu gom và xử lý bao bì đúng nơi quy định.",
  "Để xa tầm tay trẻ em.",
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 3);

  return (
    <>
      <ProductStructuredData product={product} />
      <section className="page-intro product-intro">
        <div className="container">
          <nav aria-label="Đường dẫn" className="breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            <Link href="/san-pham">Sản phẩm</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/san-pham#${product.category}`}>
              {groupName(product.category)}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className="product-intro-grid">
            <div className="product-media">
              <Image
                src={product.image}
                alt={`${product.name} — ${product.code} — Sơn ABOSSI`}
                width={1280}
                height={1280}
                sizes="(max-width: 900px) 100vw, 38vw"
                priority
              />
            </div>
            <div className="product-info">
              <div className="product-flags">
                <span className="product-flag">{product.tagline}</span>
                {product.note && (
                  <span className="product-flag-note">{product.note}</span>
                )}
              </div>
              <h1>{product.name}</h1>
              <p className="product-code">{product.code}</p>
              <p className="product-summary">{product.summary}</p>
              <ul
                className="product-labels"
                aria-label="Đặc tính ghi trên bao bì"
              >
                {product.labels.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
              <Link className="button button-red" href="/#hop-tac">
                Trao đổi về sản phẩm <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-body">
          <div className="product-block">
            <h2>Đặc tính nổi bật</h2>
            <ul className="product-list product-list-red">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-block">
            <h2>Ứng dụng</h2>
            <ul className="product-list">
              {product.usage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {product.composition && (
            <div className="product-block">
              <h2>Thành phần cấu tạo</h2>
              <ul className="product-list">
                {product.composition.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="product-block">
            <h2>Điều kiện thi công</h2>
            <dl className="product-specs">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {product.criteria && (
            <div className="product-block product-block-wide">
              <h2>Chỉ tiêu kỹ thuật</h2>
              <table className="product-criteria">
                <thead>
                  <tr>
                    <th scope="col">Chỉ tiêu</th>
                    <th scope="col">Đơn vị</th>
                    <th scope="col">Kết quả</th>
                  </tr>
                </thead>
                <tbody>
                  {product.criteria.map((criterion) => (
                    <tr key={`${criterion.name}-${criterion.result}`}>
                      <th scope="row">{criterion.name}</th>
                      <td>{criterion.unit || "—"}</td>
                      <td>{criterion.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="product-block product-block-wide">
            <h2>Thông tin an toàn – bảo quản</h2>
            <ul className="product-list">
              {safety.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="product-note">{packagingNote}</p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section product-related">
          <div className="container">
            <div className="section-heading">
              <h2>Cùng nhóm {groupName(product.category).toLowerCase()}</h2>
              <div>
                <Link className="text-link" href="/san-pham">
                  Xem tất cả sản phẩm <Arrow />
                </Link>
              </div>
            </div>
            <div className="paint-grid">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="simple-cta">
        <div className="container">
          <h2>
            Cần tư vấn hệ sơn
            <br />
            cho hạng mục này?
          </h2>
          <Link className="button button-white" href="/#hop-tac">
            Trao đổi nhu cầu công trình <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
