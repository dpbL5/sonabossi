import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Brand";
import { productPath, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const href = productPath(product.id);
  return (
    <article className="paint-card" id={product.id}>
      <Link
        className="paint-image"
        href={href}
        aria-label={`Xem chi tiết ${product.name}`}
      >
        <Image
          src={product.image}
          alt={`${product.name} — ${product.code} — Sơn ABOSSI`}
          width={1280}
          height={1280}
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
        />
        <span className="paint-image-link">
          Xem chi tiết <Arrow diagonal />
        </span>
      </Link>
      <div className="paint-card-copy">
        <h3>
          <Link href={href}>{product.name}</Link>
        </h3>
        <p className="paint-code">{product.code}</p>
        <ul className="paint-labels" aria-label="Đặc tính ghi trên bao bì">
          {product.labels.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
        <Link className="text-link" href={href}>
          Xem chi tiết sản phẩm <Arrow />
        </Link>
      </div>
    </article>
  );
}
