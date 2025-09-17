import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>RAGSPRO - AI Product Development Agency & Digital Solutions Partner</title>
      </Head>
      
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}