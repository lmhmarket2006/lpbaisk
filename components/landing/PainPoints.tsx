import { Container } from "./Container";

const pains = [
  {
    title: "صورك ما زالت أقل احترافية مما تتوقع",
    body: "حتى مع المحاولات المتكررة، النتيجة لا تعكس جودة علامتك أو ذوقك.",
  },
  {
    title: "الاعتماد على الـ Auto يحدّ منك",
    body: "الكاميرا تقرر عنك — فتضيع لحظات الإضاءة والتفاصيل التي تُفرق الصورة.",
  },
  {
    title: "الإضاءة والألوان “ما تتقفل”",
    body: "توتر بسيط يكفي ليغيّر المشهد — وتحتاج منهجًا يبسّط التحكم بدون تعقيد.",
  },
];

export function PainPoints() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="pain-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-cyan">نقطة التحوّل</p>
          <h2
            id="pain-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            إذا كانت هذه تجربتك… فأنت لست “غير موهوب”
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            أغلب المشكلة في فهم منظومة التصوير — وليس في عدسة أغلى أو موبايل
            أحدث.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pains.map((p) => (
            <article
              key={p.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6"
            >
              <div className="pointer-events-none absolute -top-24 end-0 h-44 w-44 rounded-full bg-brand-red/15 blur-3xl" />
              <h3 className="relative text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/72">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
