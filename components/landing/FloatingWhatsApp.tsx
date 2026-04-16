import { whatsappLink, WA_MESSAGES } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M20.5 3.5A10.2 10.2 0 0 0 3.5 17.8L2 22l4.3-1.5A10.2 10.2 0 1 0 20.5 3.5ZM12 19.9c-1 0-2-.2-2.9-.6l-.3-.1-2.4.8.8-2.3-.2-.3A8.1 8.1 0 1 1 12 19.9Zm4.5-6.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4 0-.1 0-.3-.1-.4-.1-.2-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.4 3.8 3.4 2.2 1 2.2.7 2.6.7.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(WA_MESSAGES.chat)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom))] start-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-[#0b1230] to-[#050a24] text-[#25D366] shadow-[0_18px_50px_-18px_rgba(37,211,102,0.55)] backdrop-blur-md transition hover:brightness-110 md:bottom-8 md:start-8 md:h-16 md:w-16"
      aria-label="فتح واتساب للتواصل مع بيت المصور"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
