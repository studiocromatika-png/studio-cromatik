import Image from "next/image";
import { services } from "@/lib/content";

const COLOR_MAP: Record<string, { bg: string; text: string }> = {
  pine: { bg: "bg-pine", text: "text-paper" },
  lilac: { bg: "bg-lilac", text: "text-ink" },
  chartreuse: { bg: "bg-chartreuse", text: "text-ink" },
  blush: { bg: "bg-blush", text: "text-ink" },
};

export default function Services() {
  return (
    <section id="servicios" className="border-b border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <span className="eyebrow">{services.eyebrow}</span>
        <h2 className="mt-4 max-w-lg font-display text-4xl font-medium tracking-tight md:text-5xl">
          {services.title}
        </h2>
        <p className="mt-4 max-w-md font-body text-ink/70">{services.intro}</p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.items.map((item, i) => {
            const colors = COLOR_MAP[item.color] ?? COLOR_MAP.pine;
            return (
              <div
                key={item.title}
                className={`${colors.bg} ${colors.text} overflow-hidden rounded-3xl`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <span className="font-mono text-xs uppercase tracking-widest2 opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-body text-sm leading-relaxed opacity-80">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
