import { Container } from "./Container";

const faqs = [
  {
    q: "هل الدورة مناسبة للمبتدئين؟",
    a: "نعم. نبدأ معك من الصفر تمامًا، وبخطوات عملية تبني الثقة تدريجيًا دون إرهاق.",
  },
  {
    q: "هل لازم يكون عندي كاميرا؟",
    a: "يفضّل وجود كاميرا للاستفادة القصوى من التمارين، ومع ذلك يمكنك الحضور بالموبايل مع توجيه مناسب لحدوده.",
  },
  {
    q: "هل في تطبيق عملي؟",
    a: "نعم. الورشة مبنية على تطبيق كبير داخل القاعة — لأن الفهم الحقيقي يظهر عند الضغط على الزر.",
  },
  {
    q: "هل أحصل على شهادة؟",
    a: "نعم، شهادة حضور رسمية من بيت المصور توثق مشاركتك.",
  },
  {
    q: "هل في متابعة بعد الورشة؟",
    a: "نعم، يوجد جروب دعم للإجابة على الأسئلة ومساعدتك على تثبيت ما تعلّمته.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-brand-magenta/90">أسئلة شائعة</p>
          <h2
            id="faq-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            إجابات مختصرة — لتقرر براحة
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-1 transition-colors open:bg-white/[0.05] open:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-4 text-start text-sm font-semibold text-white sm:text-base [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/25 text-brand-cyan transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-sm leading-relaxed text-white/72 sm:text-base">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
