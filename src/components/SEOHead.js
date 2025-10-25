import Head from 'next/head'

export default function SEOHead({ 
  title = "RAGSPRO | Build Your Startup App in 20 Days | SaaS & AI Development Agency",
  description = "Launch your SaaS, web, or mobile app fast. RAGSPRO helps startups with end-to-end development, AI integration, and business automation — delivered in just 20 days.",
  keywords = "startup app development, SaaS development agency, MVP builder India, AI app development, business automation company, Raghav Shah, Next.js development company Delhi, build MVP fast, AI integration agency",
  ogImage = "https://ragspro.com/images/og-image.jpg",
  url = "https://ragspro.com",
  type = "website"
}) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Raghav Shah, RAGSPRO" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="RAGSPRO" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@ragspro" />
      <meta name="twitter:site" content="@ragspro" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content="RAGSPRO" />
      <meta name="apple-mobile-web-app-title" content="RAGSPRO" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="Delhi, India" />
      <meta name="geo.position" content="28.7041;77.1025" />
      <meta name="ICBM" content="28.7041, 77.1025" />
    </Head>
  )
}