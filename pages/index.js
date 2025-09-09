import { useEffect } from 'react'
import Head from 'next/head'
import HeroSection from '../src/components/HeroSection'
import AboutSection from '../src/components/AboutSection'
import ServicesSection from '../src/components/ServicesSection'
import ProjectsSection from '../src/components/ProjectsSection'
import ProductsSection from '../src/components/ProductsSection'
import ResumeSection from '../src/components/ResumeSection'
import ContactSection from '../src/components/ContactSection'
import NewsletterSection from '../src/components/NewsletterSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>RAGSPRO - Code. Create. Dominate.</title>
      </Head>
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProductsSection />
      <ResumeSection />
      <NewsletterSection />
      <ContactSection />
    </>
  )
}