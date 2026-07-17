import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type CTAProps = {
  href?: string;
  children?: React.ReactNode;
  variant?: "outline" | "outline-light" | "solid" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

/**
 * The single, site-wide call-to-action button. Always renders the same
 * verb ("Inquire") unless explicit children are passed for phrasing like
 * "Inquire About Your Date" — never swap in "Contact" or "Book Now".
 *
 * Default is a thin outline, not a solid fill — matches the restrained,
 * editorial button treatment used across the brand's reference sites.
 */
export function CTA({
  href = "/contact",
  children,
  variant = "outline",
  size = "md",
  className = "",
}: CTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-none font-sans font-medium uppercase tracking-[0.15em] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";
  const sizes = {
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-3.5 text-xs",
  };
  const variants = {
    outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
    "outline-light": "border border-cream text-cream hover:bg-cream hover:text-ink",
    solid: "bg-ink text-cream hover:bg-accent-dark",
    ghost: "text-accent-dark underline underline-offset-4 normal-case tracking-normal font-medium hover:text-ink",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children ?? siteConfig.ctaLabel}
    </Link>
  );
}
