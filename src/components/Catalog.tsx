"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCatalog from "./ProductCatalog";
import { projects } from "./Projects";
import { Arrow } from "./Brand";
export default function Catalog({ kind }: { kind: "products" | "projects" }) {
  const [filter, setFilter] = useState("Tất cả");

  useEffect(() => {
    let frame = 0;
    const revealHash = (hash: string) => {
      if (!hash) return;
      setFilter("Tất cả");
      frame = requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    };
    const onHash = () => revealHash(window.location.hash);
    const onLink = (event: MouseEvent) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      const anchor =
        event.target instanceof Element ? event.target.closest("a") : null;
      if (anchor && anchor.pathname === window.location.pathname)
        revealHash(anchor.hash);
    };
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onLink);
    return () => {
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onLink);
      cancelAnimationFrame(frame);
    };
  }, []);
  const options = ["Tất cả", "Biệt thự", "Căn hộ", "Nhà phố"];
  const items = projects.filter(
    (p) => filter === "Tất cả" || p.category === filter,
  );
  if (kind === "products") return <ProductCatalog />;
  return (
    <section className="section catalog-section">
      <div className="container">
        <div className="filter-row">
          <div
            className="filters"
            role="group"
            aria-label="Lọc loại công trình"
          >
            {options.map((option) => (
              <button
                key={option}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <span role="status">{items.length} không gian</span>
        </div>
        {
          <>
            <div className="project-gallery">
              {projects
                .filter((p) => filter === "Tất cả" || p.category === filter)
                .map((project) => (
                  <article
                    className="project-card"
                    id={project.id}
                    key={project.id}
                  >
                    <div className="project-image">
                      <Image
                        src={project.image}
                        alt={`${project.name} — không gian tham khảo`}
                        fill
                        sizes="(max-width: 760px) 100vw, 50vw"
                      />
                      <span className="photo-label">{project.category}</span>
                    </div>
                    <div className="project-info">
                      <div>
                        <span>{project.surface}</span>
                        <h2>{project.name}</h2>
                      </div>
                    </div>
                    <p>{project.description}</p>
                    <Link href="/san-pham" className="text-link">
                      Khám phá giải pháp sơn <Arrow />
                    </Link>
                  </article>
                ))}
            </div>
          </>
        }
      </div>
    </section>
  );
}
