import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="estudio" className="border-b border-ink/10 bg-pine px-6 py-20 text-paper md:px-10 md:py-28">
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest2 text-paper/60">
            {about.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-5xl">
            {about.title}
          </h2>
        </div>

        <div>
          {about.paragraphs.map((p) => (
            <p key={p} className="mb-4 font-body leading-relaxed text-paper/80">
              {p}
            </p>
          ))}

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-paper/20 pt-8">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-medium">{stat.value}</dd>
                <dd className="mt-1 font-mono text-xs uppercase tracking-widest2 text-paper/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
