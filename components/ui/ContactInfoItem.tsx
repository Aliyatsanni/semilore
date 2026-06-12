'use client'

import { motion } from 'framer-motion'

interface ContactInfoItemProps {
  icon: string
  title: string
  content: string
  href?: string
  delay?: number
}

export default function ContactInfoItem({ icon, title, content, href, delay = 0 }: ContactInfoItemProps) {
  return (
    <motion.div 
      className="contact-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <i className={icon}></i>
      <div>
        <h4>{title}</h4>
        {href ? (
          <a href={href}>{content}</a>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </motion.div>
  )
}
