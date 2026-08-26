import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Private Event Planner New Mexico | Danielle Marisa",
  description:
    "Private and at-home event planning in Albuquerque, Santa Fe, and Taos, NM — anniversary parties, milestone celebrations, and intimate residential gatherings.",
  alternates: { canonical: "/private-event-planner-new-mexico" },
};

export default function PrivateEventPlannerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData
        data={[
          localBusinessSchema(),
          serviceSchema({
            city: "New Mexico",
            serviceName: "Private Event Planning",
            description:
              "Private, at-home, and milestone celebration planning for hosts in Albuquerque, Santa Fe, and Taos, New Mexico.",
          }),
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        Private &amp; At-Home Events
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Private Event Planning, New Mexico
      </h1>

      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft">
        <p>
          Not every celebration is a wedding. Danielle has planned and
          coordinated private, at-home, and milestone events for 10+ years
          alongside her wedding work — anniversary parties, engagement
          celebrations, milestone birthdays, and intimate gatherings hosted
          at a private residence rather than a commercial venue.
        </p>

        <h2>What private event planning includes</h2>
        <p>
          The same care that goes into a wedding goes into a private
          event: vendor sourcing for catering, rentals, bartending, and
          florals; a full event design and layout suited to your space;
          budget and vendor contract management; and complete day-of
          execution so you&apos;re a guest at your own event, not the
          person running it.
        </p>

        <h2>Why private, at-home events need different planning</h2>
        <p>
          A private residence doesn&apos;t come with an in-house events
          team, a loading dock, or a banquet kitchen — every piece of
          infrastructure a commercial venue provides has to be planned in
          from scratch. That means tenting and power for a backyard
          reception, parking and neighbor logistics, HOA or noise-ordinance
          rules, and a rain or heat contingency plan built around your
          specific property, not a generic checklist.
        </p>

        <h2>Where we plan private events</h2>
        <p>
          We plan private and at-home events across{" "}
          <Link href="/albuquerque-wedding-planner">Albuquerque</Link>,{" "}
          <Link href="/santa-fe-wedding-planner">Santa Fe</Link>, and{" "}
          <Link href="/taos-wedding-planner">Taos</Link>, as well as
          surrounding communities including Rio Rancho, Corrales, and
          Placitas.
        </p>

        <h2>What&apos;s included</h2>
        <p>
          Because private events vary widely in scope — guest count, number
          of vendors, and how much of the property needs to be built out —
          every private event is quoted individually after a free
          consultation, rather than priced against a generic package.
        </p>
      </div>

      <div className="mt-12 rounded-sm border border-border bg-accent-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">
          Planning a private or at-home event?
        </h2>
        <p className="mt-2 text-ink-soft">
          Tell us your date, your city, and what kind of celebration you
          have in mind.
        </p>
        <div className="mt-6">
          <CTA size="lg" />
        </div>
      </div>
    </div>
  );
}
