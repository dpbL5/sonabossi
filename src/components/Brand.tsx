import Image from "next/image";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{diagonal ? <path d="M5 19 19 5M5 5h14v14" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}</svg>;
}
export function Flag() {
  return <svg className="flag" width="26" height="19" viewBox="0 0 22 16" role="img" aria-label="Cờ Na Uy"><path fill="#BA0C2F" d="M0 0h22v16H0z"/><path fill="#fff" d="M6 0h4v16H6z"/><path fill="#fff" d="M0 6h22v4H0z"/><path fill="#00205B" d="M7 0h2v16H7z"/><path fill="#00205B" d="M0 7h22v2H0z"/></svg>;
}
export function Logo() {
  return <span className="logo-image"><Image src="/sonabossi.png" alt="Sơn ABOSSI — Technology of Norway" fill sizes="220px" /></span>;
}
