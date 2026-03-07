import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { seoDescription, seoTitle, siteUrl } from "@/lib/seo";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  applicationName: "Limone Gramado",
  alternates: {
    canonical: "/",
  },
  keywords: ["limoncello gramado", "licor de limao gramado", "limone gramado", "limoncello artesanal", "gramado"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Limone Gramado",
    images: [
      {
        url: "/assets/og-limone-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Limoncello artesanal Limone Gramado",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/assets/og-limone-1200x630.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)] antialiased`}>{children}</body>
    </html>
  );
}


