import { siteConfig } from "@/lib/site-config";
import { googleReviews } from "@/lib/reviews";

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
    </svg>
  );
}

/**
 * Real Google review social proof, placed high on the homepage rather than
 * buried in a footer — a 5-star rating badge plus a few verbatim excerpts.
 */
export function GoogleReviews() {
  const searchHref = `https://www.google.com/search?q=${encodeURIComponent(
    `${siteConfig.businessName} reviews`
  )}`;

  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex gap-1 text-accent-dark">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="text-sm font-medium text-ink">
            5.0 out of 5 &mdash; 16 Google reviews
          </p>
          <a
            href={searchHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-[0.15em] text-accent-dark underline underline-offset-4 hover:text-ink"
          >
            Read our reviews on Google
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {googleReviews.map((r) => (
            <figure key={r.name} className="rounded-sm border border-border bg-cream p-6">
              <blockquote className="text-sm leading-relaxed text-ink-soft">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                {r.name}
                <span className="block font-normal normal-case tracking-normal text-ink-soft">
                  {r.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
