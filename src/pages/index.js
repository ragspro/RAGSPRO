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
        <title>RAGSPRO - #1 AI Product Development Agency | Raghav Shah | Delhi, India</title>
        <meta name="description" content="RAGSPRO - Leading AI Product Development Agency in Delhi by Raghav Shah. Premium web development, AI tools, automation solutions. Generate ₹50K+ monthly revenue. Expert in Next.js, React, Three.js. Book free consultation today!" />
        <meta name="keywords" content="RAGSPRO, Raghav Shah, AI Product Development Agency Delhi, Web Development Delhi, Full Stack Developer, Next.js Developer, React Developer, AI Tools, Automation Solutions, Premium Web Design" />
        <link rel="canonical" href="https://ragspro.com" />
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