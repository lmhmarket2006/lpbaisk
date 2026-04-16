import { whatsappLink, WA_MESSAGES } from "@/lib/constants";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-80" />
      <div className="pointer-events-none absolute -start-32 top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-brand-magenta/25 via-brand-blue/20 to-transparent blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -end-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tl from-brand-red/30 via-brand-purple/25 to-transparent blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="animate-fade-up font-en text-xs font-medium uppercase tracking-[0.22em] text-brand-cyan/90 sm:text-sm">
              BAYT ALMOSWER ACADEMY
            </p>
            <p className="animate-fade-up animate-delay-1 mt-3 text-sm text-white/75 sm:text-base">
              ورشة أساسيات التصوير الفوتوغرافي
              <span className="mx-2 text-white/35">·</span>
              <span className="font-en text-white/80">Shoot Like a Pro — Level 1</span>
            </p>

            <h1
              id="hero-heading"
              className="animate-fade-up animate-delay-2 mt-5 text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
            >
              اتحكم في الكاميرا وابدأ تصوير احترافي من أول يوم
            </h1>

            <p className="animate-fade-up animate-delay-3 mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/78 sm:text-lg">
              ورشة عملية تبدأ معك من الصفر وتوصلك لفهم حقيقي للتصوير والإضاءة
            </p>

            <p className="animate-fade-up animate-delay-3 mt-4 text-lg font-semibold text-white sm:text-xl">
              حوّل صورك من عادية لاحترافية في أول خطوة
            </p>

            <div className="animate-fade-up animate-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "تطبيق عملي داخل الورشة",
                "توجيه مباشر لكل متدرب",
                "شهادة حضور",
                "جروب دعم بعد الورشة",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/85 sm:text-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="lens-ring relative aspect-square max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.07] to-transparent p-[1px] shadow-[var(--shadow-glow-magenta),var(--shadow-glow-blue)] lg:mx-0">
                <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.95rem] bg-gradient-to-b from-surface-2/90 to-brand-navy p-6 sm:p-8">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(251,66,253,0.22),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(129,255,254,0.12),transparent_40%)]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-white/60">الاستثمار بعد الخصم</p>
                      <div className="mt-2 flex items-end gap-2">
                        <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                          799
                        </p>
                        <span className="pb-1 text-sm text-white/70">ريال</span>
                      </div>
                      <p className="mt-2 text-sm text-brand-cyan/90">
                        وفّر <span className="font-semibold">401 ريال</span>
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-start backdrop-blur">
                      <p className="text-[11px] text-white/55">قبل الخصم</p>
                      <p className="text-lg font-semibold text-white/45 line-through">
                        1200
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-8 space-y-3 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-white">
                        تقسيط مريح
                      </p>
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">
                        دفعتين
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-white/65">
                      نثبت لك أن التعلم الاحترافي يستحق الثقة: استرداد كامل قبل
                      بداية الورشة عند الاعتذار.
                    </p>
                  </div>

                  <div className="relative mt-6 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-white/55">الموقع</p>
                      <p className="text-sm font-semibold text-white">
                        جدة — مقر الأكاديمية
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-full border border-white/15 bg-gradient-to-br from-brand-cyan/25 to-brand-magenta/20 shadow-[0_0_30px_-8px_rgba(129,255,254,0.55)]" />
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -bottom-6 -start-6 hidden h-28 w-28 rounded-full border border-white/10 lg:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -top-8 -end-10 hidden h-36 w-36 rounded-full border border-white/10 lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
