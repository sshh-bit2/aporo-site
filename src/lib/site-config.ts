/**
 * サイト全体で使う店舗情報・導線設定。
 * 「(仮)」表記の値は未確定情報のため、本番公開前に必ず実データへ差し替えてください。
 */
export const siteConfig = {
  businessName: "アポロ鍼灸院", // (仮) 正式な院名に差し替えてください
  businessNameEn: "Aporo Acupuncture Clinic",
  catchCopy: "その一針で、明日の顔がかわる。",
  subCopy: "エイジングケア専門の美容鍼灸",
  areaName: "◯◯", // (仮) MEO/SEO用の地域名。実際の商圏名に差し替えてください
  postalCode: "000-0000", // (仮)
  address: "◯◯県◯◯市◯◯ ◯-◯-◯ ◯◯ビル◯階", // (仮)
  nearestStation: "◯◯駅から徒歩3分", // (仮)
  entranceNote: "間借りサロンのため入口がわかりにくい場合があります。ご予約の方には入り方をご案内します。",
  phone: "000-0000-0000", // (仮)
  phoneHref: "tel:0000000000", // (仮)
  lineUrl: "https://line.me/R/ti/p/@your-line-id", // (仮) LINE公式アカウントのURLに差し替えてください
  hours: "完全予約制(施術時間 10:00〜19:00)", // (仮)
  reviewScore: "4.8", // (仮) 実際の口コミ件数・評点が確定次第更新してください
  yearsOfExperience: "20",
  siteUrl: "https://aporo-site.vercel.app", // Vercelデプロイ後のURLに差し替えてください
  prices: {
    trialLabel: "初回体験",
    trialPrice: 5500, // (仮) 本書site-design-spec.mdの仮価格
    regularLabel: "通常コース",
    regularPrice: 11000, // (仮)
  },
} as const;

export const menuItems = [
  {
    slug: "beauty-acupuncture",
    href: "/beauty-acupuncture",
    title: "美容鍼灸",
    description: "たるみ・くすみ・小顔にアプローチ",
    featured: true,
  },
  {
    slug: "seitai",
    href: null,
    title: "整体マッサージ",
    description: "肩こり・腰痛などの慢性症状に",
    featured: false,
  },
  {
    slug: "ashitsubo",
    href: null,
    title: "足つぼ整体マッサージ",
    description: "むくみ・冷えのケアに",
    featured: false,
  },
  {
    slug: "kotsuban",
    href: null,
    title: "交通事故施術",
    description: "保険施術(捻挫・挫傷)に対応",
    featured: false,
  },
] as const;
