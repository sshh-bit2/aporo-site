"use client";

import { useState } from "react";

export default function TrialBookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center">
        <p className="font-serif text-lg font-bold text-rose-800">
          ありがとうございました。
        </p>
        <p className="mt-2 text-stone-700">折り返しメールさせて頂きます。</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
    >
      <div>
        <label htmlFor="trial-name" className="block text-sm font-semibold text-stone-700">
          お名前 <span className="text-rose-800">*</span>
        </label>
        <input
          id="trial-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="山田 花子"
          className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-rose-800 focus:outline-none focus:ring-1 focus:ring-rose-800"
        />
      </div>
      <div>
        <label htmlFor="trial-email" className="block text-sm font-semibold text-stone-700">
          メールアドレス <span className="text-rose-800">*</span>
        </label>
        <input
          id="trial-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.com"
          className="mt-1.5 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-rose-800 focus:outline-none focus:ring-1 focus:ring-rose-800"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-rose-800 px-8 py-4 text-base font-bold text-white transition hover:bg-rose-900"
      >
        体験を予約する
      </button>
    </form>
  );
}
