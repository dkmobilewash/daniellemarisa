import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Testimonial } from "@/components/Testimonial";
import { RelatedServices } from "@/components/RelatedServices";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Elopement Planner New Mexico | Danielle Marisa",
  description:
    "Elopement and micro wedding planning across New Mexico — permits, mountain and desert logistics, and day-of coordination for intimate ceremonies.",
  alternates: { canonical: "/elopement-planner-new-mexico" },
};

export default function ElopementPlannerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData
        data={[
          localBusinessSchema(),
          serviceSchema({
            city: "New Mexico",
            serviceName: "Elopement & Micro Wedding Planning",
            description:
              "Elopement and micro wedding planning for intimate ceremonies across Albuquerque, Santa Fe, and Taos, New Mexico.",
          }),
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        Elopements &amp; Micro Weddings
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Elopement Planner, New Mexico
      </h1>

      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft">
        <p>
          New Mexico&apos;s high desert, mountains, and mesas make it one of
          the most sought-after elopement landscapes in the country — and
          also one of the trickiest to plan without local knowledge.
          Danielle Marisa Weddings and Events plans intimate ceremonies and
          micro weddings across the state with the same level of care as a
          full-scale wedding, just scaled to the day you actually want.
        </p>

        <h2>Small doesn&apos;t mean simple</h2>
        <p>
          A 20-guest ceremony at a mountain overlook or gorge rim often
          involves more logistics per guest than a hotel ballroom wedding
          does: land-use permits, weather contingency plans at altitude,
          officiants and vendors willing to travel to a remote site, and a
          realistic plan for where guests park and how they get there. We
          handle all of it so your elopement feels unhurried and personal —
          not like a day you&apos;re quietly managing yourself between photos.
        </p>

        <h2>Where we plan elopements</h2>
        <p>
          Popular settings include mountain overlooks and the bosque along
          the Rio Grande near{" "}
          <Link href="/albuquerque-wedding-planner">Albuquerque</Link>,
          historic adobe courtyards and high-desert sites around{" "}
          <Link href="/santa-fe-wedding-planner">Santa Fe</Link>, and
          gorge-rim and mountain settings above{" "}
          <Link href="/taos-wedding-planner">Taos</Link> — widely
          considered New Mexico&apos;s premier elopement destination. We
          also plan micro weddings of up to 40 guests for couples who want
          something between a courthouse elopement and a full wedding.
        </p>

        <h2>What&apos;s included</h2>
        <p>
          Our elopement and micro wedding packages include location
          scouting and permit logistics, officiant and vendor referrals,
          weather contingency planning, and day-of coordination so someone
          other than you is checking the forecast and confirming vendor
          arrivals. Packages are priced individually depending on location
          and guest count, with full pricing confirmed after a free
          consultation.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Testimonial
          quote="Danielle has been our event planner for all our events. I will not use or recommend anyone else."
          name="Elisharose Trujillo"
          detail="Google review"
        />
        <Testimonial
          quote="What a wonderful wedding. Beautiful flow and a wonderful overall party."
          name="Jason Kroese"
          detail="Google review"
        />
      </div>

      <div className="mt-12 rounded-sm border border-border bg-accent-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">
          Planning an elopement in New Mexico?
        </h2>
        <p className="mt-2 text-ink-soft">
          Tell us your guest count, your ideal setting, and your timeframe.
        </p>
        <div className="mt-6">
          <CTA size="lg" />
        </div>
      </div>

      <RelatedServices current="elopement-planner-new-mexico" />
    </div>
  );
}
