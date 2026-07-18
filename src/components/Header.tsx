"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CTA } from "@/components/CTA";
import { cities } from "@/lib/cities";
import { siteConfig } from "@/lib/site-config";

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
        <Link href="/" onClick={() => setOpen(false)} aria-label="Danielle Marisa Weddings &amp; Events">
          <Image
            src="/images/daniellemarisa-wedings-and-events-albuquerque.png"
            alt="Danielle Marisa Weddings &amp; Events"
            width={462}
            height={160}
            priority
            className="h-12 w-auto"
          />
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
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-ink hover:text-accent-dark"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.8c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
                fill="currentColor"
              />
            </svg>
            {siteConfig.phone}
          </a>
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
          <a
            href={siteConfig.phoneHref}
            className="mt-4 block px-2 text-sm font-medium text-ink hover:text-accent-dark"
          >
            Call {siteConfig.phone}
          </a>
          <CTA size="lg" className="mt-3 w-full" />
        </nav>
      )}
    </header>
  );
}
