'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div id="preloader" className={`preloader ${!isVisible ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="spinner"></div>
        <div className="welcome-text">Welcome to my portfolio website...!!!</div>
      </div>
    </div>
  )
}
