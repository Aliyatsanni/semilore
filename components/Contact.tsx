'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'
import ContactInfoItem from './ui/ContactInfoItem'
import { contactInfo } from '@/data/contact'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader
          title="Contact Me"
          subtitle="Let's work together on your next project"
        />

        <div className="contact-content">
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <Button type="submit" variant="primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </Button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((item, index) => (
              <ContactInfoItem
                key={item.title}
                {...item}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
