import Link from "next/link";
import { services, type ServiceSlug } from "@/lib/services";

/** Cross-links to the other service pages in the cluster — excludes the current page. */
export function RelatedServices({ current }: { current: ServiceSlug }) {
  const others = services.filter((s) => s.slug !== current);

  return (
    <div className="mx-auto mt-14 max-w-3xl border-t border-border pt-10">
      <h2 className="font-serif text-xl text-ink">Other Ways We Can Help</h2>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {others.map((s) => (
          <li key={s.slug}>
            <Link
              href={s.path}
              className="text-sm font-medium text-accent-dark underline underline-offset-4"
            >
              {s.name} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
