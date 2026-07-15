import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type CTAProps = {
  href?: string;
  children?: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

/**
 * The single, site-wide call-to-action button. Always renders the same
 * verb ("Inquire") unless explicit children are passed for phrasing like
 * "Inquire About Your Date" — never swap in "Contact" or "Book Now".
 */
export function CTA({
  href = "/contact",
  children,
  variant = "solid",
  size = "md",
  className = "",
}: CTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm font-sans font-medium tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2";
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    solid: "bg-ink text-cream hover:bg-olive-dark",
    outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
    ghost: "text-olive-dark underline underline-offset-4 hover:text-ink",
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
