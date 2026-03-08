import ContactSection from "@/components/ContactSection";
import EventsSection from "@/components/EventsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToServeSection from "@/components/HowToServeSection";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import StorySection from "@/components/StorySection";
import WhereToFindSection from "@/components/WhereToFindSection";
import { seoDescription, siteUrl } from "@/lib/seo";

const WHATSAPP_LINK = "https://wa.me/5562981347722?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Limoncello%20Limone%20Gramado%20e%20disponibilidade%20para%20compra%2Fdegusta%C3%A7%C3%A3o%20em%20Gramado.";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Limone Gramado",
    url: siteUrl,
    logo: `${siteUrl}/assets/hero-limoncello.jpg`,
    sameAs: ["https://instagram.com/limonegramado"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Limoncello artesanal Limone Gramado",
    description: seoDescription,
    image: [`${siteUrl}/assets/bottle-product.jpg`, `${siteUrl}/assets/hero-limoncello.jpg`],
    brand: {
      "@type": "Brand",
      name: "Limone Gramado",
    },
    category: "Licor de limão",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceCurrency: "BRL",
      url: `${siteUrl}/produto`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Limone Gramado",
    image: `${siteUrl}/assets/gramado-atmosfera.jpg`,
    areaServed: "Gramado e Canela, RS",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gramado",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    url: siteUrl,
    telephone: "+55-62-98134-7722",
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <ProductSection />
        <StorySection />
        <EventsSection />
        <HowToServeSection />
        <WhereToFindSection />
        <FAQSection />
        <ContactSection />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[rgba(9,13,26,0.94)] p-3 backdrop-blur md:hidden">
        <div className="container-limone flex gap-2">
          <a className="btn-primary flex-1" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp agora
          </a>
          <a className="btn-secondary" href="#contato">
            Contato
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
