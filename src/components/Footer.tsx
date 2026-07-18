import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cities } from "@/lib/cities";
import { CTA } from "@/components/CTA";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl">Danielle Marisa</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-accent-light">
              Weddings &amp; Events
            </p>
            <p className="mt-4 max-w-xs text-sm text-cream/80">
              Full-service wedding planning and day-of coordination across
              Albuquerque, Santa Fe, and Taos, New Mexico.
            </p>
            <CTA variant="outline-light" className="mt-6" />
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-light">
              Serving
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {cities.map((c) => (
                <li key={c.path}>
                  <Link href={c.path} className="text-cream/80 hover:text-cream">
                    {c.name} Wedding Planner
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-light">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-cream/80 hover:text-cream">About</Link>
              </li>
              <li>
                <Link href="/venues" className="text-cream/80 hover:text-cream">Venues</Link>
              </li>
              <li>
                <Link href="/blog" className="text-cream/80 hover:text-cream">Venue Guides</Link>
              </li>
              <li>
                <Link href="/faq" className="text-cream/80 hover:text-cream">FAQ</Link>
              </li>
              <li>
                <Link href="/full-service-wedding-planning" className="text-cream/80 hover:text-cream">
                  Full-Service Planning
                </Link>
              </li>
              <li>
                <Link href="/wedding-day-coordination" className="text-cream/80 hover:text-cream">
                  Day-of Coordination
                </Link>
              </li>
              <li>
                <Link href="/destination-wedding-planner-new-mexico" className="text-cream/80 hover:text-cream">
                  Destination Weddings
                </Link>
              </li>
              <li>
                <Link href="/elopement-planner-new-mexico" className="text-cream/80 hover:text-cream">
                  Elopements
                </Link>
              </li>
              <li>
                <Link href="/wedding-planning-checklist" className="text-cream/80 hover:text-cream">
                  Free Planning Checklist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-light">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-cream">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                  {siteConfig.email}
                </a>
              </li>
              <li>New Mexico, USA</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href={siteConfig.social.instagram} className="text-cream/80 hover:text-cream" aria-label="Instagram">
                Instagram
              </a>
              <a href={siteConfig.social.facebook} className="text-cream/80 hover:text-cream" aria-label="Facebook">
                Facebook
              </a>
              <a href={siteConfig.social.pinterest} className="text-cream/80 hover:text-cream" aria-label="Pinterest">
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-xs text-cream/60">
          &copy; {year} {siteConfig.businessName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
