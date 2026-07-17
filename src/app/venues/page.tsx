import type { Metadata } from "next";
import { getAllVenues } from "@/lib/venues";
import { VenueGrid } from "@/components/VenueGrid";

export const metadata: Metadata = {
  title: "Featured Wedding Venues | Danielle Marisa",
  description:
    "Real New Mexico wedding venues we've planned at or know well — Albuquerque, Santa Fe, and Taos. Capacity, setting, and what makes each one special.",
  alternates: { canonical: "/venues" },
};

export default function VenuesIndexPage() {
  const venues = getAllVenues();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
          Featured Venues
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink">
          New Mexico Wedding Venues
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Real venues we&apos;ve planned at or know well across Albuquerque,
          Santa Fe, and Taos — capacity, setting, and what makes each one
          worth considering.
        </p>
      </div>

      <div className="mt-12">
        <VenueGrid venues={venues} />
      </div>
    </div>
  );
}
