import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wedding Venue Guides | Danielle Marisa",
  description:
    "Real, planner-written guides to New Mexico wedding venues — capacity, logistics, and the best photo spots at each property.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
          Venue Guides
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink">
          New Mexico Wedding Venue Guides
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Planner-written guides to the venues we&apos;d actually recommend
          — real capacity numbers, logistics, and the photo spots worth
          building your timeline around. Start with{" "}
          <Link href="/albuquerque-wedding-planner" className="text-accent-dark underline underline-offset-4">
            our {siteConfig.primaryCity} planning guide
          </Link>{" "}
          if you&apos;re just getting started.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-sm border border-border bg-paper"
          >
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-medium uppercase tracking-wide text-accent-dark">
                {post.category} &middot; {post.city}
              </span>
              <h2 className="mt-2 font-serif text-xl text-ink">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">
                {post.metaDescription}
              </p>
              <span className="mt-4 text-sm font-medium text-accent-dark group-hover:underline">
                Read the guide &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
