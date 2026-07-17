import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { CTA } from "@/components/CTA";

/**
 * Staggered gallery of real venue guides — mirrors the "real weddings"
 * gallery pattern from the reference sites, using our actual venue-guide
 * content instead of a generic portfolio grid.
 */
export function RealWeddingsGallery() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
          Real Weddings &amp; Venues
        </p>
        <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
          The Venue Guides
        </h2>
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group mb-6 block break-inside-avoid ${i % 3 === 1 ? "sm:mt-12" : ""}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 font-serif italic text-lg text-ink">{post.title}</p>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent-dark">
              View Guide
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-4 text-center">
        <CTA href="/blog">More Guides</CTA>
      </div>
    </section>
  );
}
