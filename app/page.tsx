import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { BestPosters } from "@/components/best-posters"
import { ToolsSection } from "@/components/tools-section"
import { ExperienceSection } from "@/components/experience-section"

export default function Home() {
  return (
    <AuroraBackground className="relative">
      <FloatingElements />
      <Navigation />
      <Hero />
      <About />
      <BestPosters />
      <ToolsSection />
      <ExperienceSection />
      <Contact />
    </AuroraBackground>
  )
}
