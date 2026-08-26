import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Testimonial } from "@/components/Testimonial";
import { RelatedServices } from "@/components/RelatedServices";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";
import { fullPlanningReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Full-Service Wedding Planning NM | Danielle Marisa",
  description:
    "Full-service wedding planning in Albuquerque, Santa Fe, and Taos, NM — venue and vendor sourcing, design, budget management, and day-of execution.",
  alternates: { canonical: "/full-service-wedding-planning" },
};

export default function FullServiceWeddingPlanningPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData
        data={[
          localBusinessSchema(),
          serviceSchema({
            city: "New Mexico",
            serviceName: "Full-Service Wedding Planning",
            description:
              "Full-service wedding planning from engagement to wedding day for couples marrying in Albuquerque, Santa Fe, or Taos, New Mexico.",
          }),
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        Full-Service Planning
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Full-Service Wedding Planning, New Mexico
      </h1>

      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft">
        <p>
          Full-service planning means Danielle Marisa Weddings and Events is
          involved from the very beginning of your engagement through the
          last dance — venue selection, vendor booking, design, and budget
          management, not just the final month before your wedding. It&apos;s
          the right fit for couples who want an expert managing every
          decision alongside them, rather than handing off a mostly-finished
          plan a few weeks out.
        </p>

        <h2>What full-service planning includes</h2>
        <p>
          We start with a free consultation to understand your vision,
          budget, and guest count, then build a planning timeline from
          engagement to wedding day. From there, we source and tour venues on
          your behalf, vet and book every vendor, manage your budget line by
          line, develop the design and décor concept, and run point on every
          logistical detail — including a full on-site team for your wedding
          day itself.
        </p>

        <h2>Where we offer full-service planning</h2>
        <p>
          Full-service planning is available across{" "}
          <Link href="/albuquerque-wedding-planner">Albuquerque</Link>,{" "}
          <Link href="/santa-fe-wedding-planner">Santa Fe</Link>, and{" "}
          <Link href="/taos-wedding-planner">Taos</Link>, as well as
          destination weddings brought to New Mexico from out of state. See
          our <Link href="/venues">featured venues</Link> across all three
          markets for a sense of where full-service couples typically get
          married.
        </p>

        <h2>What&apos;s included</h2>
        <p>
          Full-service planning is priced individually, depending on guest
          count, venue, and how many events are part of your wedding
          weekend. Every quote is customized after a free consultation —
          there&apos;s no generic package price until we understand what
          your day actually needs.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {fullPlanningReviews.map((r) => (
          <Testimonial key={r.name} quote={r.quote} name={r.name} detail={r.detail} />
        ))}
      </div>

      <div className="mt-12 rounded-sm border border-border bg-accent-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">
          Ready for full-service planning?
        </h2>
        <p className="mt-2 text-ink-soft">
          Tell us your date, your city, and where you are in the planning
          process.
        </p>
        <div className="mt-6">
          <CTA size="lg" />
        </div>
      </div>

      <RelatedServices current="full-service-wedding-planning" />
    </div>
  );
}
