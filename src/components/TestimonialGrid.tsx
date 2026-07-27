import { siteConfig, testimonials } from "@/lib/site-config";

export default function TestimonialGrid({
  items = testimonials,
}: {
  items?: readonly (typeof testimonials)[number][];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {items.map((t) => (
        <blockquote
          key={t.initials}
          className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6"
        >
          <p className="flex-1 text-sm leading-relaxed text-stone-700">「{t.text}」</p>
          <footer className="mt-4 text-xs text-stone-400">
            {t.age}・{siteConfig.areaName}在住 {t.initials}
            <br />
            (サンプル・掲載許可取得後に実際のお声へ差し替え予定)
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
