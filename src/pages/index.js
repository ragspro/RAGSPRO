import SEOHead from '../components/SEOHead'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import PricingSection from '../components/PricingSection'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'
import SectionDivider from '../components/SectionDivider'

export default function Home() {
  return (
    <div className="bg-white page-rails">
      <SEOHead />
      
      {/* Sticky Scroll Container */}
      <div className="relative page-canvas">
        <HeroSection />
        <ProjectsSection />
      </div>
      
      <div className="page-canvas">
        <ServicesSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <TeamSection />
        <SectionDivider />
        <ContactSection />
      </div>
    </div>
  )
}
