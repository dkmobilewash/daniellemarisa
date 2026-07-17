import Image from "next/image";

const IMAGES = [1, 2, 3, 4, 5].map((n) => ({
  src: `/images/filmstrip-${n}.svg`,
  alt: `Placeholder real-wedding photo ${n} — swap for real client photography`,
}));

/**
 * A quiet five-across photo band directly beneath the hero — a visual
 * breath between the hero and the first content section, in place of
 * jumping straight into copy.
 */
export function FilmstripGallery() {
  return (
    <div className="grid grid-cols-5">
      {IMAGES.map((img) => (
        <div key={img.src} className="relative aspect-[3/4]">
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
