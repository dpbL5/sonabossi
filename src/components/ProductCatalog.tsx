"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import products from "@/data/products.json";
import { Arrow } from "./Brand";

const groups = [
  { id: "noi-that", name: "Sơn nội thất" },
  { id: "ngoai-that", name: "Sơn ngoại thất" },
  { id: "son-lot", name: "Sơn lót" },
  { id: "chong-tham", name: "Sơn chống thấm" },
];

export default function ProductCatalog() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let frame = 0;
    const reveal = (hash: string) => {
      if (!hash) return;
      setFilter("all");
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    };
    const onHash = () => reveal(window.location.hash);
    const onClick = (event: MouseEvent) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (anchor?.origin === window.location.origin && anchor.pathname === window.location.pathname) reveal(anchor.hash);
    };
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const visible = products.filter(product => filter === "all" || product.category === filter);

  return (
    <section className="section catalog-section">
      <div className="container">
        <div className="filter-row">
          <div className="filters" role="group" aria-label="Lọc nhóm sơn">
            {[{ id: "all", name: "Tất cả" }, ...groups].map(group => (
              <button key={group.id} aria-pressed={filter === group.id} onClick={() => setFilter(group.id)}>
                {group.name}
              </button>
            ))}
          </div>
          <span role="status">{visible.length} sản phẩm</span>
        </div>
        
        {groups.filter(group => filter === "all" || group.id === filter).map(group => (
          <section id={group.id} className="paint-group" key={group.id} aria-labelledby={`heading-${group.id}`}>
            <div className="paint-group-heading">
              <h2 id={`heading-${group.id}`}>{group.name}</h2>
              <span>{visible.filter(product => product.category === group.id).length} sản phẩm</span>
            </div>
            <div className="paint-grid">
              {visible.filter(product => product.category === group.id).map(product => (
                <article className="paint-card" id={product.id} key={product.id}>
                  <a className="paint-image" href={product.image} target="_blank" rel="noopener noreferrer" aria-label={`Xem ảnh bao bì ${product.name} (mở tab mới)`}>
                    <Image src={product.image} alt={`${product.name} — ${product.code} — Sơn ABOSSI`} width={1280} height={1280} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                    <span className="paint-image-link">Xem bao bì <Arrow diagonal /></span>
                  </a>
                  <div className="paint-card-copy">
                    <h3>{product.name}</h3>
                    <p className="paint-code">{product.code}</p>
                    <ul className="paint-labels" aria-label="Đặc tính ghi trên bao bì">
                      {product.labels.map(label => <li key={label}>{label}</li>)}
                    </ul>
                    <Link className="text-link" href="/#hop-tac">Trao đổi về sản phẩm <Arrow /></Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
