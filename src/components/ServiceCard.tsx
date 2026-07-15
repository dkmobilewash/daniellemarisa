import Link from "next/link";

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-sm border border-border bg-paper p-6 transition-colors hover:border-olive"
    >
      <h3 className="font-serif text-xl text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className="mt-4 text-sm font-medium text-olive-dark group-hover:underline">
        Learn more &rarr;
      </span>
    </Link>
  );
}
