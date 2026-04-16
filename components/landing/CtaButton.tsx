import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:text-base";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-l from-brand-red to-[#d42835] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] shadow-[0_20px_50px_-18px_rgba(190,22,34,0.75)] hover:brightness-110 focus-visible:outline-brand-cyan",
  secondary:
    "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 focus-visible:outline-brand-cyan",
  ghost: "text-white/90 hover:text-white focus-visible:outline-brand-cyan",
};

type Props = ComponentProps<"a"> & {
  variant?: Variant;
};

export function CtaButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
