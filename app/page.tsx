'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Social from '@/components/Social'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import WhatsAppChat from '@/components/WhatsAppChat'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main>
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Social />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat />
      <BackToTop />
    </main>
  )
}
