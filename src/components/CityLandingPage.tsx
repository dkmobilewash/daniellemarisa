import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Testimonial } from "@/components/Testimonial";
import { PressStrip } from "@/components/PressStrip";
import { FeaturedVenues } from "@/components/FeaturedVenues";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export type CityPackage = {
  name: string;
  /** Optional link to the dedicated service page this package corresponds to. */
  href?: string;
  price: string;
  description: string;
  features: string[];
};

export type CityContent = {
  cityName: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  localKnowledge: { heading: string; paragraphs: string[] }[];
  painPoints: string[];
  packages: CityPackage[];
  objectionHeading: string;
  objectionBody: string[];
  testimonials: {
    quote: string;
    name: string;
    detail: string;
    image?: { src: string; alt: string };
  }[];
  mapEmbedSrc: string;
  nicheLinks: { title: string; href: string }[];
  faqs: FAQItem[];
  closingBody: string;
};

export function CityLandingPage({ content }: { content: CityContent }) {
  const {
    cityName,
    heroImage,
    heroAlt,
    intro,
    localKnowledge,
    painPoints,
    packages,
    objectionHeading,
    objectionBody,
    testimonials,
    mapEmbedSrc,
    nicheLinks,
    faqs,
    closingBody,
  } = content;

  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          serviceSchema({
            city: cityName,
            serviceName: "Wedding Planning & Coordination",
            description: `Full-service wedding planning and day-of coordination for couples marrying in ${cityName}, New Mexico.`,
          }),
        ]}
      />

      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
              {cityName}, New Mexico
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {cityName} <em className="text-accent-dark italic">Wedding Planner</em> + Coordinator
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              {intro}
            </p>
            <div className="mt-8">
              <CTA size="lg" />
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image src={heroImage} alt={heroAlt} fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <PressStrip />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        {localKnowledge.map((block) => (
          <div key={block.heading} className="mt-8 first:mt-0">
            <h2 className="font-serif text-2xl text-ink sm:text-3xl">
              {block.heading}
            </h2>
            <div className="mt-3 space-y-4 text-ink-soft">
              {block.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
          You&apos;re in the right place if...
        </h2>
        <ul className="mx-auto mt-8 max-w-2xl space-y-4">
          {painPoints.map((p) => (
            <li
              key={p}
              className="rounded-sm border border-border bg-paper p-4 text-ink-soft"
            >
              &ldquo;{p}&rdquo;
            </li>
          ))}
        </ul>
      </section>

      <section id="services" className="border-y border-border bg-accent-light/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
            Planning packages
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-soft">
            Every package is tailored to your guest count, venue, and
            timeline during a free consultation.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col rounded-sm border border-border bg-paper p-6"
              >
                <h3 className="font-serif text-xl text-ink">
                  {pkg.href ? (
                    <Link href={pkg.href} className="underline decoration-transparent hover:decoration-accent-dark hover:text-accent-dark">
                      {pkg.name}
                    </Link>
                  ) : (
                    pkg.name
                  )}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent-dark">
                  {pkg.price}
                </p>
                <p className="mt-3 text-sm text-ink-soft">{pkg.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent-dark">
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTA />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl text-ink sm:text-3xl">
          {objectionHeading}
        </h2>
        <div className="mt-4 space-y-4 text-ink-soft">
          {objectionBody.map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>
        <p className="mt-2">
          <Link
            href="/wedding-day-coordination"
            className="text-sm font-medium text-accent-dark underline underline-offset-4"
          >
            See exactly what our day-of coordination includes &rarr;
          </Link>
        </p>
      </section>

      <section className="border-y border-border bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
            {cityName} couples on working with us
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                <Testimonial {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedVenues city={cityName} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
          Serving {cityName} and the surrounding area
        </h2>
        <div className="mt-8 overflow-hidden rounded-sm border border-border">
          <iframe
            title={`Map of ${cityName}, New Mexico`}
            src={mapEmbedSrc}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="border-y border-border bg-accent-light/40">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
              {cityName} wedding planning FAQ
            </h2>
            <div className="mt-8">
              <FAQAccordion items={faqs} />
            </div>
            <p className="mt-6 text-center text-sm text-ink-soft">
              More questions?{" "}
              <Link href="/faq" className="text-accent-dark underline underline-offset-4">
                Read our full FAQ
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
          Keep exploring
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/about"
            className="rounded-sm border border-border bg-paper p-5 text-sm font-medium text-ink hover:border-accent"
          >
            Meet {siteConfig.founderName} →
          </Link>
          <Link
            href="/faq"
            className="rounded-sm border border-border bg-paper p-5 text-sm font-medium text-ink hover:border-accent"
          >
            Wedding planning FAQ →
          </Link>
          <Link
            href="/blog"
            className="rounded-sm border border-border bg-paper p-5 text-sm font-medium text-ink hover:border-accent"
          >
            All venue guides →
          </Link>
          {nicheLinks.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-sm border border-border bg-paper p-5 text-sm font-medium text-ink hover:border-accent"
            >
              {n.title} →
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-ink">
          Let&apos;s plan your {cityName} wedding
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          {closingBody}
        </p>
        <div className="mt-8">
          <CTA size="lg" />
        </div>
      </section>
    </>
  );
}
