'use client'

import { motion } from 'framer-motion'

interface StatCardProps {
  number: string
  label: string
  delay?: number
}

export default function StatCard({ number, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div 
      className="stat"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.span 
        className="stat-number"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {number}
      </motion.span>
      <span className="stat-label">{label}</span>
    </motion.div>
  )
}
