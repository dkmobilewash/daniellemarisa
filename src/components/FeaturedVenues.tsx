import Image from "next/image";
import Link from "next/link";
import { getVenuesByCity } from "@/lib/venues";

/**
 * All venue landers for a given city, shown as a proper "featured venues"
 * grid — pulls straight from the venues data so a newly added venue shows
 * up here automatically. Links to each venue's own lander page, not the
 * companion blog article.
 */
export function FeaturedVenues({ city }: { city: string }) {
  const venues = getVenuesByCity(city);

  if (venues.length === 0) return null;

  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
          Featured {city} Venues
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-soft">
          Real venues we&apos;ve planned at (or know well) around {city} —
          each page covers capacity, the experience, and the area around it.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue) => (
            <Link
              key={venue.slug}
              href={`/${venue.slug}`}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-paper hover:border-accent"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={venue.heroImage}
                  alt={venue.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-serif text-lg text-ink">{venue.name}</p>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent-dark">
                  View Venue
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/venues"
            className="text-sm font-medium text-accent-dark underline underline-offset-4"
          >
            See all featured venues &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
