"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/lib/blog";

export function BlogGrid({ posts }: { posts: PostSummary[] }) {
  const cities = Array.from(new Set(posts.map((p) => p.city)));
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const filtered = activeCity ? posts.filter((p) => p.city === activeCity) : posts;

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
        {filtered.map((post) => (
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
              <p className="mt-2 flex-1 text-sm text-ink-soft">{post.metaDescription}</p>
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
