import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://sprout.pt"),
  title: {
    default: "Sprout — Faz a tua comunidade florescer",
    template: "%s · Sprout",
  },
  description:
    "Descobre eventos locais, conhece pessoas com os mesmos interesses e participa na tua comunidade.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
      </body>
    </html>
  );
}
