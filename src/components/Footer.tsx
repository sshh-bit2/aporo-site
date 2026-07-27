import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-serif text-lg font-semibold text-stone-900">
              {siteConfig.businessName}
            </p>
            <p className="mt-2 text-sm text-stone-600">{siteConfig.address}</p>
            <p className="mt-1 text-sm text-stone-600">{siteConfig.nearestStation}</p>
            <p className="mt-1 text-sm text-stone-600">{siteConfig.hours}</p>
            <a
              href={siteConfig.phoneHref}
              className="mt-2 inline-block text-sm text-stone-700 underline decoration-stone-300 underline-offset-4"
            >
              {siteConfig.phone}
            </a>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-stone-600 sm:items-end">
            <Link href="/" className="hover:text-rose-800">
              トップページ
            </Link>
            <Link href="/beauty-acupuncture" className="hover:text-rose-800">
              美容鍼灸
            </Link>
            <Link href="/#access" className="hover:text-rose-800">
              院紹介・アクセス
            </Link>
            <Link href="/column" className="hover:text-rose-800">
              コラム
            </Link>
            <Link href="/privacy" className="hover:text-rose-800">
              プライバシーポリシー
            </Link>
          </nav>
        </div>

        <p className="mt-10 text-xs text-stone-400">
          &copy; {year} {siteConfig.businessName}
        </p>
      </div>
    </footer>
  );
}
