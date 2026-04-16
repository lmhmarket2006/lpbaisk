import { Container } from "./Container";

export function BrandHeader() {
  return (
    <header className="relative z-40 border-b border-white/10 bg-[#030818]/55 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4 sm:py-5">
        <div className="min-w-0">
          <p className="truncate text-lg font-extrabold tracking-tight text-white sm:text-xl">
            بيت المصور
          </p>
          <p className="font-en mt-0.5 text-xs font-light tracking-[0.18em] text-white/55 sm:text-sm">
            BAYT ALMOSWER ACADEMY
          </p>
        </div>
        <a
          href="#pricing"
          className="hidden rounded-full border border-brand-cyan/25 bg-gradient-to-br from-brand-indigo/25 to-white/[0.04] px-4 py-2 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition hover:border-brand-cyan/40 sm:inline-flex"
        >
          التفاصيل والسعر
        </a>
      </Container>
    </header>
  );
}
