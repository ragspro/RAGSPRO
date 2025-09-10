import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        {/* Mobile Responsive Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
        
        {/* SEO Meta Tags */}
        <meta name="description" content="RAGSPRO - Premium Web Development & AI Solutions by Raghav Shah" />
        <meta property="og:title" content="RAGSPRO - Code. Create. Dominate." />
        <meta property="og:description" content="Delhi-based Full Stack Developer offering premium web development, AI tools, and digital products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ragspro.in" />
        <meta property="og:image" content="https://ragspro.in/images/og-image.jpg" />
        
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
        <link rel="canonical" href="https://ragspro.in" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Raghav Shah",
              "jobTitle": "Full Stack Developer",
              "description": "Delhi-based Full Stack Developer offering premium web development, AI tools, and digital products",
              "url": "https://ragspro.in",
              "email": "ragsproai@gmail.com",
              "telephone": "+91-8700048490",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/ragspro",
                "https://www.linkedin.com/in/bhupederpratap/",
                "https://twitter.com/ragspro",
                "https://www.instagram.com/ragsproai/"
              ],
              "knowsAbout": [
                "Web Development",
                "AI Integration",
                "UI/UX Design",
                "SEO Optimization",
                "Next.js",
                "React",
                "Three.js"
              ]
            })
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