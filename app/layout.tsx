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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.limonegramado.com.br"),
  title: "Limone Gramado | Limoncello artesanal da Serra Gaúcha",
  description: "Limoncello artesanal produzido em pequenos lotes na Serra Gaúcha. Degustações e experiências em Gramado.",
  openGraph: {
    title: "Limone Gramado",
    description: "Limoncello artesanal premium da Serra Gaúcha",
    url: "https://www.limonegramado.com.br",
    siteName: "Limone Gramado",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Limoncello Limone Gramado com limões em fundo escuro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)] antialiased`}>{children}</body>
    </html>
  );
}
