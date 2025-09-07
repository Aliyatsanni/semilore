'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [palette, setPalette] = useState<'default' | 'purple'>('default')

  useEffect(() => {
    // Apply saved theme & palette
    const savedTheme = localStorage.getItem('theme')
    const savedPalette = (localStorage.getItem('palette') as 'default' | 'purple') || 'default'

    if (savedTheme === 'dark') {
      setIsDark(true)
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    setPalette(savedPalette)
    if (savedPalette === 'purple') {
      document.body.classList.add('purple')
    } else {
      document.body.classList.remove('purple')
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const togglePalette = () => {
    const next = palette === 'default' ? 'purple' : 'default'
    setPalette(next)
    if (next === 'purple') {
      document.body.classList.add('purple')
    } else {
      document.body.classList.remove('purple')
    }
    localStorage.setItem('palette', next)
  }

  return (
    <>
      <button
        id="theme-toggle"
        className="theme-toggle"
        onClick={toggleTheme}
        title="Toggle Dark Mode"
        aria-label="Toggle dark mode"
      >
        {isDark ? '☀️' : '🌓'}
      </button>
      <button
        className="theme-palette"
        onClick={togglePalette}
        title="Switch theme palette"
        aria-label="Switch theme palette"
      >
        🎨
      </button>
    </>
  )
}
