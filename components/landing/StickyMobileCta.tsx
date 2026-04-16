import { whatsappLink, WA_MESSAGES } from "@/lib/constants";
import { CtaButton } from "./CtaButton";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#040a22]/85 p-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <CtaButton
          href={whatsappLink(WA_MESSAGES.book)}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="min-h-11 flex-1 rounded-xl px-3 text-sm"
          aria-label="احجز مكانك عبر واتساب"
        >
          احجز الآن
        </CtaButton>
        <CtaButton
          href={whatsappLink(WA_MESSAGES.chat)}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="min-h-11 flex-1 rounded-xl px-3 text-sm"
          aria-label="تواصل عبر واتساب"
        >
          واتساب
        </CtaButton>
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" aria-hidden="true" />
    </div>
  );
}
