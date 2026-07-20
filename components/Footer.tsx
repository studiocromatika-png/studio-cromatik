import Image from "next/image";
import { footer, contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Studio Cromatik" width={28} height={28} className="rounded-md" />
          <span className="font-body text-sm text-ink/70">{footer.tagline}</span>
        </div>

        <div className="flex gap-6">
          {contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-mono text-xs uppercase tracking-widest2 text-ink/50 hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="font-body text-xs text-ink/40">{footer.copyright}</p>
      </div>
    </footer>
  );
}
