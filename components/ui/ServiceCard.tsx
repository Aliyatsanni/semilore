'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  delay?: number
}

export default function ServiceCard({ icon, title, description, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <motion.div 
        className="service-icon"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <i className={icon}></i>
      </motion.div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="service-features">
        {features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  )
}
