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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Limone Gramado",
  url: "https://www.limonegramado.com.br",
  image: "https://www.limonegramado.com.br/assets/hero-limoncello.jpg",
  sameAs: ["https://instagram.com/limonegramado"],
  description: "Limoncello artesanal produzido em pequenos lotes na Serra Gaúcha.",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
