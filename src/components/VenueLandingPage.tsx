import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema } from "@/lib/schema";
import { cities } from "@/lib/cities";
import { getRelatedVenues } from "@/lib/venues";
import type { VenueContent } from "@/lib/venues";

function cityPathFor(city: string): string {
  return cities.find((c) => c.name === city)?.path ?? "/";
}

export function VenueLandingPage({ venue }: { venue: VenueContent }) {
  const {
    slug,
    name,
    city,
    tagline,
    heroImage,
    heroImageAlt,
    quickFacts,
    whatMakesItSpecial,
    theExperience,
    theArea,
    capacityLogistics,
    photoSpots,
    blogSlug,
  } = venue;

  const cityPath = cityPathFor(city);
  const relatedVenues = getRelatedVenues(slug);

  return (
    <>
      <StructuredData data={localBusinessSchema()} />

      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
              <Link href={cityPath} className="hover:underline">
                {city}, New Mexico
              </Link>
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {name}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              {tagline}
            </p>
            <div className="mt-8">
              <CTA size="lg" />
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image src={heroImage} alt={heroImageAlt} fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-accent-light/40">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:grid-cols-4 sm:px-6 lg:px-8">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="text-center">
              <p className="font-serif text-xl text-ink">{fact.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-accent-dark">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          What Makes {name} Special
        </h2>
        <div className="mt-4 space-y-4 text-ink-soft">
          {whatMakesItSpecial.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">
            {theExperience.heading}
          </h2>
          <div className="mt-4 space-y-4 text-ink-soft">
            {theExperience.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          {theArea.heading}
        </h2>
        <div className="mt-4 space-y-4 text-ink-soft">
          {theArea.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-accent-light/40">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-serif text-2xl text-ink">Capacity &amp; Logistics</h2>
            <ul className="mt-4 space-y-3 text-ink-soft">
              {capacityLogistics.map((item) => (
                <li key={item} className="flex gap-2 leading-relaxed">
                  <span aria-hidden="true" className="mt-1 shrink-0 text-accent-dark">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">Best Photo Spots</h2>
            <ul className="mt-4 space-y-3 text-ink-soft">
              {photoSpots.map((item) => (
                <li key={item} className="flex gap-2 leading-relaxed">
                  <span aria-hidden="true" className="mt-1 shrink-0 text-accent-dark">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedVenues.length > 0 && (
        <section className="border-t border-border bg-accent-light/40">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
              Comparing {city} Venues?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-soft">
              Other {city} venues we&apos;ve planned at or know well.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {relatedVenues.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${v.slug}`}
                  className="group flex flex-col overflow-hidden rounded-sm border border-border bg-paper hover:border-accent"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={v.heroImage}
                      alt={v.heroImageAlt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-serif text-lg text-ink">{v.name}</p>
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent-dark">
                      View Venue
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-ink">
          Planning a wedding at {name}?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          Tell us your date and we&apos;ll follow up within one business day
          with next steps — no commitment, just a conversation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTA size="lg" />
          <Link
            href={`/blog/${blogSlug}`}
            className="text-sm font-medium text-accent-dark underline underline-offset-4"
          >
            Read the full venue guide &rarr;
          </Link>
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          <Link href={cityPath} className="text-accent-dark underline underline-offset-4">
            See more {city} venues and planning packages
          </Link>
        </p>
      </section>
    </>
  );
}
