import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コラム",
  description: "美容鍼灸・エイジングケアに関するコラムを準備中です。",
};

export default function ColumnPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-serif text-2xl font-bold text-stone-900">コラム</h1>
      <p className="mt-4 text-stone-600">
        美容鍼灸やエイジングケアに関するお役立ちコラムを準備中です。公開まで今しばらくお待ちください。
      </p>
      <Link
        href="/beauty-acupuncture"
        className="mt-8 inline-flex items-center text-sm font-semibold text-rose-800 underline underline-offset-4"
      >
        美容鍼灸ページを見る →
      </Link>
    </section>
  );
}
