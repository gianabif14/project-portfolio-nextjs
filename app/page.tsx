import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import TechStack from "@/components/tech-stack"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
