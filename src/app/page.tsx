import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import HeroSlideshow from "@/components/HeroSlideshow";
import StaffIntro from "@/components/StaffIntro";
import TestimonialGrid from "@/components/TestimonialGrid";
import { menuItems, siteConfig } from "@/lib/site-config";
import { placeholderImages } from "@/lib/placeholder-images";

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
        <div className="h-[240px] w-full sm:h-[340px] md:h-[420px] lg:h-[480px]">
          <HeroSlideshow />
        </div>
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <h1 className="font-serif text-2xl font-bold leading-snug text-stone-900 sm:text-3xl">
            {siteConfig.catchCopyLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-stone-600">
            たるみ・くすみ・小顔にアプローチする美容鍼灸で、鏡を見るのが楽しみになる肌へ。
            エイジングが気になり始めた方のための、完全予約制の個室サロンです。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton />
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-8 py-4 text-base font-semibold text-stone-700"
            >
              電話で相談する
            </a>
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
          {menuItems.map((item) => {
            const image = item.imageKey
              ? placeholderImages[item.imageKey as keyof typeof placeholderImages]
              : null;

            return item.href ? (
              <Link
                key={item.slug}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border-2 border-rose-800 bg-rose-800 text-white shadow-lg shadow-rose-900/20 transition hover:bg-rose-900"
              >
                {image && (
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    注力メニュー
                  </span>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-rose-50">{item.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold underline underline-offset-4">
                    詳しく見る →
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={item.slug}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
              >
                {image && (
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                )}
                <div className="p-6">
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
              </div>
            );
          })}
        </div>
      </section>

      {/* スタッフ紹介 */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
            施術者紹介
          </h2>
          <div className="mt-8">
            <StaffIntro />
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
            お客様の声
          </h2>
          <div className="mt-8">
            <TestimonialGrid />
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" className="bg-stone-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
            アクセス
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src={placeholderImages.salonInterior.src}
                alt={placeholderImages.salonInterior.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                内観イメージ(ダミー写真)
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p className="font-semibold text-stone-900">{siteConfig.businessName}</p>
              <p className="text-stone-600">{siteConfig.address}</p>
              <p className="text-stone-600">{siteConfig.nearestStation}</p>
              <p className="text-stone-600">{siteConfig.hours}</p>
              <p className="mt-2 text-sm text-stone-500">{siteConfig.entranceNote}</p>
              <div className="mt-4 flex aspect-[4/2] items-center justify-center rounded-xl border border-dashed border-stone-300 bg-white text-center text-xs text-stone-400">
                Googleマップ(住所確定後に埋め込み予定)
              </div>
            </div>
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
