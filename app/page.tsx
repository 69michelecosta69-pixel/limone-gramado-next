import ContactSection from "@/components/ContactSection";
import EventsSection from "@/components/EventsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FounderVideoSection from "@/components/FounderVideoSection";
import Hero from "@/components/Hero";
import HowToServeSection from "@/components/HowToServeSection";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import ProductSection from "@/components/ProductSection";
import StorySection from "@/components/StorySection";
import WhereToFindSection from "@/components/WhereToFindSection";
import { companyProfile, whatsappLink } from "@/lib/company";
import { siteUrl } from "@/lib/seo";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyProfile.brandName,
    url: siteUrl,
    logo: `${siteUrl}/assets/limone-logo-monogram.png`,
    sameAs: ["https://instagram.com/limone_gramado"],
  },

  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyProfile.brandName,
    image: `${siteUrl}/assets/gramado-atmosfera-wm.jpg`,
    areaServed: "Gramado e Canela, RS",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyProfile.address.streetAddress,
      postalCode: companyProfile.address.postalCode,
      addressLocality: companyProfile.address.locality,
      addressRegion: companyProfile.address.region,
      addressCountry: companyProfile.address.country,
    },
    url: siteUrl,
    telephone: companyProfile.phoneSchema,
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
        <FounderVideoSection />
        <PartnerSection />
        <StorySection />
        <EventsSection />
        <HowToServeSection />
        <WhereToFindSection />
        <FAQSection />
        <ContactSection />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[rgba(9,13,26,0.94)] p-3 backdrop-blur md:hidden">
        <div className="container-limone flex gap-2">
          <a className="btn-primary flex-1" href={whatsappLink} target="_blank" rel="noreferrer">
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




