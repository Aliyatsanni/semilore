'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      text: "Aliyat is a talented developer who delivers clean and responsive designs. Highly recommended!",
      author: "Jane Doe",
      position: "Designer"
    },
    {
      text: "Very dedicated and pays attention to detail. Her work speaks for itself.",
      author: "John Smith",
      position: "Developer"
    },
    {
      text: "Working with Aliyat was smooth and professional. Will definitely hire again.",
      author: "Lisa Brown",
      position: "Project Manager"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What clients say about my work</p>
        </div>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial ${index === activeIndex ? 'active' : ''}`}
            >
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}, {testimonial.position}</h4>
            </div>
          ))}
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}
