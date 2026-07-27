import { siteConfig } from "@/lib/site-config";

export default function CtaButton({
  label = "初回体験を予約する",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={siteConfig.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-rose-800 px-8 py-4 text-base font-bold text-white shadow-lg shadow-rose-900/20 transition hover:bg-rose-900 ${className}`}
    >
      {label}
    </a>
  );
}
