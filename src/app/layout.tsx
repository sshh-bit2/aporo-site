import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site-config";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.areaName}の美容鍼灸・鍼灸院`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description:
    `${siteConfig.areaName}の美容鍼灸専門院。たるみ・くすみ・小顔にアプローチする東洋医学ケアで、` +
    `エイジングが気になり始めた30代後半〜50代女性を中心にサポート。肩こり・腰痛の整体、足つぼ整体、交通事故の保険施術にも対応。`,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.businessName,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.businessName,
  telephone: siteConfig.phone,
  priceRange: "¥¥",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    postalCode: siteConfig.postalCode,
    addressRegion: siteConfig.areaName,
    streetAddress: siteConfig.address,
  },
  url: siteConfig.siteUrl,
  areaServed: siteConfig.areaName,
  medicalSpecialty: "美容鍼灸(はり・きゅう)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${notoSerifJp.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-stone-900">
        <StructuredData data={localBusinessJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
