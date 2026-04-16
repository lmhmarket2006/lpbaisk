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
        <div className="relative overflow-hidden rounded-[2rem] p-px shadow-[var(--shadow-glow-magenta),var(--shadow-glow-blue)]">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-magenta/45 via-brand-blue/35 to-brand-red/35 opacity-90" />
          <div className="relative overflow-hidden rounded-[1.97rem] border border-white/10 bg-gradient-to-b from-[#070f2e] via-brand-navy to-[#020616]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(251,66,253,0.2),transparent_46%),radial-gradient(circle_at_92%_18%,rgba(19,25,180,0.28),transparent_48%),radial-gradient(circle_at_50%_120%,rgba(190,22,34,0.16),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-l from-transparent via-brand-cyan/35 to-transparent" />

            <div className="relative px-6 py-10 sm:px-10 sm:py-12">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-brand-cyan">العرض</p>
                  <h2
                    id="pricing-heading"
                    className="mt-3 max-w-xl text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl sm:leading-tight"
                  >
                    استثمار واضح — وقيمة تتجاوز السعر بأشهر من التجربة العشوائية
                  </h2>

                  <div className="mt-10 rounded-3xl border border-white/12 bg-black/30 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur sm:p-8">
                    <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-white/55">
                          السعر بعد الخصم
                        </p>
                        <div className="mt-3 flex flex-wrap items-end gap-3">
                          <div className="flex items-end gap-2">
                            <p className="text-6xl font-extrabold leading-none tracking-tight text-white tabular-nums sm:text-7xl">
                              799
                            </p>
                            <span className="pb-2 text-lg font-bold text-white/75">
                              ريال
                            </span>
                          </div>
                          <span className="mb-2 inline-flex items-center rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-extrabold text-brand-cyan sm:text-sm">
                            وفّر 401 ريال
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-4 sm:text-start">
                        <p className="text-[11px] font-semibold text-white/50">
                          قبل الخصم
                        </p>
                        <p className="mt-1 text-3xl font-extrabold tracking-tight text-white/35 line-through tabular-nums sm:text-4xl">
                          1200
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-white/60">
                          خصم مباشر على الاستثمار الكامل للورشة.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <span
                          className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-cyan shadow-[0_0_18px_rgba(129,255,254,0.65)]"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-sm font-bold text-white">
                            تقسيط على دفعتين
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-white/62">
                            مرونة دفع تناسبك دون إرهاق.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <span
                          className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-magenta shadow-[0_0_18px_rgba(251,66,253,0.55)]"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-sm font-bold text-white">
                            استرداد كامل قبل البداية
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-white/62">
                            عند الاعتذار قبل انطلاق الورشة.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full shrink-0 lg:w-[380px]">
                  <div className="rounded-2xl border border-white/12 bg-black/35 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur sm:p-7">
                    <p className="text-sm font-semibold leading-relaxed text-white/82">
                      نُبقي تجربة الحجز بسيطة: تواصل مباشر عبر واتساب، نجيب على
                      استفساراتك، ونؤكد مقعدك بسرعة — بدون تعقيد.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                      <CtaButton
                        href={whatsappLink(WA_MESSAGES.book)}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="prominent"
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
                        size="prominent"
                        className="w-full"
                        aria-label="تواصل عبر واتساب"
                      >
                        تواصل واتساب
                      </CtaButton>
                    </div>

                    <p className="mt-5 text-xs leading-[1.75] text-white/52">
                      ملاحظة أخلاقية: المقاعد محدودة لضمان جودة التوجيه — دون ضغط
                      مزيف. إذا كانت الورشة مناسبة لك، نريد قرارًا واثقًا… لا
                      مستعجلًا.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
