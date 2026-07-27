"use client";

import { useState } from "react";
import Image from "next/image";
import { work } from "@/lib/content";

const CARD = 220; // tamaño de cada foto (px)
const GAP = 20; // espacio entre fotos (px)

export default function Work() {
  const [index, setIndex] = useState(0);
  const total = work.items.length;
  const current = work.items[index];

  const goTo = (i: number) => setIndex((i + total) % total);

  return (
    <section id="trabajo" className="border-b border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <span className="eyebrow">{work.eyebrow}</span>
        <h2 className="mt-4 max-w-lg font-display text-4xl font-medium tracking-tight md:text-5xl">
          {work.title}
        </h2>
        <p className="mt-4 max-w-md font-body text-ink/70">{work.intro}</p>

        <div className="relative mt-14">
          <div
            className="relative overflow-hidden"
            style={{ height: CARD + 8 }}
          >
            <div
              className="flex items-center transition-transform duration-500 ease-out"
              style={{
                gap: GAP,
                transform: `translateX(calc(50% - ${CARD / 2}px - ${
                  index * (CARD + GAP)
                }px))`,
              }}
            >
              {work.items.map((item, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ver trabajo: ${item.client}`}
                    className="relative shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ease-out"
                    style={{
                      width: CARD,
                      height: CARD,
                      opacity: isActive ? 1 : 0.45,
                      transform: isActive ? "scale(1)" : "scale(0.88)",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.client} — ${item.project}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Trabajo anterior"
              className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm hover:bg-paper md:left-4"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Siguiente trabajo"
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm hover:bg-paper md:right-4"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Caption + counter */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-center">
            <div>
              <div className="font-display text-lg font-medium text-ink">
                {current.client}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest2 text-ink/50">
                {current.project}
              </div>
            </div>
          </div>

          <div className="mt-3 text-center font-mono text-xs text-ink/50">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
