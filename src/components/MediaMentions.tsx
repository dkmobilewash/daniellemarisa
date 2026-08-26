const OUTLETS = ["Brides", "Rocky Mountain Bride", "Something Blue Weddings", "Wedding Collective"];

/**
 * "As featured in" — outlets Danielle has actually been featured on.
 */
export function MediaMentions() {
  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
          As Featured In
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {OUTLETS.map((outlet) => (
            <span key={outlet} className="font-serif text-xl italic text-ink">
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
