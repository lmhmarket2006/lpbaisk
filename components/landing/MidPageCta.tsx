import { whatsappLink, WA_MESSAGES } from "@/lib/constants";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";

export function MidPageCta() {
  return (
    <section className="py-6 sm:py-10" aria-label="دعوة للحجز">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-gradient-to-br from-white/[0.05] via-brand-indigo/10 to-brand-purple/10 p-px shadow-[0_30px_90px_-55px_rgba(19,25,180,0.55)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(129,255,254,0.12),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(251,66,253,0.1),transparent_45%)]" />
          <div className="relative flex flex-col gap-6 rounded-[1.7rem] bg-[#050b24]/80 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
            <div className="max-w-xl">
              <p className="text-base font-extrabold text-white sm:text-lg">
                جاهز تثبت المهارة عمليًا؟
              </p>
              <p className="mt-2 text-sm leading-[1.75] text-white/68 sm:text-[15px]">
                احجز مقعدك الآن عبر واتساب — رد سريع وتأكيد واضح دون خطوات
                إضافية.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <CtaButton
                href={whatsappLink(WA_MESSAGES.book)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="prominent"
                className="w-full sm:w-auto sm:min-w-[200px]"
                aria-label="احجز مكانك عبر واتساب"
              >
                احجز مكانك الآن
              </CtaButton>
              <CtaButton
                href={whatsappLink(WA_MESSAGES.chat)}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="prominent"
                className="w-full sm:w-auto sm:min-w-[190px]"
                aria-label="تواصل عبر واتساب"
              >
                تواصل واتساب
              </CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
