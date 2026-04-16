import { Container } from "./Container";

export function Instructor() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="instructor-heading">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-surface-2/90 via-brand-navy to-brand-navy p-8 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -top-40 end-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-brand-magenta/25 via-brand-blue/20 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -start-40 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-brand-red/20 to-transparent blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-brand-navy to-black/55 shadow-[var(--shadow-glow-blue)] lg:mx-0">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(129,255,254,0.18),transparent_45%),radial-gradient(circle_at_50%_92%,rgba(251,66,253,0.12),transparent_45%)]" />
                <div className="pointer-events-none absolute inset-10 rounded-[2.5rem] border border-white/10 lens-ring opacity-70" />
                <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/15 bg-black/25 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_90px_-35px_rgba(19,25,180,0.65)]">
                    <div className="absolute inset-2 rounded-full border border-white/10" />
                    <div className="absolute inset-6 rounded-full border border-dashed border-white/10 opacity-60" />
                    <div className="relative flex flex-col items-center">
                      <p className="font-en text-[10px] font-medium tracking-[0.35em] text-white/45 sm:text-xs">
                        INSTRUCTOR
                      </p>
                      <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        أ.ز
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 w-full rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur">
                    <p className="text-xs text-white/60">المدرّب</p>
                    <p className="mt-1 text-2xl font-bold text-white">أحمد زغلول</p>
                    <p className="mt-2 text-sm text-white/70">
                      مصور محترف متخصص في تصوير البيوتي
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-sm font-semibold text-brand-cyan">خبرة تُحسَب بالسنوات</p>
              <h2
                id="instructor-heading"
                className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                تعلّم من مدرب يجمع بين السوق والصنعة — وليس “نصائح عامة”
              </h2>

              <ul className="mt-6 space-y-3 text-base leading-relaxed text-white/78">
                <li className="flex gap-3">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta"
                    aria-hidden="true"
                  />
                  مدرب معتمد من Sony — معايير تقنية ورؤية بصرية متوازنة.
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta"
                    aria-hidden="true"
                  />
                  خبرة تزيد عن 10 سنوات في التدريب والتصوير التجاري.
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-magenta"
                    aria-hidden="true"
                  />
                  يوجّهك بلغة واضحة: من أول إعداد… إلى أول صورة “تفرحك”.
                </li>
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "التخصص", v: "البيوتي والإضاءة الناعمة" },
                  { k: "الاعتماد", v: "Sony Certified" },
                  { k: "الخبرة", v: "+10 سنوات" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs text-white/55">{x.k}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
