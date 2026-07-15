import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-border bg-paper shadow-[0_-2px_10px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-border py-3 text-sm font-medium text-ink"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.8c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
        Call
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-ink py-3 text-sm font-semibold text-cream"
      >
        {siteConfig.ctaLabel}
      </Link>
    </div>
  );
}
