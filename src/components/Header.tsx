import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-semibold tracking-wide text-stone-900">
            {siteConfig.businessName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/beauty-acupuncture" className="text-sm text-stone-700 hover:text-rose-800">
            美容鍼灸
          </Link>
          <Link href="/#menu" className="text-sm text-stone-700 hover:text-rose-800">
            メニュー
          </Link>
          <Link href="/#access" className="text-sm text-stone-700 hover:text-rose-800">
            アクセス
          </Link>
          <Link href="/column" className="text-sm text-stone-700 hover:text-rose-800">
            コラム
          </Link>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#06C755] px-5 py-2 text-sm font-bold text-white transition hover:opacity-90"
          >
            LINEで予約する
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
