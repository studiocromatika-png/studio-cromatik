"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ServiceImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  // Avance automático cada 3.5 segundos
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [total]);

  const goTo = (i: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIndex((i + total) % total);
  };

  return (
    <div className="group relative aspect-[4/3]">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      ))}

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => goTo(index - 1, e)}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-paper/85 text-ink opacity-0 transition-opacity duration-200 hover:bg-paper group-hover:opacity-100"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => goTo(index + 1, e)}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-paper/85 text-ink opacity-0 transition-opacity duration-200 hover:bg-paper group-hover:opacity-100"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={(e) => goTo(i, e)}
                aria-label={`Ir a la foto ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-paper" : "bg-paper/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
