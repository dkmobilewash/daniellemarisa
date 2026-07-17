import { venues } from "./venues-data";

export type VenueContent = {
  slug: string;
  name: string;
  city: "Albuquerque" | "Santa Fe" | "Taos";
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  metaDescription: string;
  quickFacts: { label: string; value: string }[];
  whatMakesItSpecial: string[];
  theExperience: { heading: string; paragraphs: string[] };
  theArea: { heading: string; paragraphs: string[] };
  capacityLogistics: string[];
  photoSpots: string[];
  /** Slug of the companion blog article at /blog/[blogSlug]. */
  blogSlug: string;
};

export { venues };

export function getAllVenues(): VenueContent[] {
  return venues;
}

export function getVenuesByCity(city: string): VenueContent[] {
  return venues.filter((v) => v.city === city);
}

export function getVenueBySlug(slug: string): VenueContent | undefined {
  return venues.find((v) => v.slug === slug);
}

/** One representative venue per city — used for cross-market showcases like the homepage gallery. */
export function getFeaturedVenuesAcrossCities(): VenueContent[] {
  const seen = new Set<string>();
  const featured: VenueContent[] = [];
  for (const venue of venues) {
    if (!seen.has(venue.city)) {
      seen.add(venue.city);
      featured.push(venue);
    }
  }
  return featured;
}
