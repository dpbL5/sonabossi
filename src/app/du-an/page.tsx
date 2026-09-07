import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Catalog from "@/components/Catalog";
import { Arrow } from "@/components/Brand";
export const metadata = pageMetadata("/du-an");
export default function ProjectsPage(){return <><PageIntro name="Dự án" title="Từ sắc màu đến không gian." description="Khám phá những không gian truyền cảm hứng và ý tưởng phối màu cho biệt thự, căn hộ và nhà phố."/><Catalog kind="projects"/><section className="simple-cta"><div className="container"><h2>Công trình của bạn,<br />giải pháp cùng ABOSSI.</h2><Link className="button button-white" href="/#hop-tac">Trao đổi nhu cầu công trình <Arrow/></Link></div></section></>;}
