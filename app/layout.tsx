import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sprout-community.web.app"),
  title: {
    default: "Sprout — Faz a tua comunidade florescer",
    template: "%s · Sprout",
  },
  description:
    "Descobre eventos locais, conhece pessoas com os mesmos interesses e participa na tua comunidade.",
  icons: {
    icon: "/sprout-logo.png",
    shortcut: "/sprout-logo.png",
    apple: "/sprout-logo.png",
  },
  openGraph: {
    title: "Sprout — Faz a tua comunidade florescer",
    description:
      "Eventos locais, pessoas reais e impacto positivo — tudo num só lugar.",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "/sprout-social.png",
        width: 1735,
        height: 910,
        alt: "Uma comunidade reunida em torno de um novo rebento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprout — Faz a tua comunidade florescer",
    description: "Eventos locais, pessoas reais e impacto positivo.",
    images: ["/sprout-social.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5ed",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <div
          id="google_translate_element"
          aria-hidden="true"
          style={{ display: "none", position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function () {
              new window.google.translate.TranslateElement(
                {
                  pageLanguage: "pt",
                  includedLanguages: "pt,en,es,fr",
                  autoDisplay: false
                },
                "google_translate_element"
              );
            };
          `}
        </Script>
        <Script
          id="google-translate-script"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
