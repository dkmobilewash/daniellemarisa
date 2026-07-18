import { processSteps } from "@/lib/process";

/**
 * The 8-step client journey, shown as numbered accordions so a couple can
 * see the shape of the whole process at a glance and expand any step for
 * detail — matching the FAQAccordion interaction pattern site-wide.
 */
export function OurProcess() {
  return (
    <section className="border-y border-border bg-accent-light/40">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
            How We Work Together
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Eight steps from your first inquiry to your last dance — here&apos;s
            exactly what working together looks like.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border rounded-sm border border-border bg-paper">
          {processSteps.map((step, i) => (
            <details key={step.title} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-center gap-4 marker:content-none">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-dark font-serif text-sm text-accent-dark">
                  {i + 1}
                </span>
                <span className="flex-1 font-serif text-lg text-ink sm:text-xl">
                  {step.title}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-accent-dark transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pl-12 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
