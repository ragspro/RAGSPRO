import SEOHead from './SEOHead'
import FloatingBrand from './FloatingBrand'
import Footer from './Footer'

export default function Layout({ children, seoProps }) {
  return (
    <>
      <SEOHead {...seoProps} />
      
      <FloatingBrand />
      <main>{children}</main>
      <Footer />
    </>
  )
}