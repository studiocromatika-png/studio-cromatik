import { work } from "@/lib/content";

export default function Work() {
  return (
    <section id="trabajo" className="border-b border-ink/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <span className="eyebrow">{work.eyebrow}</span>
        <h2 className="mt-4 max-w-lg font-display text-4xl font-medium tracking-tight md:text-5xl">
          {work.title}
        </h2>
        <p className="mt-4 max-w-md font-body text-ink/70">{work.intro}</p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {work.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-3xl border border-ink/10 p-8"
            >
              <blockquote className="font-display text-xl font-medium leading-snug text-ink">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="font-body text-sm font-medium text-ink">
                  {item.name}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest2 text-ink/50">
                  {item.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
