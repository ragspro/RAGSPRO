import '../styles/globals.css'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Layout from '../components/Layout'
import MobilePerformanceOptimizer from '../components/MobilePerformanceOptimizer'
import CustomCircleCursor from '../components/CustomCircleCursor'
import SmoothScroll from '../components/SmoothScroll'
import { initProjectsAnimation } from '../utils/projectsAnimation'

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    // Initialize floating projects animation
    const cleanup = initProjectsAnimation();
    
    // Reveal animations on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup();
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
      </Head>
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <CustomCircleCursor />
          <MobilePerformanceOptimizer />
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </AnimatePresence>
      </SmoothScroll>
    </>
  )
}