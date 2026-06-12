'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  className = '' 
}: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30 }
      case 'down':
        return { y: -30 }
      case 'left':
        return { x: 30 }
      case 'right':
        return { x: -30 }
      default:
        return { y: 30 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
