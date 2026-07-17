import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PressStrip } from "@/components/PressStrip";
import { StructuredData } from "@/components/StructuredData";
import { personSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About the Founder | Danielle Marisa",
  description:
    "Meet Danielle Marisa, founder of Danielle Marisa Weddings and Events — a New Mexico wedding planner and coordinator with 10+ years of experience.",
  alternates: { canonical: "/about" },
};

const atAGlance = [
  { stat: "10+", label: "years planning weddings & events across New Mexico" },
  { stat: "3", label: "home-turf cities — Albuquerque, Santa Fe & Taos" },
  { stat: "Full-service", label: "weddings, corporate events, and VIP parties" },
  { stat: "Family-run", label: "a business built by a mom & entrepreneur" },
];

const venuesWeKnow = [
  { name: "Hotel Andaluz", href: "/venues/hotel-andaluz" },
  { name: "Hyatt Regency Tamaya Resort & Spa", href: "/venues/hyatt-regency-tamaya" },
];

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData data={personSchema()} />

      <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-start">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm md:aspect-[4/5]">
          <Image
            src="/images/danielle-marisa-images/danielle-marisa-headshot.jpg"
            alt="Danielle Marisa, founder of Danielle Marisa Weddings and Events"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
            About the Founder
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink">
            Meet <em className="text-accent-dark italic">{siteConfig.founderName}</em>
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

      <div className="mt-16 grid gap-6 border-y border-border py-10 sm:grid-cols-4">
        {atAGlance.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <p className="font-serif text-3xl text-accent-dark">{item.stat}</p>
            <p className="mt-1 text-sm text-ink-soft">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          Venues we know well
        </h2>
        <p className="mt-3 text-ink-soft">
          Beyond Albuquerque, Danielle regularly plans at historic adobe
          properties around Santa Fe and mountain-view sites above Taos.
          A few Albuquerque venues she&apos;s worked at closely enough to
          write the guide on:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {venuesWeKnow.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="rounded-sm border border-border bg-paper px-4 py-2 text-sm font-medium text-ink hover:border-accent"
            >
              {v.name}
            </Link>
          ))}
        </div>
      </div>
      </div>

      <PressStrip />

      <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <p className="text-ink-soft">
          Ready to talk through your wedding?{" "}
          <Link href="/faq" className="text-accent-dark underline underline-offset-4">
            Read our FAQ
          </Link>{" "}
          or explore{" "}
          <Link href="/albuquerque-wedding-planner" className="text-accent-dark underline underline-offset-4">
            {siteConfig.primaryCity} wedding planning
          </Link>
          .
        </p>
      </div>
    </>
  );
}
