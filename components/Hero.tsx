import { hero } from "@/lib/content";
import SwatchStrip from "./SwatchStrip";

export default function Hero() {
  return (
    <section id="top" className="border-b border-ink/10 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-content">
        <div className="flex items-center gap-3">
          <SwatchStrip />
          <span className="eyebrow">{hero.eyebrow}</span>
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/70">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={hero.ctaPrimary.href}
            className="rounded-full bg-pine px-6 py-3 font-body text-sm font-medium text-paper hover:bg-ink"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="rounded-full border border-ink/20 px-6 py-3 font-body text-sm font-medium text-ink hover:border-ink"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
