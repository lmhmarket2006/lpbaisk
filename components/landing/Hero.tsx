import { whatsappLink, WA_MESSAGES } from "@/lib/constants";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 hero-spotlight" />
      <div className="pointer-events-none absolute inset-0 hero-vignette" />
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-75" />
      <div className="pointer-events-none absolute -start-36 top-16 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-brand-magenta/28 via-brand-blue/22 to-transparent blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -end-44 bottom-[-6rem] h-[480px] w-[480px] rounded-full bg-gradient-to-tl from-brand-red/32 via-brand-plum/25 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-brand-cyan/35 to-transparent" />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="inline-flex animate-fade-up flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <span className="inline-flex w-fit items-center rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-en text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-cyan/95 sm:text-xs">
                BAYT ALMOSWER ACADEMY
              </span>
              <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
              <span className="rounded-full border border-brand-magenta/25 bg-brand-purple/15 px-3 py-1 text-[11px] font-semibold text-white/90 sm:text-xs">
                حضوري · جدة
              </span>
            </div>

            <p className="animate-fade-up animate-delay-1 mt-5 text-sm leading-relaxed text-white/78 sm:text-base">
              <span className="font-semibold text-white/92">
                ورشة أساسيات التصوير الفوتوغرافي
              </span>
              <span className="mx-2 text-white/30">·</span>
              <span className="font-en text-white/78">Shoot Like a Pro — Level 1</span>
            </p>

            <h1
              id="hero-heading"
              className="animate-fade-up animate-delay-2 mt-5 text-balance text-[2.05rem] font-extrabold leading-[1.18] tracking-[-0.02em] text-white drop-shadow-[0_18px_55px_rgba(0,0,0,0.35)] sm:text-5xl sm:leading-[1.14] lg:text-[2.85rem] lg:leading-[1.12]"
            >
              اتحكم في الكاميرا وابدأ تصوير احترافي من أول يوم
            </h1>

            <p className="animate-fade-up animate-delay-3 mt-5 max-w-xl text-pretty text-base leading-[1.75] text-white/76 sm:text-lg sm:leading-[1.8]">
              ورشة عملية تبدأ معك من الصفر وتوصلك لفهم حقيقي للتصوير والإضاءة
            </p>

            <div className="animate-fade-up animate-delay-3 mt-5 max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-transparent to-brand-blue/10 p-4 sm:p-5">
              <p className="text-base font-bold leading-snug text-white sm:text-lg">
                حوّل صورك من عادية لاحترافية في أول خطوة
              </p>
            </div>

            <div className="animate-fade-up animate-delay-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <CtaButton
                href={whatsappLink(WA_MESSAGES.book)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="prominent"
                className="w-full sm:w-auto sm:min-w-[220px]"
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
                className="w-full sm:w-auto sm:min-w-[200px]"
                aria-label="تواصل عبر واتساب"
              >
                تواصل واتساب
              </CtaButton>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "تطبيق عملي داخل الورشة",
                "توجيه مباشر لكل متدرب",
                "شهادة حضور",
                "جروب دعم بعد الورشة",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-1.5 text-xs leading-relaxed text-white/88 sm:text-sm"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold tracking-wide text-white/50">
                مناسبة لـ
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {[
                  "المبتدئين في التصوير",
                  "صناع المحتوى",
                  "أصحاب المشاريع",
                  "من يرفع جودة صوره (كاميرا أو موبايل)",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/10 bg-gradient-to-l from-brand-indigo/28 to-white/[0.03] px-3.5 py-1.5 text-xs leading-relaxed text-white/86 sm:text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="pointer-events-none absolute -inset-1 rounded-[2.1rem] bg-gradient-to-br from-brand-magenta/35 via-brand-blue/25 to-brand-red/25 opacity-80 blur-xl" />
              <div className="lens-ring relative aspect-square max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.1] to-transparent p-px shadow-[var(--shadow-glow-magenta),var(--shadow-glow-blue),var(--shadow-glow-plum)] lg:mx-0">
                <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.95rem] bg-gradient-to-b from-surface-2/95 via-brand-navy to-[#020616] p-6 sm:p-8">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_0%,rgba(251,66,253,0.26),transparent_46%),radial-gradient(circle_at_82%_78%,rgba(129,255,254,0.14),transparent_42%),radial-gradient(circle_at_50%_120%,rgba(19,25,180,0.22),transparent_55%)]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55 sm:text-xs">
                          الاستثمار بعد الخصم
                        </p>
                        <span className="rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-2 py-0.5 text-[10px] font-bold text-brand-cyan sm:text-[11px]">
                          وفّر 401 ريال
                        </span>
                      </div>
                      <div className="mt-3 flex items-end gap-2">
                        <p className="text-5xl font-extrabold tracking-tight text-white tabular-nums sm:text-6xl sm:leading-none">
                          799
                        </p>
                        <span className="pb-1.5 text-sm font-semibold text-white/75">
                          ريال
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/62 sm:text-sm">
                        سعر واضح بدون مفاجآت — مع خيار التقسيط على دفعتين.
                      </p>
                    </div>
                    <div className="shrink-0 rounded-2xl border border-white/12 bg-black/35 px-3.5 py-2.5 text-start shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
                      <p className="text-[10px] font-semibold text-white/50 sm:text-[11px]">
                        قبل الخصم
                      </p>
                      <p className="mt-1 text-xl font-bold tracking-tight text-white/35 line-through tabular-nums sm:text-2xl">
                        1200
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-8 space-y-3 rounded-2xl border border-white/12 bg-black/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">
                        تقسيط مريح
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                        دفعتين
                      </span>
                    </div>
                    <p className="text-xs leading-[1.75] text-white/66 sm:text-[13px]">
                      نثبت لك أن التعلم الاحترافي يستحق الثقة: استرداد كامل قبل
                      بداية الورشة عند الاعتذار.
                    </p>
                  </div>

                  <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[11px] font-semibold text-white/50">
                        الموقع
                      </p>
                      <p className="mt-1 text-sm font-bold text-white sm:text-base">
                        جدة — مقر الأكاديمية
                      </p>
                    </div>
                    <div
                      className="h-12 w-12 shrink-0 rounded-full border border-white/15 bg-gradient-to-br from-brand-cyan/30 to-brand-magenta/25 shadow-[0_0_34px_-6px_rgba(129,255,254,0.55)]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -bottom-7 -start-7 hidden h-32 w-32 rounded-full border border-white/10 lg:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -top-10 -end-12 hidden h-40 w-40 rounded-full border border-white/10 lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
