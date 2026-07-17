"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CTA } from "@/components/CTA";
import { cities } from "@/lib/cities";

const navLinks = [
  ...cities.map((c) => ({ href: c.path, label: c.name })),
  { href: "/venues", label: "Venues" },
  { href: "/blog", label: "Venue Guides" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-wide text-ink"
          onClick={() => setOpen(false)}
        >
          Danielle Marisa
          <span className="block text-[0.65rem] font-sans font-normal uppercase tracking-[0.2em] text-accent-dark">
            Weddings &amp; Events
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-accent-dark ${
                  active ? "text-accent-dark" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <CTA size="md" />
        </nav>

        <button
          type="button"
          className="flex items-center justify-center rounded-sm border border-border p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-cream px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-2 py-3 text-sm font-medium uppercase tracking-[0.1em] text-ink hover:bg-accent-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <CTA size="lg" className="mt-4 w-full" />
        </nav>
      )}
    </header>
  );
}
