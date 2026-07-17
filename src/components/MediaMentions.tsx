const MENTIONS = [
  {
    outlet: "New Mexico Bride",
    headline: "Everything to Know About Choosing a Wedding Venue",
  },
  {
    outlet: "Duke City Weddings",
    headline: "Local Planner Shares the Best-Kept Venues in New Mexico",
  },
  {
    outlet: "Southwest I Do",
    headline: "A Destination Wedding Planner's Guide to the High Desert",
  },
];

/**
 * "As featured in," expressed as headline-style media mentions rather than
 * a bare logo row — placeholder content, clearly marked as swap-out.
 */
export function MediaMentions() {
  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
          In the Media <span className="normal-case tracking-normal">(placeholder — swap for real coverage)</span>
        </p>
        <div className="mt-6 divide-y divide-border">
          {MENTIONS.map((m) => (
            <div key={m.headline} className="flex items-center justify-between gap-4 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-dark">
                  {m.outlet}
                </p>
                <p className="mt-1 font-serif text-lg text-ink">{m.headline}</p>
              </div>
              <span className="shrink-0 text-xs font-medium uppercase tracking-[0.1em] text-ink-soft">
                Read Article
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
