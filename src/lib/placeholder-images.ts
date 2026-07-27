/**
 * ダミー写真の一覧(Unsplashの無料ストックフォトを使用)。
 * すべて美容・鍼灸・マッサージのイメージに近い写真を選んでいますが、
 * 実際の院・スタッフ・施術風景の写真が用意でき次第、差し替えてください。
 * 各写真はUnsplash License(商用利用可・クレジット表記不要)の範囲で使用しています。
 */
export const placeholderImages = {
  homeHero: {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80&auto=format&fit=crop",
    alt: "美容鍼灸の施術イメージ(ダミー写真)",
  },
  beautyHero: {
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80&auto=format&fit=crop",
    alt: "顔への鍼施術のイメージ(ダミー写真)",
  },
  facialTreatment: {
    src: "https://images.unsplash.com/photo-1731514771613-991a02407132?w=1000&q=80&auto=format&fit=crop",
    alt: "フェイシャル施術のイメージ(ダミー写真)",
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
    src: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=600&q=80&auto=format&fit=crop",
    alt: "施術者イメージ(ダミー写真・実際のスタッフ写真に差し替え予定)",
  },
  salonInterior: {
    src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&q=80&auto=format&fit=crop",
    alt: "サロン内観のイメージ(ダミー写真)",
  },
  spaStillLife: {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
    alt: "スパ・リラクゼーションのイメージ(ダミー写真)",
  },
} as const;
