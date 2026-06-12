'use client'

import { motion } from 'framer-motion'

interface SocialCardProps {
  platform: string
  icon: string
  description: string
  href: string
  delay?: number
}

export default function SocialCard({ platform, icon, description, href, delay = 0 }: SocialCardProps) {
  const getIconClass = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'whatsapp':
        return 'whatsapp'
      case 'tiktok':
        return 'tiktok'
      default:
        return ''
    }
  }

  return (
    <motion.a
      className="social-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      aria-label={platform}
    >
      <div className={`social-icon ${getIconClass(platform)}`}>
        <i className={icon}></i>
      </div>
      <div className="social-content">
        <h3>{platform}</h3>
        <p>{description}</p>
      </div>
    </motion.a>
  )
}
