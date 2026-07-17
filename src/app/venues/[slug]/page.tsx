import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllVenues, getVenueBySlug } from "@/lib/venues";
import { VenueLandingPage } from "@/components/VenueLandingPage";

export function generateStaticParams() {
  return getAllVenues().map((venue) => ({ slug: venue.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);
  if (!venue) return {};

  const shortName = venue.name.split(",")[0].trim();

  return {
    title: `${shortName} | Danielle Marisa`,
    description: venue.metaDescription,
    alternates: { canonical: `/venues/${slug}` },
    openGraph: {
      type: "website",
      images: [{ url: venue.heroImage }],
    },
  };
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);
  if (!venue) notFound();

  return <VenueLandingPage venue={venue} />;
}
