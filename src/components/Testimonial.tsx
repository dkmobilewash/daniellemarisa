import Image from "next/image";

type TestimonialProps = {
  quote: string;
  name: string;
  detail: string;
  /** Optional real-wedding photo paired with the quote, per the "testimonials next to real photography" pattern. */
  image?: { src: string; alt: string };
};

export function Testimonial({ quote, name, detail, image }: TestimonialProps) {
  if (image) {
    return (
      <figure className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-paper">
        <div className="relative aspect-[4/3] w-full">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <blockquote className="font-serif text-lg leading-relaxed text-ink">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-ink-soft">
            <span className="font-semibold text-ink">{name}</span>
            <br />
            {detail}
          </figcaption>
        </div>
      </figure>
    );
  }

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
