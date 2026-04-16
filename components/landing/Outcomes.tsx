import { Container } from "./Container";

const skills = [
  {
    title: "تحكم كامل بالوضع اليدوي",
    body: "فهم عميق لإعدادات الكاميرا بحيث تختارها بثقة — لا كـ “وصفة عشوائية”.",
  },
  {
    title: "مثلث التعرّض بذكاء",
    body: "التحكم في الإضاءة عبر ISO / Shutter / Aperture بشكل يخدم المشهد.",
  },
  {
    title: "تكوين يشبه المصورين المحترفين",
    body: "أساسيات تكوين الصورة لتوجيه العين ورفع قيمة الصورة بأقل عناصر.",
  },
  {
    title: "إضاءة طبيعية وصناعية",
    body: "قراءة الضوء واستغلاله — بدل محاربته — مع نصائح عملية سريعة التطبيق.",
  },
  {
    title: "زوايا تخدم القصة",
    body: "اختيار الزوايا التي ترفع الصورة من “لقطة” إلى “مشهد”.",
  },
  {
    title: "تعديل أنظف وأكثر احترافية",
    body: "أساسيات تعديل الصور بشكل يحافظ على الجلد والتفاصيل والهوية اللونية.",
  },
  {
    title: "تفادي أخطاء المبتدئين",
    body: "تصحيح مسار شائع يوفّر عليك شهور من التجربة والخطأ.",
  },
  {
    title: "تطبيق عملي داخل الورشة",
    body: "تمارين ميدانية تثبت المهارة — لأن التصوير يُتعلَّم باليد والعين معًا.",
  },
];

export function Outcomes() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="outcomes-heading">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-cyan">مهارات عالية القيمة</p>
            <h2
              id="outcomes-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              مخرجات عملية — ليست مفردات تُذكر وتمضي
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              نركّز على ما يغيّر نتائجك فورًا: فهم، ثم تطبيق، ثم تثبيت عبر
              تمارين موجّهة.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 transition duration-200 hover:border-white/20"
            >
              <h3 className="text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
