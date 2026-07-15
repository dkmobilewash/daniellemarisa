import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import { personSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About the Founder | Danielle Marisa",
  description:
    "Meet Danielle Marisa, founder of Danielle Marisa Weddings and Events — a New Mexico wedding planner and coordinator with 10+ years of experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData data={personSchema()} />

      <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-start">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm">
          <Image
            src="/images/about-danielle.svg"
            alt="Placeholder portrait of founder Danielle Marisa — swap for a real photo"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive-dark">
            About the Founder
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink">
            {siteConfig.founderName}
          </h1>
          <p className="mt-2 text-ink-soft">
            Founder &amp; Lead Wedding Planner, {siteConfig.businessName}
          </p>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Danielle is an event planner and coordinator rooted in New
              Mexico. For more than a decade, she has coordinated weddings,
              corporate events, community events, and VIP parties across
              Albuquerque, Santa Fe, and Taos — but her focus has always
              stayed on full-service weddings and events, handling every
              logistic required to make the day stress-free, expertly
              designed, and genuinely memorable for the people living it.
            </p>
            <p>
              What sets her approach apart isn&apos;t a signature aesthetic
              — it&apos;s the depth of local knowledge that only comes from
              actually working the room, season after season, at the
              venues, with the vendors, and in the neighborhoods that make
              up New Mexico&apos;s wedding landscape. She knows which
              historic properties have hard curfews, which caterers can
              execute a full reception in a small mountain town, and which
              backup plan actually works when a summer monsoon rolls in an
              hour before your ceremony.
            </p>
            <p>
              Outside of work, Danielle is a dedicated mother and
              entrepreneur who is passionate about curating memorable
              experiences — a passion that shows up as much in how she runs
              a wedding day as in why she started this business in the
              first place.
            </p>
          </div>

          <div className="mt-8">
            <CTA size="lg" />
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
          As featured in (placeholder — swap for real press logos)
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-ink-soft/60">
          {["New Mexico Bride", "Duke City Weddings", "ABQ the Mag", "Southwest I Do"].map(
            (name) => (
              <span key={name} className="font-serif text-lg italic">
                {name}
              </span>
            )
          )}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-ink-soft">
          Ready to talk through your wedding?{" "}
          <Link href="/faq" className="text-olive-dark underline underline-offset-4">
            Read our FAQ
          </Link>{" "}
          or explore{" "}
          <Link href="/albuquerque-wedding-planner" className="text-olive-dark underline underline-offset-4">
            {siteConfig.primaryCity} wedding planning
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
