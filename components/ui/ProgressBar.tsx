'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  name: string
  percentage: number
  delay?: number
}

export default function ProgressBar({ name, percentage, delay = 0 }: ProgressBarProps) {
  return (
    <motion.div 
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="skill-name">{name}</div>
      <div className="progress-bar">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
        />
      </div>
      <div className="skill-percentage">{percentage}%</div>
    </motion.div>
  )
}
