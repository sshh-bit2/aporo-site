# アポロ鍼灸院 サイト

美容鍼灸サロンのコーポレートサイト(Next.js App Router + Tailwind CSS)。
設計仕様は [site-design-spec.md](./site-design-spec.md) を参照してください。

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## 本番公開前に必ず確認すること

`src/lib/site-config.ts` に「(仮)」表記でまとめている以下の項目を、実データに差し替えてください。

- 院名・住所・電話番号・最寄駅
- LINE公式アカウントのURL(現在はダミーURL)
- 初回体験/通常コースの価格
- Googleマップの埋め込み(トップページのアクセス欄はプレースホルダー)
- お客様の声(現在はサンプル文言。掲載許可取得後に差し替え)
- `siteConfig.siteUrl`(Vercelの実際のデプロイURL)

## デプロイ

GitHubリポジトリをVercelに接続すると、pushのたびに自動デプロイされます。
