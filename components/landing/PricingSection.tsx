import { whatsappLink, WA_MESSAGES } from "@/lib/constants";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(251,66,253,0.18),transparent_45%),radial-gradient(circle_at_90%_30%,rgba(19,25,180,0.22),transparent_45%)]" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold text-brand-cyan">العرض</p>
              <h2
                id="pricing-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                استثمار واضح — وقيمة تتجاوز السعر بأشهر من التجربة العشوائية
              </h2>

              <div className="mt-8 flex flex-wrap items-end gap-4">
                <div>
                  <p className="text-xs text-white/55">السعر بعد الخصم</p>
                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                      799
                    </p>
                    <span className="pb-2 text-base text-white/70">ريال</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur">
                  <p className="text-xs text-white/55">قبل الخصم</p>
                  <p className="text-2xl font-semibold text-white/40 line-through">
                    1200
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand-cyan">
                    وفّر 401 ريال
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                  <span
                    className="inline-flex h-2 w-2 rounded-full bg-brand-cyan shadow-[0_0_18px_rgba(129,255,254,0.65)]"
                    aria-hidden="true"
                  />
                  تقسيط متاح على دفعتين
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80">
                  <span
                    className="inline-flex h-2 w-2 rounded-full bg-brand-magenta shadow-[0_0_18px_rgba(251,66,253,0.55)]"
                    aria-hidden="true"
                  />
                  استرداد كامل قبل بداية الورشة عند الاعتذار
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur">
                <p className="text-sm leading-relaxed text-white/75">
                  نُبقي تجربة الحجز بسيطة: تواصل مباشر عبر واتساب، نجيب على
                  استفساراتك، ونؤكد مقعدك بسرعة — بدون تعقيد.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CtaButton
                    href={whatsappLink(WA_MESSAGES.book)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full sm:flex-1"
                    aria-label="احجز مكانك عبر واتساب"
                  >
                    احجز مكانك الآن
                  </CtaButton>
                  <CtaButton
                    href={whatsappLink(WA_MESSAGES.chat)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="w-full sm:flex-1"
                    aria-label="تواصل عبر واتساب"
                  >
                    تواصل واتساب
                  </CtaButton>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-white/55">
                  ملاحظة أخلاقية: المقاعد محدودة لضمان جودة التوجيه — لكننا لا
                  نستخدم ضغطًا مزيفًا. إذا كانت الورشة مناسبة لك، القرار يجب أن
                  يكون واثقًا… لا مستعجلًا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
