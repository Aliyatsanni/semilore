'use client'

import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  download?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  download, 
  onClick, 
  type = 'button',
  className = '' 
}: ButtonProps) {
  const baseClasses = 'btn'
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`

  const buttonContent = (
    <motion.button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    )
  }

  return buttonContent
}
