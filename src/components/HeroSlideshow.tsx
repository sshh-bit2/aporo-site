"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/hero/top1.png", alt: "美容鍼灸の施術風景(サンプル画像)" },
  { src: "/hero/top2.png", alt: "痛みを抑えた独自の手技による施術(サンプル画像)" },
  { src: "/hero/top3.png", alt: "フェイシャルケアの施術風景(サンプル画像)" },
];

const DISPLAY_MS = 5000;
const FADE_MS = 1200;

export default function HeroSlideshow() {
  const [cycle, setCycle] = useState(0);
  const index = cycle % slides.length;

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), DISPLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {slides.map((slide, i) => {
        // How many cycles ago this slide was last active, and the cycle
        // number at which that happened. Keying the zoom wrapper on that
        // cycle means the animation only restarts when a slide is freshly
        // shown — not every time it fades out, which would otherwise snap
        // the outgoing slide back to its unzoomed state mid-crossfade.
        const stepsAgo = (index - i + slides.length) % slides.length;
        const lastActiveCycle = cycle - stepsAgo;

        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
            }}
          >
            <div key={lastActiveCycle} className="h-full w-full animate-hero-kenburns">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
