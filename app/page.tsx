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
    telephone: "+55-54-99999-9999",
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <StorySection />
        <EventsSection />
        <HowToServeSection />
        <WhereToFindSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
