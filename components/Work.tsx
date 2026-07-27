"use client";

import { useState } from "react";
import Image from "next/image";
import { work } from "@/lib/content";

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
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[16/9]">
            <Image
              key={current.image}
              src={current.image}
              alt={`${current.client} — ${current.project}`}
              fill
              className="object-cover"
            />

            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Trabajo anterior"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink hover:bg-paper"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Siguiente trabajo"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink hover:bg-paper"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-display text-lg font-medium text-ink">
                {current.client}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest2 text-ink/50">
                {current.project}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-ink/50">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                {work.items.map((item, i) => (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ir al trabajo ${i + 1}`}
                    className={`h-2 w-2 rounded-full ${
                      i === index ? "bg-pine" : "bg-ink/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
