import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Testimonial } from "@/components/Testimonial";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Destination Wedding Planner NM | Danielle Marisa",
  description:
    "Full-service destination wedding planning in Albuquerque, Santa Fe, and Taos, NM — venue sourcing, guest logistics, and local vendor expertise.",
  alternates: { canonical: "/destination-wedding-planner-new-mexico" },
};

export default function DestinationWeddingPlannerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData
        data={[
          localBusinessSchema(),
          serviceSchema({
            city: "New Mexico",
            serviceName: "Destination Wedding Planning",
            description:
              "Full-service destination wedding planning for couples marrying in Albuquerque, Santa Fe, or Taos, New Mexico.",
          }),
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive-dark">
        Destination Weddings
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Destination Wedding Planner, New Mexico
      </h1>

      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft">
        <p>
          New Mexico is one of the Southwest&apos;s most requested
          destination wedding states — adobe architecture, high-desert
          light, mountain backdrops, and a food and art culture guests
          remember long after the wedding. If you or your partner live
          elsewhere and you&apos;ve chosen Albuquerque, Santa Fe, or Taos as
          the place to get married, Danielle Marisa Weddings and Events
          plans the entire trip, not just the ceremony.
        </p>

        <h2>What makes destination planning different</h2>
        <p>
          A destination wedding isn&apos;t a bigger version of a local
          wedding — it&apos;s a different planning problem entirely. You&apos;re
          coordinating a venue you may have only visited once or twice,
          vendors you can&apos;t easily meet in person, and a guest list
          that&apos;s flying or driving in from out of state, often for an
          entire weekend rather than a single afternoon. We act as your
          local, on-the-ground team: scouting venues on your behalf,
          vetting vendors before you ever get on a call with them, and
          managing the guest-facing logistics — room blocks, shuttles,
          welcome events — that turn a wedding day into a wedding weekend
          guests actually enjoy.
        </p>

        <h2>Where we plan destination weddings in New Mexico</h2>
        <p>
          Most of our destination couples land in one of three places, each
          with a different feel:{" "}
          <Link href="/albuquerque-wedding-planner">Albuquerque</Link>, for
          a city backdrop with the Sandia Mountains and easy airport
          access; <Link href="/santa-fe-wedding-planner">Santa Fe</Link>,
          for historic adobe properties, art galleries, and a more upscale,
          multi-day wedding weekend; and{" "}
          <Link href="/taos-wedding-planner">Taos</Link>, for mountain and
          gorge-rim settings suited to smaller, more intimate destination
          weddings. We&apos;ll help you decide which fits your vision,
          guest count, and budget before you commit to a venue deposit.
        </p>

        <h2>What&apos;s included</h2>
        <p>
          Destination full planning includes venue and vendor sourcing,
          guest travel and room block coordination, welcome event and
          rehearsal dinner planning, full design and budget management, and
          an on-site coordination team for your wedding weekend. Every
          engagement starts with a free consultation so we can scope your
          specific weekend — number of events, guest count, and how much
          planning you&apos;ve already done — before quoting a package.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Testimonial
          quote="We planned our wedding from Chicago and never once felt like we were flying blind."
          name="Priya & Sam"
          detail="Destination wedding, Santa Fe"
        />
        <Testimonial
          quote="Danielle scouted three venues for us over video call before we ever booked a flight to New Mexico."
          name="Renee & Marcus"
          detail="Destination wedding, Albuquerque"
        />
      </div>

      <div className="mt-12 rounded-sm border border-border bg-olive-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">
          Planning a New Mexico destination wedding?
        </h2>
        <p className="mt-2 text-ink-soft">
          Tell us your city, your date, and how many guests are traveling
          in.
        </p>
        <div className="mt-6">
          <CTA size="lg" />
        </div>
      </div>
    </div>
  );
}
