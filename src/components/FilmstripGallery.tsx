import Image from "next/image";

const IMAGES = [
  { src: "/images/real-wedding-ambiance/ALP-10.jpg", alt: "Real wedding photo — bride getting ready" },
  { src: "/images/real-wedding-ambiance/ALP-344.jpg", alt: "Real wedding photo — first kiss under a wisteria-covered pergola" },
  { src: "/images/real-wedding-ambiance/Annette&MaxWedding2023-139.jpg", alt: "Real wedding photo — couple portrait" },
  { src: "/images/real-wedding-ambiance/Annette&MaxWedding2023-2085.jpg", alt: "Real wedding photo — reception details" },
  { src: "/images/real-wedding-ambiance/Annette&MaxWedding2023-4617.jpg", alt: "Real wedding photo — candid celebration moment" },
];

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
