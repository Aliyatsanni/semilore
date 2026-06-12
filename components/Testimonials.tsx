'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <SectionHeader
          title="Testimonials"
          subtitle="What clients say about my work"
        />
        <div className="testimonial-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial active"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p>"{testimonials[activeIndex].text}"</p>
              <h4>- {testimonials[activeIndex].author}, {testimonials[activeIndex].position}</h4>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <motion.span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
