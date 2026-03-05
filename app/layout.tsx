import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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

const siteUrl = "https://www.limonegramado.com.br";
const seoTitle = "Limone Gramado | Limoncello artesanal da Serra Gaúcha";
const seoDescription = "Limoncello artesanal produzido em pequenos lotes na Serra Gaúcha. Degustações e experiências em Gramado.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  applicationName: "Limone Gramado",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "limoncello",
    "limoncello artesanal",
    "gramado",
    "serra gaúcha",
    "degustação",
    "eventos",
    "licor de limão",
  ],
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
        url: "/assets/hero-main.jpg",
        width: 1536,
        height: 1024,
        alt: "Limoncello Limone Gramado com limões em fundo escuro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/assets/hero-main.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)] antialiased`}>{children}</body>
    </html>
  );
}
