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
  siteUrl: "https://aporo-site.vercel.app", // 実際のVercelデプロイURL(独自ドメイン設定時はそちらに差し替えてください)
  prices: {
    trialLabel: "初回体験",
    trialPrice: 5500, // (仮) 本書site-design-spec.mdの仮価格
    regularLabel: "通常コース",
    regularPrice: 11000, // (仮)
  },
} as const;

export const staff = {
  name: "院長(仮)", // (仮) 施術者名に差し替えてください
  title: "はり師・きゅう師",
  yearsOfExperience: "20",
  bio:
    "20年以上にわたり、美容鍼灸・保険施術・整体マッサージを通じて幅広い症状と向き合ってきました。" +
    "お一人おひとりの体質やお悩みに合わせ、無理のないペースで変化を実感していただける施術を心がけています。",
} as const;

export const menuItems = [
  {
    slug: "beauty-acupuncture",
    href: "/beauty-acupuncture",
    title: "美容鍼灸",
    description: "たるみ・くすみ・小顔にアプローチ",
    featured: true,
    imageKey: "facialTreatment",
  },
  {
    slug: "seitai",
    href: null,
    title: "整体マッサージ",
    description: "肩こり・腰痛などの慢性症状に",
    featured: false,
    imageKey: "bodyMassage",
  },
  {
    slug: "ashitsubo",
    href: null,
    title: "足つぼ整体マッサージ",
    description: "むくみ・冷えのケアに",
    featured: false,
    imageKey: "footMassage",
  },
  {
    slug: "kotsuban",
    href: null,
    title: "交通事故施術",
    description: "保険施術(捻挫・挫傷)に対応",
    featured: false,
    imageKey: null,
  },
] as const;

/** サンプルのお客様の声。掲載許可取得後、実際の声へ差し替えてください。 */
export const testimonials = [
  {
    age: "40代",
    text:
      "鏡を見るたびに気になっていたほうれい線が、施術を重ねるうちに気にならなくなってきました。" +
      "針は痛みもほとんどなく、むしろ終わったあとの肌の血色の良さに驚きます。",
    initials: "A.Kさん",
  },
  {
    age: "50代",
    text:
      "更年期に入ってから肌の調子が不安定でしたが、施術を続けるうちに顔色が明るくなったと言われるように。" +
      "自分へのご褒美時間としても続けています。",
    initials: "M.Sさん",
  },
  {
    age: "30代",
    text:
      "美容鍼が初めてで不安でしたが、カウンセリングで丁寧に説明していただき安心して受けられました。" +
      "翌朝の肌の調子が違うのを実感しています。",
    initials: "Y.Tさん",
  },
] as const;
