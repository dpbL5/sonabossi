import type { Metadata } from "next";
import { siteUrl, pageMetadata } from "@/lib/seo";
import StructuredData from "@/components/StructuredData";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
const beVietnam = localFont({src:[{path:"../../public/fonts/be-vietnam-400.ttf",weight:"400",style:"normal"},{path:"../../public/fonts/be-vietnam-500.ttf",weight:"500",style:"normal"},{path:"../../public/fonts/be-vietnam-600.ttf",weight:"600",style:"normal"},{path:"../../public/fonts/be-vietnam-700.ttf",weight:"700",style:"normal"}],variable:"--font-be-vietnam",display:"swap"});
export const metadata: Metadata = {
  ...pageMetadata('/'),
  metadataBase: siteUrl,
  applicationName: 'Sơn ABOSSI',
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="vi" data-scroll-behavior="smooth" className={beVietnam.variable}><body><StructuredData/><a className="skip-link" href="#main">Đến nội dung chính</a><Navbar/><main id="main">{children}</main><Footer/></body></html>;}
