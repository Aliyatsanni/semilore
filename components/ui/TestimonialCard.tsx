'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  text: string
  author: string
  position: string
  isActive: boolean
  onClick?: () => void
}

export default function TestimonialCard({ text, author, position, isActive, onClick }: TestimonialCardProps) {
  return (
    <motion.div 
      className={`testimonial ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3,
        scale: isActive ? 1 : 0.9
      }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <p>"{text}"</p>
      <h4>- {author}, {position}</h4>
    </motion.div>
  )
}
