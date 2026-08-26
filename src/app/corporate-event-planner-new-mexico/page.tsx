import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Corporate Event Planner New Mexico | Danielle Marisa",
  description:
    "Corporate event planning in Albuquerque, Santa Fe, and Taos, NM — company celebrations, client events, and executive gatherings, planned with the same care as our weddings.",
  alternates: { canonical: "/corporate-event-planner-new-mexico" },
};

export default function CorporateEventPlannerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData
        data={[
          localBusinessSchema(),
          serviceSchema({
            city: "New Mexico",
            serviceName: "Corporate Event Planning",
            description:
              "Corporate and company event planning for businesses in Albuquerque, Santa Fe, and Taos, New Mexico.",
          }),
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        Corporate Events
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Corporate Event Planning, New Mexico
      </h1>

      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft">
        <p>
          Danielle has coordinated corporate events, community events, and
          VIP parties for 10+ years alongside her wedding work — bringing
          the same hands-on, detail-driven approach to a company
          celebration, client event, or executive gathering across
          Albuquerque, Santa Fe, and Taos.
        </p>

        <h2>What corporate event planning includes</h2>
        <p>
          Venue sourcing and contract negotiation, vendor management for
          catering and rentals, run-of-show and logistics coordination,
          guest experience and registration, and full on-site execution —
          so your team can attend the event instead of quietly running it
          from a side room.
        </p>

        <h2>Why hire a dedicated planner for a corporate event</h2>
        <p>
          Internal teams are good at running the business — not at chasing
          down vendor contracts, building a realistic event-day timeline,
          or troubleshooting a load-in problem an hour before guests
          arrive. A dedicated planner protects both your budget and your
          team&apos;s time, and brings existing local vendor relationships
          that would otherwise take months to build from scratch.
        </p>

        <h2>Where we plan corporate events</h2>
        <p>
          We plan corporate and company events across{" "}
          <Link href="/albuquerque-wedding-planner">Albuquerque</Link>,{" "}
          <Link href="/santa-fe-wedding-planner">Santa Fe</Link>, and{" "}
          <Link href="/taos-wedding-planner">Taos</Link>, from an intimate
          executive dinner to a full company celebration.
        </p>

        <h2>What&apos;s included</h2>
        <p>
          Corporate events vary too widely in scope and guest count for a
          generic starting price to mean much — every proposal is built
          around your specific event, budget, and timeline after a free
          consultation.
        </p>
      </div>

      <div className="mt-12 rounded-sm border border-border bg-accent-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">
          Planning a corporate event?
        </h2>
        <p className="mt-2 text-ink-soft">
          Tell us your event date, your city, and roughly how many guests
          you&apos;re expecting.
        </p>
        <div className="mt-6">
          <CTA size="lg" />
        </div>
      </div>
    </div>
  );
}
