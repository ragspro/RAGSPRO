import SEOHead from '../components/SEOHead'
import HeroSection from '../components/HeroSection'
import FloatingProjects from '../components/FloatingProjects'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import BenjiPricingSection from '../components/BenjiPricingSection'
import ContactSection from '../components/ContactSection'
import TeamSection from '../components/TeamSection'
import CustomCursor from '../components/CustomCursor'
import SectionDivider from '../components/SectionDivider'

export default function Home() {
  return (
    <div className="bg-white page-rails">
      <SEOHead />
      <CustomCursor />
      
      {/* Sticky Scroll Container */}
      <div className="relative page-canvas">
        <HeroSection />
        <ProjectsSection />
      </div>
      
      <div className="page-canvas">
        <ServicesSection />
        <SectionDivider />
        <BenjiPricingSection />
        <SectionDivider />
        <TeamSection />
        <SectionDivider />
        <ContactSection />
      </div>
    </div>
  )
}
