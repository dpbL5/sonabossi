"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow, Flag, Logo } from "./Brand";
const links = [
  ["/", "Trang chủ"],
  ["/gioi-thieu", "Giới thiệu"],
  ["/san-pham", "Sản phẩm"],
  ["/du-an", "Dự án"],
];
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <Flag /> Công nghệ Na Uy. Sắc màu cho công trình Việt.
          </span>
          <span>Đồng hành cùng đại lý & nhà thầu</span>
        </div>
      </div>
      <header className="header">
        <div className="container nav-inner">
          <Link
            href="/"
            aria-label="ABOSSI — Trang chủ"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link className="button button-red header-cta" href="/#hop-tac">
            Hợp tác cùng ABOSSI <Arrow />
          </Link>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path
                d={open ? "M6 6l12 12M6 18 18 6" : "M3 6h18M3 12h18M3 18h18"}
              />
            </svg>
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Điều hướng di động"
          >
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
                <Arrow />
              </Link>
            ))}
            <Link href="/#hop-tac" onClick={() => setOpen(false)}>
              Hợp tác cùng ABOSSI <Arrow />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
