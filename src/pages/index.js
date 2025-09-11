import { useEffect } from 'react'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'

import ResumeSection from '../components/ResumeSection'
import ContactSection from '../components/ContactSection'
import RequestProjectSection from '../components/RequestProjectSection'


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
      <RequestProjectSection />
      <ResumeSection />
      <ContactSection />
    </>
  )
}