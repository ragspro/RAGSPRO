import { useEffect } from 'react'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import PricingSection from '../components/PricingSection'
import ContactSection from '../components/ContactSection'
import RequestProjectSection from '../components/RequestProjectSection'


export default function Home() {
  return (
    <>
      <Head>
        <title>RAGSPRO - AI Product Development Agency & Digital Solutions Partner</title>
      </Head>
      
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <RequestProjectSection />
      <PricingSection />
      <ContactSection />
    </>
  )
}