import Image from "next/image";
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
    "ほうれい線・顔のたるみ・くすみ・小顔にアプローチする美容鍼灸。髪の毛程の細さの針で刺激は最小限、" +
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
    title: "全身+顔の鍼施術(約60分)",
    desc: "全身の巡りを整えたうえで、顔への施術へ。髪の毛程の細さの針を使用し、刺激は最小限に抑えています。",
  },
  {
    title: "アフターケアのご案内",
    desc: "施術後の過ごし方や、次回来院の目安についてご案内します。",
  },
];

const faqs = [
  {
    q: "何回くらいで変化を感じますか?",
    a: "個人差はありますが、多くの方が3〜5回程度の施術で肌のハリや血色の変化を感じ始めます。継続いただくことで変化を実感しやすくなります。",
  },
  {
    q: "跡やダウンタイムはありますか?",
    a: "髪の毛程の細さの針を使用しているため、内出血や跡が残ることは稀です。まれに針あとが赤くなることがありますが、通常数十分〜数時間程度で落ち着きます。",
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
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
          <div className="order-2 md:order-1">
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
          <div className="order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-rose-900/10">
              <Image
                src={placeholderImages.beautyHero.src}
                alt={placeholderImages.beautyHero.alt}
                width={1200}
                height={1000}
                priority
                className="aspect-[6/5] w-full object-cover"
              />
            </div>
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
              使用する針は髪の毛程の細さ。刺激は最小限に抑えていますので、
              鍼施術が初めての方やお痛みが心配な方も安心して受けていただけます。
            </p>
          </div>
        </div>
      </section>

      {/* 施術風景バナー */}
      <section className="relative h-56 w-full overflow-hidden sm:h-72">
        <Image
          src={placeholderImages.facialTreatment.src}
          alt={placeholderImages.facialTreatment.alt}
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-bold text-stone-900">
            効果・症例
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-stone-500">
            施術で目指す変化をイメージ化しています(本人写真は掲載しておりません)
          </p>
          <div className="mt-8">
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
                ※価格は仮設定です。確定次第、実際の価格に更新してください。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="font-serif text-lg font-bold text-stone-900">
                {siteConfig.prices.regularLabel}
              </p>
              <p className="mt-2 font-serif text-3xl font-bold text-stone-900">
                ¥{siteConfig.prices.regularPrice.toLocaleString()}
                <span className="text-sm font-normal text-stone-500">(税込)</span>
              </p>
              <p className="mt-3 text-sm text-stone-500">
                ※価格は仮設定です。確定次第、実際の価格に更新してください。
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
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#06C755] px-10 py-4 text-base font-bold text-white shadow-lg transition hover:opacity-90"
          >
            初回体験を予約する
          </a>
        </div>
      </section>
    </>
  );
}
