# あぽろ整骨院 サイト

美容鍼灸を中心としたコーポレートサイト(Next.js App Router + Tailwind CSS)。
設計仕様は [site-design-spec.md](./site-design-spec.md) を参照してください。

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## 本番公開前に必ず確認すること

`src/lib/site-config.ts` に「(仮)」表記でまとめている以下の項目を、実データに差し替えてください。

- 電話番号・メールアドレス
- 最寄駅からの正確な徒歩分数(`nearestStation`。駅名・住所・Googleマップは実データ反映済み)
- LINE公式アカウントのURL(現在はダミーURL)
- 初回体験/通常コースの価格
- お客様の声(現在はサンプル文言。掲載許可取得後に差し替え)
- 施術者名・プロフィール(`staff`。現在は「院長(仮)」、写真も男性のダミー写真)
- `siteConfig.siteUrl`(Vercelの実際のデプロイURL)

写真は `src/lib/placeholder-images.ts` にまとめた無料ストックフォト(Unsplash)とサンプルバナー画像(`public/hero/`)を仮で使用している箇所があります。
`public/interior/` の院内風景写真は実際の写真です。

### 初回体験予約フォームについて

`/trial-booking` の予約フォーム(`src/components/TrialBookingForm.tsx`)は、現状フロントエンドのみの実装です。
送信するとお礼メッセージが表示されますが、**入力内容はどこにも送信・保存されません**。
実際にお客様からの予約を受け取るには、Next.jsのAPI Route + メール配信サービス(Resendなど)を追加で実装する必要があります。

## デプロイ

GitHubリポジトリをVercelに接続すると、pushのたびに自動デプロイされます。
