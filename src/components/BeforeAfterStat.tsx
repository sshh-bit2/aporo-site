const metrics = [
  { label: "肌のハリ感", before: 35, after: 78 },
  { label: "顔色・血色", before: 40, after: 82 },
  { label: "むくみのなさ", before: 30, after: 75 },
  { label: "小顔感", before: 45, after: 80 },
];

export default function BeforeAfterStat() {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between text-xs font-semibold tracking-wide text-stone-400">
        <span>施術前</span>
        <span>施術後(イメージ)</span>
      </div>
      <div className="space-y-5">
        {metrics.map((m) => (
          <div key={m.label}>
            <p className="mb-1.5 text-sm text-stone-700">{m.label}</p>
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-stone-100">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-stone-300"
                style={{ width: `${m.before}%` }}
              />
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-rose-400 to-rose-700"
                style={{ width: `${m.after}%`, opacity: 0.9 }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-stone-400">
        ※上記は施術によって目指す変化のイメージを表したデータ表現です。効果には個人差があり、施術効果を保証するものではありません。
      </p>
    </div>
  );
}
