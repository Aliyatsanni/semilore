'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './ui/Button'
import StatCard from './ui/StatCard'
import { heroStats, typingTexts } from '@/data/hero'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typingTexts[currentIndex]

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % typingTexts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Aliyat <span className="name-highlight">Semilore</span>
          </motion.h1>
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Web Designer & <span className="title-accent">Developer</span>
          </motion.h2>
          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span>{currentText}</span><span className="cursor">|</span>
          </motion.div>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Crafting beautiful, responsive digital experiences with modern design principles and clean code
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button href="#projects" variant="primary">
              <i className="fas fa-eye"></i> View My Work
            </Button>
            <Button href="/aliyat-resume.pdf" download variant="secondary">
              <i className="fas fa-download"></i> Download CV
            </Button>
          </motion.div>
          <div className="hero-stats">
            {heroStats.map((stat, index) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                delay={0.9 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/assets/semilore.jpg"
              alt="Aliyat Semilore - Web Designer"
              className="profile-image"
              width={350}
              height={350}
              priority
            />
            <div className="image-decoration"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
