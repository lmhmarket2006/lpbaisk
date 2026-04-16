import { Container } from "./Container";

const outcomes = [
  "قرارات أوضح أثناء التصوير — أقل تخمين، وأكثر تحكمًا.",
  "صور أكثر ثباتًا في الإضاءة الصعبة — بفهم “لماذا” قبل “كم”.",
  "هوية بصرية أنظف — تكوين يخدم الرسالة بدل ازدحام بصري.",
  "ثقة أعلى أمام الكاميرا أو الكاميرا نفسها — لأنك تعرف ماذا تفعل.",
];

export function Transformation() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="transform-heading">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-brand-magenta/90">
              ماذا يتغيّر بعد الورشة؟
            </p>
            <h2
              id="transform-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              من “تصوير عشوائي” إلى قراءة مشهد — ثم بناء صورة
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/72">
              الهدف ليس حفظ إعدادات، بل فهم منطق الضوء والكاميرا حتى تقدر
              تكرّر النجاح في أي مكان وزمان.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {outcomes.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span
                    className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue shadow-[0_0_18px_rgba(129,255,254,0.55)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-white/80 sm:text-base">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
