import { Container } from "./Container";

const modules = [
  "مدخل إلى عالم التصوير",
  "إعدادات الكاميرا",
  "فهم الإضاءة",
  "تكوين الصورة",
  "التطبيق العملي",
  "أساسيات التعديل",
];

export function ModulesSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="modules-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-magenta/90">مسار الورشة</p>
          <h2
            id="modules-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            ست وحدات — إيقاع واضح من الأساس حتى التطبيق
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            تصميم متدرّج يبني فهمك خطوة بخطوة، ثم يحوّله إلى مهارة أمام
            الكاميرا.
          </p>
        </div>

        <ol className="mt-10 space-y-4">
          {modules.map((title, idx) => (
            <li
              key={title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/55 p-5 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-y-0 end-0 w-40 bg-gradient-to-l from-brand-blue/15 to-transparent" />
              <div className="relative flex items-start gap-4 sm:gap-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-en text-sm font-semibold text-brand-cyan">
                  {idx + 1}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/55">الوحدة</p>
                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    {title}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
