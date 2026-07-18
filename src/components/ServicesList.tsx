import Link from "next/link";

const SERVICES = [
  { label: "Full-Service Planning", href: "/full-service-wedding-planning", italic: false },
  { label: "Day-of Coordination", href: "/wedding-day-coordination", italic: true },
  { label: "Destination Weddings", href: "/destination-wedding-planner-new-mexico", italic: false },
  { label: "Elopements & Micro Weddings", href: "/elopement-planner-new-mexico", italic: true },
];

/**
 * A quiet, typographic services list — deliberately not a card grid or
 * feature-comparison table, matching the minimal "Planning / Design /
 * Florals / Production" pattern from the reference sites. Each service
 * links to its own dedicated page (hub-and-spoke), not a shared anchor.
 */
export function ServicesList() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <ul className="space-y-1">
        {SERVICES.map((s) => (
          <li key={s.label}>
            <Link
              href={s.href}
              className={`font-serif text-3xl leading-tight text-ink underline decoration-transparent transition-colors hover:decoration-accent-dark hover:text-accent-dark sm:text-4xl ${
                s.italic ? "italic text-accent-dark hover:text-ink" : ""
              }`}
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
