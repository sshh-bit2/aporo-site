/**
 * ダミー写真の一覧(Unsplashの無料ストックフォトを使用)。
 * すべて美容・鍼灸・マッサージのイメージに近い写真を選んでいますが、
 * 実際の院・スタッフ・施術風景の写真が用意でき次第、差し替えてください。
 * 各写真はUnsplash License(商用利用可・クレジット表記不要)の範囲で使用しています。
 */
export const placeholderImages = {
  menuBeautyAcupuncture: {
    src: "/hero/top1.png",
    alt: "美容鍼灸のイメージ(サンプル画像)",
  },
  beautyHero: {
    src: "/hero/top2.png",
    alt: "痛みを抑えた独自の手技による施術(サンプル画像)",
  },
  treatmentFlowBanner: {
    src: "/hero/top3.png",
    alt: "フェイシャルケアの施術風景(サンプル画像)",
  },
  bodyMassage: {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80&auto=format&fit=crop",
    alt: "整体マッサージのイメージ(ダミー写真)",
  },
  footMassage: {
    src: "https://images.unsplash.com/photo-1611073615830-9f76902c10fe?w=800&q=80&auto=format&fit=crop",
    alt: "足つぼ整体マッサージのイメージ(ダミー写真)",
  },
  staffPortrait: {
    src: "https://images.unsplash.com/photo-1622902141397-a89655353bec?w=600&q=80&auto=format&fit=crop",
    alt: "施術者イメージ(ダミー写真・実際のスタッフ写真に差し替え予定)",
  },
} as const;

/** 実際の院内風景写真(クリックで拡大表示できるギャラリーで使用)。 */
export const interiorPhotos = [
  { src: "/interior/interior1.png", alt: "受付・待合スペース" },
  { src: "/interior/interior2.png", alt: "あぽろ整骨院の入口看板" },
  { src: "/interior/interior3.png", alt: "施術ルーム" },
] as const;
