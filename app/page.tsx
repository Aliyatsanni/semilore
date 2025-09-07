'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import WhatsAppChat from '@/components/WhatsAppChat'
import BackToTop from '@/components/BackToTop'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    const AOS = require('aos')
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <main>
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat />
      <BackToTop />
      <ThemeToggle />
    </main>
  )
}
