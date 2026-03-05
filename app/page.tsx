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

export default function HomePage() {
  return (
    <>
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
