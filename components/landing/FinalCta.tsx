import { whatsappLink, WA_MESSAGES } from "@/lib/constants";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";

export function FinalCta() {
  return (
    <section className="pb-28 pt-6 sm:pb-20 sm:pt-2" aria-labelledby="final-heading">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-l from-brand-blue/25 via-brand-purple/15 to-brand-navy p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(129,255,254,0.16),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(190,22,34,0.18),transparent_45%)]" />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="text-sm font-semibold text-brand-cyan">جاهز للخطوة؟</p>
              <h2
                id="final-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                لا تؤجل “صورة احترافية” إلى يوم يجهز فيه كل شيء… ابدأ بالتحكم
                الصحيح اليوم
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                المقاعد محدودة لنحافظ على جودة التوجيه — وإذا لم تكن الورشة
                مناسبة لك، نفضّل أن نعرف ذلك مبكرًا أكثر من أن نبيع وعدًا لا
                يلائمك.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="flex w-full flex-col gap-3 lg:w-[280px]">
                <CtaButton
                  href={whatsappLink(WA_MESSAGES.book)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full"
                  aria-label="احجز مكانك عبر واتساب"
                >
                  احجز مكانك الآن
                </CtaButton>
                <CtaButton
                  href={whatsappLink(WA_MESSAGES.chat)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full"
                  aria-label="تواصل عبر واتساب"
                >
                  تواصل واتساب
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
