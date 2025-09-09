import { useEffect } from 'react'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import ProductsSection from '../components/ProductsSection'
import ResumeSection from '../components/ResumeSection'
import ContactSection from '../components/ContactSection'
import NewsletterSection from '../components/NewsletterSection'

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