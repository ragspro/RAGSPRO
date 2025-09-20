import Head from 'next/head'

export default function SEOHead({ 
  title = "RAGSPRO - #1 AI Product Development Agency | Raghav Shah | Delhi, India",
  description = "RAGSPRO - Leading AI Product Development Agency in Delhi by Raghav Shah. Premium web development, AI tools, automation solutions. Generate ₹50K+ monthly revenue. Expert in Next.js, React, Three.js. Book free consultation today!",
  keywords = "RAGSPRO, Raghav Shah, Bhupender Pratap, AI Product Development Agency Delhi, Web Development Delhi, Full Stack Developer, Next.js Developer, React Developer, AI Tools, Automation Solutions, Premium Web Design, LAW-AI, GLOW AI, lawai.ragspro.com, glow.ragspro.com, AI developer, SaaS builder, Legal Tech, Python developer, BCA graduate, Delhi developer, AI automation, cyber intelligence",
  url = "https://ragspro.com",
  image = "https://ragspro.com/images/ragspro-og.jpg"
}) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Raghav Shah - RAGSPRO" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="RAGSPRO - AI Product Development Agency" />
      <meta property="og:site_name" content="RAGSPRO" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:site" content="@ragspro" />
      <meta name="twitter:creator" content="@ragspro" />
      
      {/* Geographic SEO */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Delhi, India" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en-US" />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="hi" href={`${url}?lang=hi`} />
      
      {/* Additional SEO */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${url}/#organization`,
                "name": "RAGSPRO",
                "alternateName": "RAGS PRO",
                "url": url,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${url}/images/ragspro-logo.png`,
                  "width": 512,
                  "height": 512
                },
                "description": "#1 AI Product Development Agency in Delhi. Premium web development, AI tools, automation solutions by Raghav Shah.",
                "founder": {
                  "@type": "Person",
                  "name": "Raghav Shah",
                  "@id": `${url}/#person`
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
                "areaServed": "Worldwide"
              },
              {
                "@type": "Person",
                "@id": `${url}/#person`,
                "name": "Raghav Shah",
                "alternateName": "RAGSPRO",
                "jobTitle": "Full Stack Developer & AI Solutions Architect",
                "description": "#1 AI Product Development Expert in Delhi. Specializing in Next.js, React, AI tools, automation solutions.",
                "url": url,
                "email": "ragsproai@gmail.com",
                "telephone": "+91-8700048490",
                "image": {
                  "@type": "ImageObject",
                  "url": `${url}/images/raghav-profile.jpg`
                },
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
                "worksFor": {
                  "@id": `${url}/#organization`
                },
                "knowsAbout": [
                  "AI Product Development",
                  "Web Development", 
                  "LAW-AI",
                  "GLOW AI",
                  "Legal Tech",
                  "SaaS Development",
                  "Python Automation",
                  "Cyber Intelligence",
                  "Next.js",
                  "React",
                  "Full Stack Development"
                ],
                "hasCredential": {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "degree",
                  "educationalLevel": "Bachelor",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Maharshi Dayanand University"
                  }
                },
                "owns": [
                  {
                    "@type": "WebSite",
                    "name": "LAW-AI",
                    "url": "https://lawai.ragspro.com",
                    "description": "SaaS Legal Automation Platform"
                  },
                  {
                    "@type": "WebSite",
                    "name": "GLOW AI", 
                    "url": "https://glow.ragspro.com",
                    "description": "AI Photo Enhancement Tool"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": `${url}/#website`,
                "url": url,
                "name": "RAGSPRO",
                "description": "#1 AI Product Development Agency - Premium web development and AI solutions by Raghav Shah",
                "publisher": {
                  "@id": `${url}/#organization`
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${url}/?s={search_term_string}`
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "WebPage",
                "@id": `${url}/#webpage`,
                "url": url,
                "name": title,
                "isPartOf": {
                  "@id": `${url}/#website`
                },
                "about": {
                  "@id": `${url}/#organization`
                },
                "description": description,
                "breadcrumb": {
                  "@id": `${url}/#breadcrumb`
                },
                "inLanguage": "en-US"
              }
            ]
          })
        }}
      />
    </Head>
  )
}