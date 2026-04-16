import { Container } from "./Container";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-white/10 bg-[#040a22]/90 backdrop-blur-md">
      <Container className="flex flex-col gap-2 py-2.5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start">
        <p className="text-xs font-medium text-white/90 sm:text-sm">
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
