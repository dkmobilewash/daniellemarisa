"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { VenueContent } from "@/lib/venues";

export function VenueGrid({ venues }: { venues: VenueContent[] }) {
  const cities = Array.from(new Set(venues.map((v) => v.city)));
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const filtered = activeCity ? venues.filter((v) => v.city === activeCity) : venues;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCity(null)}
          aria-pressed={activeCity === null}
          className={`rounded-sm border px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] ${
            activeCity === null
              ? "border-ink bg-ink text-cream"
              : "border-border text-ink hover:border-accent"
          }`}
        >
          All
        </button>
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => setActiveCity(city)}
            aria-pressed={activeCity === city}
            className={`rounded-sm border px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] ${
              activeCity === city
                ? "border-ink bg-ink text-cream"
                : "border-border text-ink hover:border-accent"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((venue) => (
          <Link
            key={venue.slug}
            href={`/${venue.slug}`}
            className="group flex flex-col overflow-hidden rounded-sm border border-border bg-paper"
          >
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={venue.heroImage}
                alt={venue.heroImageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-medium uppercase tracking-wide text-accent-dark">
                {venue.city}
              </span>
              <h2 className="mt-2 font-serif text-xl text-ink">{venue.name}</h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{venue.tagline}</p>
              <span className="mt-4 text-sm font-medium text-accent-dark group-hover:underline">
                View Venue &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
