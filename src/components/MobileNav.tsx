"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/beauty-acupuncture", label: "美容鍼灸" },
  { href: "/#menu", label: "メニュー" },
  { href: "/#access", label: "アクセス" },
  { href: "/column", label: "コラム" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block h-0.5 w-6 bg-stone-800 transition-transform ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-stone-800 transition-opacity ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-stone-800 transition-transform ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-stone-200 bg-white shadow-lg">
          <nav className="flex flex-col divide-y divide-stone-100 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-stone-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-6 pt-2">
            <Link
              href={siteConfig.trialBookingHref}
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-rose-800 px-6 py-3 text-center font-bold text-white"
            >
              初回体験予約
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
