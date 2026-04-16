import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "بيت المصور | ورشة أساسيات التصوير الفوتوغرافي — Shoot Like a Pro Level 1",
    template: "%s | بيت المصور",
  },
  description:
    "تعلم أساسيات التصوير الفوتوغرافي من الصفر مع تطبيق عملي واحتراف التحكم في الكاميرا والإضاءة في أكاديمية بيت المصور بجدة.",
  keywords: [
    "دورة تصوير",
    "أساسيات التصوير",
    "تعلم التصوير",
    "تصوير احترافي",
    "بيت المصور",
    "جدة",
    "ورشة تصوير",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    title: "بيت المصور | ورشة أساسيات التصوير الفوتوغرافي",
    description:
      "تعلم أساسيات التصوير الفوتوغرافي من الصفر مع تطبيق عملي في جدة.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "بيت المصور | BAYT ALMOSWER ACADEMY",
  description:
    "أول أكاديمية متخصصة في تعليم التصوير الفوتوغرافي في المملكة العربية السعودية.",
  areaServed: "SA",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jeddah",
    addressCountry: "SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <body
        className={`${ibmArabic.variable} ${sourceSans.variable} min-h-full bg-brand-navy antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
