import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Testimonial } from "@/components/Testimonial";
import { RelatedServices } from "@/components/RelatedServices";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";
import { coordinationReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Wedding Day Coordination NM | Danielle Marisa",
  description:
    "Month-of and day-of wedding coordination in Albuquerque, Santa Fe, and Taos, NM — timeline, vendor confirmation, and full wedding-day execution.",
  alternates: { canonical: "/wedding-day-coordination" },
};

export default function WeddingDayCoordinationPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData
        data={[
          localBusinessSchema(),
          serviceSchema({
            city: "New Mexico",
            serviceName: "Wedding Day Coordination",
            description:
              "Month-of and day-of wedding coordination for couples who have already booked their venue and vendors in Albuquerque, Santa Fe, or Taos, New Mexico.",
          }),
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        Day-Of Coordination
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Wedding Day Coordination, New Mexico
      </h1>

      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft">
        <p>
          You&apos;ve already booked your venue and vendors — you just need
          someone other than you or a family member running the actual day.
          Day-of (technically &ldquo;month-of&rdquo;) coordination means
          Danielle Marisa Weddings and Events steps in about a month out to
          build your timeline, confirm every vendor, and run your wedding day
          from first look to last dance.
        </p>

        <h2>What coordination includes</h2>
        <p>
          Starting roughly a month before your wedding, we take over vendor
          communication, build a minute-by-minute day-of timeline, run your
          rehearsal, and manage setup, ceremony, reception, and breakdown
          on-site — so you, your family, and your wedding party can actually
          be present instead of managing logistics. A venue coordinator
          manages the venue and its staff; we work alongside them to manage
          everything else, from your florist to your photographer&apos;s
          shot list.
        </p>

        <h2>Where we offer coordination</h2>
        <p>
          We coordinate weddings across{" "}
          <Link href="/albuquerque-wedding-planner">Albuquerque</Link>,{" "}
          <Link href="/santa-fe-wedding-planner">Santa Fe</Link>, and{" "}
          <Link href="/taos-wedding-planner">Taos</Link>, at venues large and
          small — see our <Link href="/venues">featured venues</Link>{" "}
          for examples of where we&apos;ve run wedding days.
        </p>

        <h2>What&apos;s included</h2>
        <p>
          Month-of coordination typically starts around $1,800–$2,000,
          depending on guest count and the number of vendors involved. Every
          quote is confirmed after a free consultation once we know your
          venue, vendor list, and timeline.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {coordinationReviews.map((r) => (
          <Testimonial key={r.name} quote={r.quote} name={r.name} detail={r.detail} />
        ))}
      </div>

      <div className="mt-12 rounded-sm border border-border bg-accent-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">
          Already booked your venue?
        </h2>
        <p className="mt-2 text-ink-soft">
          Tell us your date and venue and we&apos;ll follow up about
          coordination.
        </p>
        <div className="mt-6">
          <CTA size="lg" />
        </div>
      </div>

      <RelatedServices current="wedding-day-coordination" />
    </div>
  );
}
