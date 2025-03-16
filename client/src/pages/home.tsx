import HeroSection from "@/components/hero-section";
import PortfolioGallery from "@/components/portfolio-gallery";
import ServicesSection from "@/components/services-section";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import Chatbot from "@/components/chatbot";
import NavMenu from "@/components/nav-menu";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <NavMenu />
      <HeroSection />
      <PortfolioGallery />
      <ServicesSection />
      <Testimonials />
      <ContactForm />
      <Chatbot />
    </main>
  );
}
