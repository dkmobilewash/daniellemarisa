const PRESS_NAMES = ["Brides", "Rocky Mountain Bride", "Something Blue Weddings", "Wedding Collective"];

/**
 * Credibility strip — kept high on the page (right under the hero) rather
 * than buried in the footer, matching how the reference sites treat press
 * mentions as a primary trust signal, not an afterthought.
 */
export function PressStrip({
  label = "As featured in",
}: {
  label?: string;
}) {
  return (
    <div className="border-y border-border bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
          {label}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-ink-soft/60">
          {PRESS_NAMES.map((name) => (
            <span key={name} className="font-serif text-lg italic">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
