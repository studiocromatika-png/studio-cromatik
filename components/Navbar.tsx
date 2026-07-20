import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={nav.logoAlt}
            width={36}
            height={36}
            className="rounded-md"
            priority
          />
          <span className="font-display text-lg font-medium tracking-tight">
            Studio Cromatik
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink/70 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="rounded-full bg-pine px-5 py-2.5 font-body text-sm font-medium text-paper hover:bg-ink"
        >
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
