import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        {/* Mobile Responsive Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RAGSPRO" />
        <meta name="theme-color" content="#000000" />
        
        {/* Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Advanced SEO Meta Tags */}
        <meta name="description" content="RAGSPRO - #1 AI Product Development Agency in Delhi. Premium web development, AI tools, automation solutions. Raghav Shah - Full Stack Developer specializing in Next.js, React, Three.js. Get ₹50K+ monthly revenue solutions." />
        <meta name="keywords" content="RAGSPRO, Raghav Shah, AI Product Development, Web Development Delhi, Full Stack Developer, Next.js Developer, React Developer, AI Tools, Automation Solutions, Three.js, Premium Web Design, Delhi Developer, AI Agency, Web Development Agency" />
        <meta name="author" content="Raghav Shah - RAGSPRO" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi, India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        
        {/* Open Graph */}
        <meta property="og:title" content="RAGSPRO - #1 AI Product Development Agency | Raghav Shah" />
        <meta property="og:description" content="Premium AI Product Development Agency in Delhi. Full Stack Developer Raghav Shah offers Next.js, React, AI tools, automation solutions. Generate ₹50K+ monthly revenue." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ragspro.com" />
        <meta property="og:image" content="https://ragspro.com/images/ragspro-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="RAGSPRO - AI Product Development Agency" />
        <meta property="og:site_name" content="RAGSPRO" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ragspro" />
        <meta name="twitter:creator" content="@ragspro" />
        <meta name="twitter:title" content="RAGSPRO - #1 AI Product Development Agency" />
        <meta name="twitter:description" content="Premium AI Product Development Agency in Delhi. Full Stack Developer specializing in Next.js, React, AI tools." />
        <meta name="twitter:image" content="https://ragspro.com/images/ragspro-twitter.jpg" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Critical Resource Hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="format-detection" content="date=no, address=no, email=no" />
        
        {/* Performance Meta */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        
        {/* SEO Optimization */}
        <link rel="canonical" href="https://ragspro.com" />
        
        {/* Enhanced JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "RAGSPRO",
                "alternateName": "RAGS PRO",
                "url": "https://ragspro.com",
                "logo": "https://ragspro.com/images/ragspro-logo.png",
                "description": "#1 AI Product Development Agency in Delhi. Premium web development, AI tools, automation solutions by Raghav Shah.",
                "founder": {
                  "@type": "Person",
                  "name": "Raghav Shah"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Delhi",
                  "addressRegion": "Delhi",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-8700048490",
                  "contactType": "customer service",
                  "email": "ragsproai@gmail.com",
                  "availableLanguage": ["English", "Hindi"]
                },
                "sameAs": [
                  "https://github.com/ragspro",
                  "https://www.linkedin.com/in/bhupederpratap/",
                  "https://twitter.com/ragspro",
                  "https://www.instagram.com/ragsproai/"
                ],
                "serviceArea": {
                  "@type": "Country",
                  "name": "India"
                },
                "areaServed": "Worldwide",
                "knowsAbout": [
                  "AI Product Development",
                  "Web Development",
                  "Automation Solutions",
                  "Next.js Development",
                  "React Development",
                  "Three.js",
                  "Full Stack Development",
                  "AI Integration",
                  "UI/UX Design",
                  "SEO Optimization"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Raghav Shah",
                "alternateName": "RAGSPRO",
                "jobTitle": "Full Stack Developer & AI Solutions Architect",
                "description": "#1 AI Product Development Expert in Delhi. Specializing in Next.js, React, AI tools, automation solutions.",
                "url": "https://ragspro.com",
                "email": "ragsproai@gmail.com",
                "telephone": "+91-8700048490",
                "image": "https://ragspro.com/images/raghav-profile.jpg",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Delhi",
                  "addressRegion": "Delhi",
                  "addressCountry": "IN"
                },
                "sameAs": [
                  "https://github.com/ragspro",
                  "https://www.linkedin.com/in/bhupederpratap/",
                  "https://twitter.com/ragspro",
                  "https://www.instagram.com/ragsproai/"
                ],
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Full Stack Developer",
                  "occupationLocation": {
                    "@type": "City",
                    "name": "Delhi"
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "RAGSPRO",
                "url": "https://ragspro.com",
                "description": "#1 AI Product Development Agency - Premium web development and AI solutions by Raghav Shah",
                "publisher": {
                  "@type": "Organization",
                  "name": "RAGSPRO"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://ragspro.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}