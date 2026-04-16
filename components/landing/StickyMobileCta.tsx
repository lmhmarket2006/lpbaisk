import { whatsappLink, WA_MESSAGES } from "@/lib/constants";
import { CtaButton } from "./CtaButton";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="h-full w-[140%] -translate-x-[14%] bg-gradient-to-l from-transparent via-brand-cyan/40 to-transparent animate-shimmer-line" />
      </div>
      <div className="border-t border-white/12 bg-[#030818]/92 px-3 pb-2 pt-3 shadow-[0_-28px_80px_-40px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-lg gap-2.5">
          <CtaButton
            href={whatsappLink(WA_MESSAGES.book)}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="min-h-14 flex-[1.2] flex-1 rounded-2xl px-2 text-[15px] font-extrabold shadow-[0_22px_60px_-22px_rgba(190,22,34,0.75)]"
            aria-label="احجز مكانك عبر واتساب"
          >
            احجز الآن
          </CtaButton>
          <CtaButton
            href={whatsappLink(WA_MESSAGES.chat)}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="min-h-14 flex-1 rounded-2xl px-2 text-[15px] font-bold"
            aria-label="تواصل عبر واتساب"
          >
            واتساب
          </CtaButton>
        </div>
        <div
          className="h-[max(env(safe-area-inset-bottom),0.35rem)]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
