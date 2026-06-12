'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

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

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300
      }
    })
  }

  return (
    <motion.header
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h1>Aliyat<span className="logo-accent">.</span></h1>
          <span className="logo-subtitle">Web Designer</span>
        </motion.div>
        <motion.div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="nav-links show"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  onClick={() => scrollToSection(link.href.substring(1))}
                  variants={linkVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className="nav-theme-toggle"
                variants={linkVariants}
                custom={navLinks.length}
              >
                <ThemeToggle />
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className={`nav-links desktop ${isMenuOpen ? 'show' : ''}`}>
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => scrollToSection(link.href.substring(1))}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
          <div className="nav-theme-toggle">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
