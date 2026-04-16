import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "default" | "prominent";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  default:
    "min-h-12 rounded-xl px-5 py-2.5 text-sm sm:min-h-[3.125rem] sm:text-base",
  prominent:
    "min-h-14 rounded-2xl px-6 py-3.5 text-base font-extrabold leading-snug shadow-lg sm:min-h-[3.5rem] sm:px-7 sm:text-lg",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-l from-brand-red via-[#c91826] to-[#8f1019] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_1px_0_rgba(255,255,255,0.18)_inset,0_26px_70px_-22px_rgba(190,22,34,0.85)] hover:brightness-[1.08] active:brightness-[0.98]",
  secondary:
    "border border-brand-cyan/30 bg-gradient-to-br from-brand-indigo/35 via-white/[0.07] to-brand-purple/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_50px_-28px_rgba(19,25,180,0.55)] backdrop-blur-md hover:border-brand-cyan/45 hover:from-brand-indigo/45 hover:to-brand-purple/35",
  ghost:
    "border border-transparent text-white/92 hover:border-white/10 hover:bg-white/[0.04] hover:text-white",
};

type Props = ComponentProps<"a"> & {
  variant?: Variant;
  size?: Size;
};

export function CtaButton({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <a
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
