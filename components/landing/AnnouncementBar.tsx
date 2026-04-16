import { Container } from "./Container";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-white/10 bg-gradient-to-l from-[#050a24]/95 via-[#070b28]/95 to-[#050a24]/95 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-brand-magenta/25 to-transparent" />
      <Container className="relative flex flex-col gap-2 py-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start">
        <p className="text-xs font-semibold leading-relaxed text-white/90 sm:text-sm">
          <span className="text-brand-cyan">عرض خاص لفترة محدودة</span>
          <span className="mx-2 text-white/35" aria-hidden="true">
            |
          </span>
          خصم يصل إلى <span className="font-semibold text-white">401 ريال</span>{" "}
          — المقاعد محدودة للحفاظ على جودة التوجيه
        </p>
        <p className="hidden text-xs text-white/60 sm:block sm:text-sm">
          جدة · حضوري · تطبيق عملي
        </p>
      </Container>
    </div>
  );
}
