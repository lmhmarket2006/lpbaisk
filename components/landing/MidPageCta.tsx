import { whatsappLink, WA_MESSAGES } from "@/lib/constants";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";

export function MidPageCta() {
  return (
    <section className="py-6 sm:py-8" aria-label="دعوة للحجز">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-sm font-semibold text-white">
              جاهز تثبت المهارة عمليًا؟
            </p>
            <p className="mt-1 text-sm text-white/65">
              احجز مقعدك الآن عبر واتساب — رد سريع وتأكيد واضح.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <CtaButton
              href={whatsappLink(WA_MESSAGES.book)}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full sm:w-auto"
              aria-label="احجز مكانك عبر واتساب"
            >
              احجز مكانك الآن
            </CtaButton>
            <CtaButton
              href={whatsappLink(WA_MESSAGES.chat)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full sm:w-auto"
              aria-label="تواصل عبر واتساب"
            >
              تواصل واتساب
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
