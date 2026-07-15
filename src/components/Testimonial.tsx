export function Testimonial({
  quote,
  name,
  detail,
}: {
  quote: string;
  name: string;
  detail: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-sm border border-border bg-paper p-6">
      <blockquote className="font-serif text-lg leading-relaxed text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-sm text-ink-soft">
        <span className="font-semibold text-ink">{name}</span>
        <br />
        {detail}
      </figcaption>
    </figure>
  );
}
