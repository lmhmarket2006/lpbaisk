export const WHATSAPP_NUMBER = "966548599988";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  book: "مرحباً بيت المصور، أود حجز مقعدي في ورشة «أساسيات التصوير الفوتوغرافي — Shoot Like a Pro Level 1» في جدة.",
  chat: "مرحباً، لدي استفسار عن ورشة أساسيات التصوير الفوتوغرافي في بيت المصور.",
} as const;
