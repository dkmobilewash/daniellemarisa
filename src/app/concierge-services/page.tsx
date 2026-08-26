import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { RelatedServices } from "@/components/RelatedServices";
import { StructuredData } from "@/components/StructuredData";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Wedding Concierge Services | Danielle Marisa",
  description:
    "Concierge add-ons for New Mexico wedding weekends — lodging, transportation, bar service, and extra design details coordinated alongside your planning package.",
  alternates: { canonical: "/concierge-services" },
};

const CATEGORIES = [
  {
    name: "Hotel & Lodging Coordination",
    body: "Room block negotiation and booking for out-of-town guests, plus recommendations matched to your wedding weekend's style and budget.",
  },
  {
    name: "Transportation & Car Service",
    body: "Shuttles between hotels and your venue, a getaway car for the two of you, and guest transportation logistics for multi-location wedding weekends.",
  },
  {
    name: "Guest Travel Logistics",
    body: "Welcome bags, travel itineraries, and coordination for guests flying in from out of state — especially important at altitude and in smaller markets like Taos.",
  },
  {
    name: "Bartending & Bar Service",
    body: "Sourcing and booking a bar service or mobile bartending team suited to your venue's rules and your guest count.",
  },
  {
    name: "Florals & Design Extras",
    body: "Beyond ceremony and reception florals — welcome bouquets, hotel room arrangements, and other design touches for a multi-day wedding weekend.",
  },
  {
    name: "Rentals & Additional Details",
    body: "Specialty lighting, furniture, and other rental extras sourced and coordinated alongside your core vendor team.",
  },
];

export default function ConciergeServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <StructuredData
        data={[
          localBusinessSchema(),
          serviceSchema({
            city: "New Mexico",
            serviceName: "Wedding Concierge Services",
            description:
              "Concierge add-on services — lodging, transportation, bar service, and design extras — for wedding weekends in Albuquerque, Santa Fe, and Taos, New Mexico.",
          }),
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
        Concierge Services
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Wedding Concierge Services
      </h1>

      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft">
        <p>
          Full-service planning doesn&apos;t have to stop at the ceremony
          and reception. As an add-on to any planning or coordination
          package, we handle the extra details that turn a wedding day into
          a genuinely effortless wedding weekend — for you and for the
          guests who traveled to be there.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {CATEGORIES.map((c) => (
          <div key={c.name} className="rounded-sm border border-border bg-paper p-5">
            <h2 className="font-serif text-lg text-ink">{c.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft">
        <h2>How it works</h2>
        <p>
          Concierge services are quoted individually alongside your planning
          or coordination package, based on your guest count, the number of
          events in your wedding weekend, and which categories above you
          actually need — we don&apos;t bundle in extras you won&apos;t use.
        </p>
      </div>

      <div className="mt-12 rounded-sm border border-border bg-accent-light/40 p-6 text-center">
        <h2 className="font-serif text-2xl text-ink">
          Want to add concierge services to your wedding?
        </h2>
        <p className="mt-2 text-ink-soft">
          Tell us what you&apos;re already planning and what extra support
          would help most.
        </p>
        <div className="mt-6">
          <CTA size="lg" />
        </div>
      </div>

      <RelatedServices current="concierge-services" />
    </div>
  );
}
