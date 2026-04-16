import { Container } from "./Container";

const points = [
  {
    title: "تطبيق عملي يشكّل أغلب الوقت",
    body: "لأن التصوير مهارة يد — نُبقي النظري ضروريًا فقط، والباقي تمارين وتوجيه مباشر.",
  },
  {
    title: "توجيه فردي أثناء التمرين",
    body: "كل متدرب يمرّ بمواقف مختلفة؛ لذلك نُقرب الكاميرا لك وليس العكس.",
  },
  {
    title: "فهم حقيقي — لا حفظ عشوائي",
    body: "عندما تفهم “لماذا” تتحرك الإعدادات، تصبح قادرًا على التكيّف في أي جلسة تصوير.",
  },
];

export function Differentiators() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="diff-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-brand-cyan">لماذا هذه الورشة مختلفة؟</p>
            <h2
              id="diff-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              تعلّم يشبه ورشة تصوير حقيقية — لا محاضرة طويلة
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              بيت المصور يبني تجربة تدريبية راقية: هدوء، تركيز، ومساحة آمنة
              للتجربة — لأن الإبداع يزدهر عندما تختفي الضجّة.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-l from-brand-purple/15 via-transparent to-transparent p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/72 sm:text-base">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
