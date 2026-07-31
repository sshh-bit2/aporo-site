import type { Metadata } from "next";
import TrialBookingForm from "@/components/TrialBookingForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "初回体験予約",
  description:
    `${siteConfig.businessName}の美容鍼灸、初回体験のご予約ページです。施術の流れや内容をご確認のうえ、` +
    "お名前とメールアドレスだけで簡単にご予約いただけます。",
};

const steps = [
  {
    title: "カウンセリング(約10〜15分)",
    desc: "お肌の状態や体調、気になっているお悩みについて詳しくお伺いします。鍼が初めての方にもわかりやすくご説明します。",
  },
  {
    title: "顔の鍼施術(約60分)",
    desc: "顔への美容鍼施術で、髪の毛程の細さの鍼を使用し、刺激は最小限に抑えています。",
  },
  {
    title: "アフターケア・次回のご案内(約5分)",
    desc: "施術後の過ごし方や、変化を感じやすい次回来院の目安についてご案内します。",
  },
];

const details = [
  { label: "対応メニュー", value: "美容鍼灸(顔)" },
  { label: "所要時間", value: "約75〜90分(カウンセリング含む)" },
  {
    label: "料金",
    value: `${siteConfig.prices.trialLabel} ¥${siteConfig.prices.trialPrice.toLocaleString()}(税込)`,
  },
  { label: "服装", value: "楽な服装でお越しください" },
  {
    label: "持ち物",
    value: "特にございません。顔への施術があるため、気になる方はメイク落としをお持ちいただくと安心です。",
  },
];

export default function TrialBookingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-rose-50 to-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-rose-800">
            まずは、初めての方限定の特別価格で
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
            初回体験のご予約
          </h1>
          <p className="mt-4 text-stone-600">
            {siteConfig.businessName}の美容鍼灸を、まずは初回体験でお試しください。
            施術の流れ・内容をご確認のうえ、下記フォームよりお気軽にご予約ください。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
          施術の流れ
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-stone-200 bg-white p-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-800 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-serif text-base font-bold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
            初回体験の内容
          </h2>
          <dl className="mt-8 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
            {details.map((d) => (
              <div key={d.label} className="grid gap-1 p-5 sm:grid-cols-[140px_1fr] sm:gap-4">
                <dt className="text-sm font-semibold text-stone-500">{d.label}</dt>
                <dd className="text-stone-800">{d.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-stone-500">
            ※初回限定の特別価格です。もちろん初回のみのご利用でも大丈夫です。
          </p>
        </div>
      </section>

      <section id="form" className="mx-auto max-w-xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
          予約フォーム
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-stone-500">
          お名前とメールアドレスをご入力のうえ送信してください。折り返しご連絡いたします。
        </p>
        <div className="mt-8">
          <TrialBookingForm />
        </div>
        <p className="mt-6 text-center text-sm text-stone-500">
          お電話・LINEでのご予約は
          <a href={siteConfig.phoneHref} className="mx-1 text-rose-800 underline underline-offset-4">
            {siteConfig.phone}
          </a>
          または
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-rose-800 underline underline-offset-4"
          >
            LINE公式アカウント
          </a>
          からも承っております。
        </p>
      </section>
    </>
  );
}
