"use client";

import { useRef } from "react";
import Image from "next/image";
import { work } from "@/lib/content";

export default function Work() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 320;
    track.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="trabajo" className="border-b border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">{work.eyebrow}</span>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-medium tracking-tight md:text-5xl">
              {work.title}
            </h2>
            <p className="mt-4 max-w-md font-body text-ink/70">{work.intro}</p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Ver cliente anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Ver siguiente cliente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="scrollbar-none mt-14 flex gap-5 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {work.items.map((item) => (
            <figure
              key={item.name}
              data-card
              className="flex w-[320px] shrink-0 flex-col justify-between rounded-3xl border border-ink/10 p-8"
              style={{ scrollSnapAlign: "start" }}
            >
              <blockquote className="font-display text-xl font-medium leading-snug text-ink">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-body text-sm font-medium text-ink">
                    {item.name}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest2 text-ink/50">
                    {item.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
