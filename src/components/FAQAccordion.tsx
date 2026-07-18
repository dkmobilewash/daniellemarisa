import Link from "next/link";

export type FAQItem = {
  question: string;
  answer: string;
  /** Optional links to more in-depth pages directly relevant to this answer. */
  links?: { text: string; href: string }[];
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="divide-y divide-border rounded-sm border border-border bg-paper">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl text-accent-dark transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
          {item.links && item.links.length > 0 && (
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {item.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-medium text-accent-dark underline underline-offset-4"
                >
                  {l.text} &rarr;
                </Link>
              ))}
            </p>
          )}
        </details>
      ))}
    </div>
  );
}
