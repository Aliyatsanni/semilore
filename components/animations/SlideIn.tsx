'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'left' | 'right'
  className?: string
}

export default function SlideIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'left',
  className = '' 
}: SlideInProps) {
  const initialX = direction === 'left' ? -100 : 100

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
