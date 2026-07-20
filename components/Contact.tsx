import { contact } from "@/lib/content";
import SwatchStrip from "./SwatchStrip";

export default function Contact() {
  return (
    <section id="contacto" className="border-b border-ink/10 bg-blush px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <SwatchStrip />
        <span className="mt-4 block font-mono text-xs uppercase tracking-widest2 text-ink/60">
          {contact.eyebrow}
        </span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
          {contact.title}
        </h2>
        <p className="mt-4 max-w-md font-body text-ink/70">{contact.intro}</p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <a
            href={`mailto:${contact.email}`}
            className="block rounded-3xl bg-paper p-8 hover:bg-ink hover:text-paper"
          >
            <span className="font-mono text-xs uppercase tracking-widest2 opacity-60">
              Email
            </span>
            <div className="mt-3 font-display text-lg font-medium">
              {contact.email}
            </div>
          </a>

          <a
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            className="block rounded-3xl bg-paper p-8 hover:bg-ink hover:text-paper"
          >
            <span className="font-mono text-xs uppercase tracking-widest2 opacity-60">
              Teléfono
            </span>
            <div className="mt-3 font-display text-lg font-medium">
              {contact.phone}
            </div>
          </a>

          <div className="rounded-3xl bg-paper p-8">
            <span className="font-mono text-xs uppercase tracking-widest2 opacity-60">
              Ubicación
            </span>
            <div className="mt-3 font-display text-lg font-medium">
              {contact.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
