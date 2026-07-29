import { siteConfig } from "@/lib/site-config";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19.5c0 .6-.4 1-1 1C10.8 20.5 3.5 13.2 3.5 4.5c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-1.9 1.9z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path
        d="M12 3.5c-5 0-9 3.3-9 7.3 0 3.6 3.2 6.6 7.5 7.2.3.1.7.2.6.6l-.2 1.3c-.1.4 0 .8.5.6 1.9-.8 5.8-3.4 6.9-5.4.9-1.2 1.7-2.6 1.7-4.3 0-4-4-7.3-9-7.3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 9v4M12 9v4M12 9l2.2 4M17 9v4h1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const items = [
  { key: "phone", label: "電話", href: siteConfig.phoneHref, Icon: PhoneIcon, className: "bg-rose-800 text-white" },
  { key: "mail", label: "メール", href: siteConfig.emailHref, Icon: MailIcon, className: "bg-stone-700 text-white" },
  { key: "line", label: "LINE", href: siteConfig.lineUrl, Icon: LineIcon, className: "bg-[#06C755] text-white" },
] as const;

export default function MobileContactBar() {
  return (
    <nav
      aria-label="お問い合わせ"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 md:hidden"
    >
      {items.map(({ key, label, href, Icon, className }) => (
        <a
          key={key}
          href={href}
          target={key === "line" ? "_blank" : undefined}
          rel={key === "line" ? "noopener noreferrer" : undefined}
          className={`flex flex-col items-center justify-center gap-0.5 py-2.5 ${className}`}
        >
          <Icon />
          <span className="text-xs font-semibold">{label}</span>
        </a>
      ))}
    </nav>
  );
}
