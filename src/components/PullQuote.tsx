/**
 * A single, large pull-quote testimonial on a tinted background — used in
 * place of a 3-card testimonial grid for a calmer, more editorial feel.
 */
export function PullQuote({
  quote,
  name,
  detail,
}: {
  quote: string;
  name: string;
  detail: string;
}) {
  return (
    <div className="bg-accent-light/50">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span aria-hidden="true" className="font-serif text-5xl text-accent-dark">
          &ldquo;
        </span>
        <blockquote className="font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">
          {quote}
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-[0.15em] text-ink-soft">
          {name} &middot; {detail}
        </p>
      </div>
    </div>
  );
}
