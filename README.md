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

- 院名・住所・電話番号・最寄駅・メールアドレス
- LINE公式アカウントのURL(現在はダミーURL)
- 初回体験/通常コースの価格
- Googleマップの埋め込み(トップページのアクセス欄はプレースホルダー)
- お客様の声(現在はサンプル文言。掲載許可取得後に差し替え)
- 施術者名・プロフィール(`staff`。現在は「院長(仮)」)
- `siteConfig.siteUrl`(Vercelの実際のデプロイURL)

写真は `src/lib/placeholder-images.ts` にまとめた無料ストックフォト(Unsplash)を仮で使用しています。
実際の院内・スタッフ・施術風景の写真が用意でき次第、同ファイルのURLを差し替えてください。

## デプロイ

GitHubリポジトリをVercelに接続すると、pushのたびに自動デプロイされます。
