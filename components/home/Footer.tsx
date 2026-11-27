
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Coffee,
  Feather,
  Heart,
  Camera,
  Mail,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/#top" },
  { label: "Our Spaces", href: "/#spaces" },
  { label: "Menu", href: "/menu" },
  { label: "The Library", href: "/#library" },
  { label: "Membership", href: "/#membership" },
  { label: "Our Story", href: "/#story" },
  { label: "Visit Us", href: "/#visit" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#17251F] px-5 pb-7 pt-16 text-[#F0EAD2] sm:px-6 sm:pt-20 md:px-10">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#DDE5B6]/10" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full border border-[#DDE5B6]/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid gap-12 border-b border-[#F0EAD2]/15 pb-12 sm:gap-14 sm:pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <Link
              href="/#top"
              aria-label="Alpas - return to homepage"
              className="group inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDE5B6]"
            >
              <h2 className="font-serif text-4xl tracking-wide transition-colors group-hover:text-[#DDE5B6] sm:text-5xl">
                Alpas<span className="text-[#DDE5B6]">.</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-xs font-serif text-lg italic leading-relaxed text-[#DDE5B6]/80">
              Where the Mind Wanders Free.
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#F0EAD2]/55">
              A little escape for curious minds, quiet souls,
              coffee lovers, and everyone who finds comfort
              between the pages.
            </p>

            <div
              className="mt-7 flex items-center gap-3 text-[#DDE5B6]/70"
              aria-hidden="true"
            >
              <BookOpen size={17} strokeWidth={1.4} />
              <Coffee size={17} strokeWidth={1.4} />
              <Feather size={17} strokeWidth={1.4} />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-xs tracking-[0.25em] text-[#DDE5B6]">
              EXPLORE
            </h3>

            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 rounded-sm text-sm text-[#F0EAD2]/65 transition-colors hover:text-[#DDE5B6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDE5B6]"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      aria-hidden="true"
                      className="opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="mb-6 text-xs tracking-[0.25em] text-[#DDE5B6]">
              FIND US
            </h3>

            <div className="space-y-5 text-sm leading-6 text-[#F0EAD2]/65">
              <p>
                14 Pahina Street,
                <br />
                Brgy. Malaya,
                <br />
                Quezon City, Metro Manila
              </p>

              <p>
                Tuesday – Sunday
                <br />
                9:00 AM – 9:00 PM
              </p>

              <a
                href="mailto:hello@alpas.cafe"
                className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-[#DDE5B6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDE5B6]"
              >
                <Mail size={15} aria-hidden="true" />
                hello@alpas.cafe
              </a>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="mb-6 text-xs tracking-[0.25em] text-[#DDE5B6]">
              STAY A LITTLE
            </h3>

            <p className="mb-6 text-sm leading-7 text-[#F0EAD2]/60">
              Follow along for little moments, lovely reads,
              and freshly brewed inspiration.
            </p>

            <a
              href="https://www.instagram.com/alpas.cafe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Alpas on Instagram (opens in a new tab)"
              className="inline-flex items-center gap-3 border border-[#DDE5B6]/30 px-4 py-3 text-xs tracking-[0.15em] transition-all duration-300 hover:border-[#DDE5B6] hover:bg-[#DDE5B6] hover:text-[#17251F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DDE5B6] sm:px-5"
            >
              <Camera size={16} aria-hidden="true" />
              FOLLOW ALPAS
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Closing quote */}
        <div className="px-2 py-12 text-center sm:py-14">
          <Heart
            size={18}
            strokeWidth={1.2}
            aria-hidden="true"
            className="mx-auto mb-5 text-[#DDE5B6]"
          />

          <p className="font-serif text-xl italic leading-relaxed text-[#F0EAD2]/85 sm:text-2xl md:text-3xl">
            "May you always find a little room to wander."
          </p>

          <p className="mt-4 text-[9px] tracking-[0.3em] text-[#DDE5B6]/55">
            WITH LOVE, ALPAS
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#F0EAD2]/15 pt-7 text-center md:flex-row md:gap-4 md:text-left">
          <p className="text-[10px] leading-5 tracking-wide text-[#F0EAD2]/40">
            © 2026 ALPAS CAFÉ. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[10px] leading-5 tracking-wide text-[#F0EAD2]/40">
            MADE WITH LOVE, COFFEE, AND A LITTLE IMAGINATION.
          </p>
        </div>
      </div>
    </footer>
  );
}
