import Image from "next/image";
import Link from "next/link";
import { getPostsByCity } from "@/lib/blog";

/**
 * All venue guides for a given city, shown as a proper "featured venues"
 * grid rather than a couple of hardcoded text links — pulls straight from
 * the blog content so a new venue guide automatically shows up here.
 */
export function FeaturedVenues({ city }: { city: string }) {
  const posts = getPostsByCity(city);

  if (posts.length === 0) return null;

  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl text-ink sm:text-3xl">
          Featured {city} Venues
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-soft">
          Real venues we&apos;ve planned at (or know well) around {city} —
          each guide covers capacity, logistics, and the best photo spots.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-paper hover:border-accent"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={post.heroImage}
                  alt={post.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-serif text-lg text-ink">{post.venue_name}</p>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent-dark">
                  View Guide
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
