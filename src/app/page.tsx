import Link from "next/link";
import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import FaceIllustration from "@/components/FaceIllustration";
import { menuItems, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.areaName}の美容鍼灸・鍼灸院`,
  description:
    `${siteConfig.areaName}で美容鍼灸をお探しの方へ。ほうれい線・顔のたるみ・くすみ・小顔にアプローチする東洋医学ケア。` +
    `20年以上の実績を持つ施術者が、完全予約制の個室サロンで対応します。初回体験受付中。`,
};

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
          <div className="order-2 md:order-1">
            <p className="text-sm font-semibold tracking-widest text-rose-800">
              {siteConfig.subCopy}
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold leading-snug text-stone-900 sm:text-4xl">
              {siteConfig.catchCopy}
            </h1>
            <p className="mt-4 text-stone-600">
              たるみ・くすみ・小顔にアプローチする美容鍼灸で、鏡を見るのが楽しみになる肌へ。
              エイジングが気になり始めた方のための、完全予約制の個室サロンです。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton />
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-8 py-4 text-base font-semibold text-stone-700"
              >
                電話で相談する
              </a>
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-xs md:order-2 md:max-w-sm">
            <FaceIllustration className="w-full" />
          </div>
        </div>
      </section>

      {/* 実績バッジ */}
      <section className="border-y border-stone-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-stone-100 px-4 py-6 text-center sm:px-6">
          <div className="px-2">
            <p className="font-serif text-xl font-bold text-rose-800 sm:text-2xl">
              {siteConfig.yearsOfExperience}年+
            </p>
            <p className="mt-1 text-xs text-stone-500 sm:text-sm">施術実績</p>
          </div>
          <div className="px-2">
            <p className="font-serif text-xl font-bold text-rose-800 sm:text-2xl">
              ★{siteConfig.reviewScore}
            </p>
            <p className="mt-1 text-xs text-stone-500 sm:text-sm">口コミ評価</p>
          </div>
          <div className="px-2">
            <p className="font-serif text-xl font-bold text-rose-800 sm:text-2xl">個室</p>
            <p className="mt-1 text-xs text-stone-500 sm:text-sm">完全予約制</p>
          </div>
        </div>
      </section>

      {/* メニュー */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
          メニュー
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {menuItems.map((item) =>
            item.href ? (
              <Link
                key={item.slug}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border-2 border-rose-800 bg-rose-800 p-6 text-white shadow-lg shadow-rose-900/20 transition hover:bg-rose-900"
              >
                <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                  注力メニュー
                </span>
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-rose-50">{item.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold underline underline-offset-4">
                  詳しく見る →
                </span>
              </Link>
            ) : (
              <div
                key={item.slug}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{item.description}</p>
                <a
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-rose-800 underline underline-offset-4"
                >
                  詳しくはお問い合わせください →
                </a>
              </div>
            )
          )}
        </div>
      </section>

      {/* お客様の声 */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
            お客様の声
          </h2>
          <blockquote className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-stone-700">
              「鏡を見るたびに気になっていたほうれい線が、施術を重ねるうちに気にならなくなってきました。
              針は痛みもほとんどなく、むしろ終わったあとの肌の血色の良さに驚きます。」
            </p>
            <footer className="mt-4 text-sm text-stone-400">
              40代・{siteConfig.areaName}在住 A.Kさん(サンプル・掲載許可取得後に実際のお声へ差し替え予定)
            </footer>
          </blockquote>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
          アクセス
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50 text-center text-sm text-stone-400">
            Googleマップ
            <br />
            (住所確定後に埋め込み予定)
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p className="font-semibold text-stone-900">{siteConfig.businessName}</p>
            <p className="text-stone-600">{siteConfig.address}</p>
            <p className="text-stone-600">{siteConfig.nearestStation}</p>
            <p className="text-stone-600">{siteConfig.hours}</p>
            <p className="mt-2 text-sm text-stone-500">{siteConfig.entranceNote}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-800 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold">まずは初回体験から</h2>
          <p className="mt-3 text-rose-50">
            LINEなら24時間いつでも予約可能。ご不安な点も気軽にご相談ください。
          </p>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#06C755] px-10 py-4 text-base font-bold text-white shadow-lg transition hover:opacity-90"
          >
            LINEで予約する
          </a>
        </div>
      </section>
    </>
  );
}
