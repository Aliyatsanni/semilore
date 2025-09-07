'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1>Aliyat<span className="logo-accent">.</span></h1>
          <span className="logo-subtitle">Web Designer</span>
        </div>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <a href="#hero" className="nav-link" onClick={() => scrollToSection('hero')}>
            Home
          </a>
          <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </a>
          <a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>
            Skills
          </a>
          <a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>
            Portfolio
          </a>
          <a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>
            Services
          </a>
          <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
