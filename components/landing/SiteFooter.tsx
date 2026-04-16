import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-white">بيت المصور</p>
          <p className="mt-1 font-en text-sm text-white/60">
            BAYT ALMOSWER ACADEMY
          </p>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-white/60">
          أكاديمية متخصصة في تعليم التصوير الفوتوغرافي — جدة، حضوري، بمعايير
          تدريب راقية.
        </p>
      </Container>
    </footer>
  );
}
