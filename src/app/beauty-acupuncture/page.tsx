import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import FaceIllustration from "@/components/FaceIllustration";
import BeforeAfterStat from "@/components/BeforeAfterStat";
import TestimonialGrid from "@/components/TestimonialGrid";
import { siteConfig, testimonials } from "@/lib/site-config";
import { placeholderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "美容鍼灸",
  description:
    "ほうれい線・顔のたるみ・くすみ・小顔にアプローチする美容鍼灸。髪の毛程の細さの鍼で刺激は最小限、" +
    "痛みが心配な方も安心。更年期のエイジングケアにも。初回体験受付中、20年以上の実績を持つ施術者が担当します。",
};

const concerns = [
  { title: "ほうれい線が気になる", desc: "年齢とともに深くなる線に、鏡を見るたびため息が出る" },
  { title: "顔のたるみ・むくみ", desc: "夕方になると顔が重だるく、輪郭がぼやけて見える" },
  { title: "更年期で肌が不安定", desc: "ホルモンバランスの変化で、肌の調子が読めない" },
  { title: "メイクで隠しきれない疲れ顔", desc: "しっかりメイクしても、疲れて見られてしまう" },
];

const steps = [
  {
    title: "カウンセリング",
    desc: "お肌の状態やお悩み、体調について丁寧にお伺いします。鍼が初めての方にもわかりやすくご説明します。",
  },
  {
    title: "顔の鍼施術(約60分)",
    desc: "顔への鍼施術で、髪の毛程の細さの鍼を使用し、刺激は最小限に抑えています。",
  },
  {
    title: "アフターケアのご案内",
    desc: "施術後の過ごし方や、次回来院の目安についてご案内します。",
  },
];

const skinEffects = [
  {
    title: "リフトアップ・小顔",
    desc: "血行が促されむくみが取れることで、施術直後からキュッと引き締まった印象を感じやすくなります。",
  },
  {
    title: "血色・くすみケア",
    desc: "巡りを促すことで、クマやくすみが気になる肌に内側からアプローチします。",
  },
  {
    title: "ハリ・エイジングケア",
    desc: "お顔への鍼刺激により、肌のハリに関わる真皮層への働きかけが期待できます。",
  },
];

const bodyEffects = [
  {
    title: "自律神経を整える",
    desc: "全身のツボへの施術で自律神経のバランスを整え、心身のリラックスをサポートします。",
  },
  {
    title: "巡り・むくみのケア",
    desc: "血流やリンパの巡りを促し、むくみや冷えが気になる方にもおすすめです。",
  },
  {
    title: "肩こり・眠りの質",
    desc: "筋肉のこわばりをやわらげ、質の良い睡眠をサポートします。",
  },
];

const faqs = [
  {
    q: "何回くらいで変化を感じますか?",
    a: "個人差はありますが、多くの方が3〜5回程度の施術で肌のハリや血色の変化を感じ始めます。継続いただくことで変化を実感しやすくなります。",
  },
  {
    q: "跡やダウンタイムはありますか?",
    a: "髪の毛程の細さの鍼を使用しているため、内出血や跡が残ることは稀です。まれに鍼あとが赤くなることがありますが、通常数十分〜数時間程度で落ち着きます。",
  },
  {
    q: "痛みはどれくらいありますか?",
    a: "「チクッ」とした感覚がある程度で、痛みが心配な方でも多くは問題なく受けられています。刺激の強さは体調やお顔の部位に合わせて調整します。",
  },
  {
    q: "妊娠中でも受けられますか?",
    a: "体調やお身体の状態によって対応可否が異なりますので、ご予約前に必ずお申し出のうえご相談ください。",
  },
];

export default function BeautyAcupuncturePage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-gradient-to-b from-rose-50 to-white">
        <div className="h-[220px] w-full sm:h-[300px] md:h-[380px] lg:h-[440px]">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={placeholderImages.beautyHero.src}
              alt={placeholderImages.beautyHero.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <p className="text-sm font-semibold tracking-widest text-rose-800">
            {siteConfig.areaName}の美容鍼灸専門ケア
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
            美容鍼灸
          </h1>
          <p className="mt-4 text-stone-600">
            たるみ・くすみ・小顔にアプローチする東洋医学ケア。
            20年以上の実績を持つ施術者が、お一人おひとりの肌と体調に合わせて施術します。
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* 悩み共感 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
          こんなお悩みはありませんか?
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {concerns.map((c) => (
            <div key={c.title} className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="font-serif text-lg font-bold text-stone-900">{c.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 安心材料 */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto grid max-w-4xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[160px_1fr]">
          <FaceIllustration className="mx-auto w-32 md:w-full" />
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              痛みが心配な方へ
            </h2>
            <p className="mt-4 text-stone-600">
              使用する鍼は髪の毛程の細さ。刺激は最小限に抑えていますので、
              鍼施術が初めての方やお痛みが心配な方も安心して受けていただけます。
            </p>
          </div>
        </div>
      </section>

      {/* 施術風景バナー */}
      <section className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src={placeholderImages.treatmentFlowBanner.src}
          alt={placeholderImages.treatmentFlowBanner.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        <p className="absolute bottom-4 left-4 text-sm text-white/90 sm:left-6">
          施術風景イメージ(ダミー写真)
        </p>
      </section>

      {/* 施術の流れ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
          施術の流れ
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-stone-200 bg-white p-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-800 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 効果・症例 */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
            効果・症例
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
            美容鍼灸は、目に見えるお肌への「美肌効果」と、自律神経や血流など目に見えない「体の内側への効果」の
            両面からアプローチすることで、本来お持ちの美しさを引き出します。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 sm:p-8">
              <h3 className="font-serif text-lg font-bold text-rose-800">美肌への効果</h3>
              <ul className="mt-4 space-y-4">
                {skinEffects.map((e) => (
                  <li key={e.title}>
                    <p className="font-semibold text-stone-900">{e.title}</p>
                    <p className="mt-1 text-sm text-stone-600">{e.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 sm:p-8">
              <h3 className="font-serif text-lg font-bold text-rose-800">体の内側への効果</h3>
              <ul className="mt-4 space-y-4">
                {bodyEffects.map((e) => (
                  <li key={e.title}>
                    <p className="font-semibold text-stone-900">{e.title}</p>
                    <p className="mt-1 text-sm text-stone-600">{e.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-stone-500">
            施術で目指す変化をイメージ化しています(本人写真は掲載しておりません)
          </p>
          <div className="mt-4">
            <BeforeAfterStat />
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
          お客様の声
        </h2>
        <div className="mt-8">
          <TestimonialGrid items={testimonials} />
        </div>
      </section>

      {/* 料金表 */}
      <section id="price" className="bg-stone-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
            料金
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-rose-800 bg-white p-6 shadow-lg shadow-rose-900/10">
              <span className="rounded-full bg-rose-800 px-3 py-1 text-xs font-semibold text-white">
                初めての方限定
              </span>
              <p className="mt-3 font-serif text-lg font-bold text-stone-900">
                {siteConfig.prices.trialLabel}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-rose-800">
                ¥{siteConfig.prices.trialPrice.toLocaleString()}
                <span className="text-sm font-normal text-stone-500">(税込)</span>
              </p>
              <p className="mt-3 text-sm text-stone-500">
                ※初回限定の特別価格です。もちろん初回のみのご利用でも大丈夫です。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="font-serif text-lg font-bold text-stone-900">
                {siteConfig.prices.regularFullLabel}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-stone-900">
                ¥{siteConfig.prices.regularFullPrice.toLocaleString()}
                <span className="text-sm font-normal text-stone-500">(税込)</span>
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="font-serif text-lg font-bold text-stone-900">
                {siteConfig.prices.regularFaceLabel}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-stone-900">
                ¥{siteConfig.prices.regularFacePrice.toLocaleString()}
                <span className="text-sm font-normal text-stone-500">(税込)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
          よくある質問
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-stone-200 bg-white p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-stone-900">
                {f.q}
                <span className="ml-4 text-rose-800 transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-800 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-bold">
            まずは初回体験からはじめませんか
          </h2>
          <p className="mt-3 text-rose-50">
            不安な点はカウンセリングで丁寧にお伺いします。まずはお気軽にご予約ください。
          </p>
          <Link
            href={siteConfig.trialBookingHref}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-bold text-rose-800 shadow-lg transition hover:bg-rose-50"
          >
            初回体験を予約する
          </Link>
        </div>
      </section>
    </>
  );
}
