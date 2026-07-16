import Image from "next/image";
import Link from "next/link";

export type EditorialRowProps = {
  eyebrow?: string;
  title: string;
  /** Word(s) within the title rendered in the italic serif accent treatment. */
  emphasis?: string;
  description: string;
  href: string;
  linkLabel?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

/**
 * A single alternating image/text row — the stacked, scroll-driven layout
 * used in place of a card grid for the services section (editorial rather
 * than a comparison-table feel).
 */
export function EditorialRow({
  eyebrow,
  title,
  emphasis,
  description,
  href,
  linkLabel = "Learn more",
  image,
  imageAlt,
  reverse = false,
}: EditorialRowProps) {
  const titleParts = emphasis ? title.split(emphasis) : [title];

  return (
    <div
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[6/5] w-full overflow-hidden rounded-sm">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
      </div>
      <div>
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
            {eyebrow}
          </p>
        )}
        <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">
          {emphasis ? (
            <>
              {titleParts[0]}
              <em className="text-accent-dark italic">{emphasis}</em>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{description}</p>
        <Link
          href={href}
          className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-accent-dark hover:text-ink"
        >
          {linkLabel} &rarr;
        </Link>
      </div>
    </div>
  );
}
