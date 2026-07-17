import { CTA } from "@/components/CTA";

const SERVICES = [
  { label: "Full-Service Planning", italic: false },
  { label: "Day-of Coordination", italic: true },
  { label: "Destination Weddings", italic: false },
  { label: "Elopements & Micro Weddings", italic: true },
];

/**
 * A quiet, typographic services list — deliberately not a card grid or
 * feature-comparison table, matching the minimal "Planning / Design /
 * Florals / Production" pattern from the reference sites.
 */
export function ServicesList() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <ul className="space-y-1">
        {SERVICES.map((s) => (
          <li
            key={s.label}
            className={`font-serif text-3xl leading-tight text-ink sm:text-4xl ${
              s.italic ? "italic text-accent-dark" : ""
            }`}
          >
            {s.label}
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <CTA href="/albuquerque-wedding-planner#services">Explore Our Services</CTA>
      </div>
    </section>
  );
}
