import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader'

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  
  return (
    <>
      <Head>
        <title>RAGSPRO - Code. Create. Dominate.</title>
      </Head>
      
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  )
}