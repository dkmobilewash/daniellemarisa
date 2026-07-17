import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogGrid } from "@/components/BlogGrid";
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

      <div className="mt-12">
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
