import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.businessName}のプライバシーポリシーです。`,
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-2xl font-bold text-stone-900">
        プライバシーポリシー
      </h1>
      <p className="mt-6 text-sm text-stone-500">
        ※本ページは雛形です。内容は正式公開前に運営者・専門家にご確認のうえ更新してください。
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-stone-700">
        <div>
          <h2 className="font-serif text-lg font-bold text-stone-900">
            個人情報の取得について
          </h2>
          <p className="mt-2">
            {siteConfig.businessName}(以下「当院」といいます)は、ご予約・お問い合わせの際に、
            お名前・電話番号・メールアドレス等の個人情報をお伺いする場合があります。
          </p>
        </div>
        <div>
          <h2 className="font-serif text-lg font-bold text-stone-900">利用目的</h2>
          <p className="mt-2">
            取得した個人情報は、ご予約の管理、施術に関するご案内、お問い合わせへの対応の目的以外には使用いたしません。
          </p>
        </div>
        <div>
          <h2 className="font-serif text-lg font-bold text-stone-900">第三者提供</h2>
          <p className="mt-2">
            法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
          </p>
        </div>
        <div>
          <h2 className="font-serif text-lg font-bold text-stone-900">お問い合わせ</h2>
          <p className="mt-2">
            個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
          </p>
          <p className="mt-2">
            {siteConfig.businessName} / {siteConfig.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
