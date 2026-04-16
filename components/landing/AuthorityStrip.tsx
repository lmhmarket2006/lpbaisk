import { Container } from "./Container";

const items = [
  {
    title: "أول أكاديمية متخصصة",
    body: "في تعليم التصوير الفوتوغرافي بالمملكة — خبرة مبنية على معايير احترافية.",
  },
  {
    title: "تدريب عملي حقيقي",
    body: "ليس شرحًا نظريًا فقط — تمارين ميدانية تُثبت الفهم فورًا.",
  },
  {
    title: "شهادة حضور",
    body: "توثيق رسمي من بيت المصور يعزز مصداقيتك أمام عملائك أو جمهورك.",
  },
  {
    title: "متابعة بعد الورشة",
    body: "جروب دعم للأسئلة السريعة — لأن التعلم لا ينتهي بآخر جلسة.",
  },
];

export function AuthorityStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-10 backdrop-blur-sm">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <h2 className="text-base font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
