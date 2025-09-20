import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import PricingSection from '../components/PricingSection'
import ContactSection from '../components/ContactSection'
import RequestProjectSection from '../components/RequestProjectSection'

export default function Home() {
  return (
    <>
      <SEOHead />
      
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <RequestProjectSection />
      <PricingSection />
      <ContactSection />
    </>
  )
}