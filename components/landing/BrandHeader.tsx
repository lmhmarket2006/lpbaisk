import { Container } from "./Container";

export function BrandHeader() {
  return (
    <header className="relative z-40 border-b border-white/10 bg-brand-navy/40 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <div className="min-w-0">
          <p className="truncate text-lg font-bold tracking-tight text-white sm:text-xl">
            بيت المصور
          </p>
          <p className="font-en mt-0.5 text-xs font-light tracking-[0.18em] text-white/55 sm:text-sm">
            BAYT ALMOSWER ACADEMY
          </p>
        </div>
        <a
          href="#pricing"
          className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/[0.07] sm:inline-flex"
        >
          التفاصيل والسعر
        </a>
      </Container>
    </header>
  );
}
