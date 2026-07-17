/**
 * A small hand-drawn-style decorative line flourish — a quiet editorial
 * touch used sparingly (e.g. next to the founder teaser), not a UI element.
 */
export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 60"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 40 C 30 10, 55 10, 70 30 C 85 50, 105 50, 115 30 C 122 17, 135 12, 148 20 C 155 24, 158 32, 152 38 C 146 44, 135 42, 132 34 C 129 26, 136 18, 148 20"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
