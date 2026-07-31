"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { interiorPhotos } from "@/lib/placeholder-images";

export default function InteriorGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  return (
    <>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {interiorPhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`${photo.alt}を拡大表示`}
            className="group relative aspect-square overflow-hidden rounded-xl border border-stone-200"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 33vw, 33vw"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={interiorPhotos[openIndex].alt}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
        >
          <button
            type="button"
            aria-label="閉じる"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
          >
            ×
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={interiorPhotos[openIndex].src}
              alt={interiorPhotos[openIndex].alt}
              width={1600}
              height={1200}
              className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
