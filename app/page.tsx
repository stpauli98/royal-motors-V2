import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VehiclesSection from "@/components/vehicles-section"
import ImportSection from "@/components/import-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <VehiclesSection />
      <ImportSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
