"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { productGroups as groups, products } from "@/lib/products";

export default function ProductCatalog() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let frame = 0;
    const reveal = (hash: string) => {
      if (!hash) return;
      setFilter("all");
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    };
    const onHash = () => reveal(window.location.hash);
    const onClick = (event: MouseEvent) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      const anchor =
        event.target instanceof Element ? event.target.closest("a") : null;
      if (
        anchor?.origin === window.location.origin &&
        anchor.pathname === window.location.pathname
      )
        reveal(anchor.hash);
    };
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const visible = products.filter(
    (product) => filter === "all" || product.category === filter,
  );

  return (
    <section className="section catalog-section">
      <div className="container">
        <div className="filter-row">
          <div className="filters" role="group" aria-label="Lọc nhóm sơn">
            {[{ id: "all", name: "Tất cả" }, ...groups].map((group) => (
              <button
                key={group.id}
                aria-pressed={filter === group.id}
                onClick={() => setFilter(group.id)}
              >
                {group.name}
              </button>
            ))}
          </div>
          <span role="status">{visible.length} sản phẩm</span>
        </div>

        {groups
          .filter((group) => filter === "all" || group.id === filter)
          .map((group) => (
            <section
              id={group.id}
              className="paint-group"
              key={group.id}
              aria-labelledby={`heading-${group.id}`}
            >
              <div className="paint-group-heading">
                <h2 id={`heading-${group.id}`}>{group.name}</h2>
                <span>
                  {
                    visible.filter((product) => product.category === group.id)
                      .length
                  }{" "}
                  sản phẩm
                </span>
              </div>
              <div className="paint-grid">
                {visible
                  .filter((product) => product.category === group.id)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </section>
          ))}
      </div>
    </section>
  );
}
