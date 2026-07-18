import Link from "next/link";

const MARKETS = [
  {
    city: "Albuquerque",
    href: "/albuquerque-wedding-planner",
    body: "The state's largest market, with venues ranging from Old Town adobe courtyards to Sandia Mountain resort ballrooms. October and April book first for the light and mild heat; July and August mean building a real monsoon backup plan, not a laminated card.",
  },
  {
    city: "Santa Fe",
    href: "/santa-fe-wedding-planner",
    body: "New Mexico's most requested destination-wedding city — Territorial and Pueblo Revival architecture, gallery and courtyard venues, and a downtown Plaza with strict noise ordinances and permit rules. Historic properties book 12+ months out for shoulder-season weekends.",
  },
  {
    city: "Taos",
    href: "/taos-wedding-planner",
    body: "New Mexico's premier elopement and small-wedding destination at roughly 6,900 feet — Rio Grande Gorge overlooks and mountain settings. A smaller vendor pool than Albuquerque or Santa Fe rewards local relationships over a long vendor list.",
  },
];

/**
 * A condensed, homepage-level synthesis of the three markets — distinct
 * from the deep local-knowledge sections on each city page, but built from
 * the same real, specific facts (season timing, elevation, permit rules)
 * rather than generic marketing language.
 */
export function MarketsOverview() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
          Three Markets, Three Different Plans
        </p>
        <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
          Wedding Planning in Albuquerque, Santa Fe &amp; Taos
        </h2>
        <p className="mt-4 text-ink-soft">
          New Mexico&apos;s three biggest wedding markets sit less than 90
          minutes apart, but they don&apos;t plan the same. We&apos;ve
          planned weddings in all three for 10+ years, so wherever your date
          lands, the plan is built around the market it&apos;s actually in —
          not a one-size-fits-all checklist.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {MARKETS.map((m) => (
          <div key={m.city}>
            <h3 className="font-serif text-xl text-ink">{m.city}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {m.body}
            </p>
            <Link
              href={m.href}
              className="mt-4 inline-block text-sm font-medium text-accent-dark underline underline-offset-4"
            >
              Full {m.city} guide &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
