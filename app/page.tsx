import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ChallengeSection from "@/components/sections/ChallengeSection";
import HowWeHelpSection from "@/components/sections/HowWeHelpSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import DiagnosticoSection from "@/components/sections/DiagnosticoSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ChallengeSection />
        <HowWeHelpSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <DiagnosticoSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </>
  );
}
