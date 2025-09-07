'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "I build modern, responsive websites",
    "Passionate about clean and efficient code",
    "Transforming ideas into digital experiences"
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section id="hero" className="hero" data-aos="fade-in">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Aliyat <span className="name-highlight">Semilore</span></h1>
          <h2 className="hero-title">Web Designer & <span className="title-accent">Developer</span></h2>
          <div className="hero-subtitle">
            <span>{currentText}</span><span className="cursor">|</span>
          </div>
          <p className="hero-description">
            Crafting beautiful, responsive digital experiences with modern design principles and clean code
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-eye"></i> View My Work
            </a>
            <a href="/aliyat-resume.pdf" download className="btn btn-secondary">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <Image 
              src="/assets/semilore.jpg" 
              alt="Aliyat Semilore - Web Designer" 
              className="profile-image"
              width={350}
              height={350}
              priority
            />
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
