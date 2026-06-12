'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [theme, setTheme] = useState('system')

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // If no saved theme, use system preference
    if (!savedTheme) {
      setIsDark(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // Use saved theme
      const isDarkMode = savedTheme === 'dark'
      setIsDark(isDarkMode)
      if (isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    if (nextIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleThemeChange = (newTheme: 'system' | 'light' | 'dark') => {
    setTheme(newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else if (newTheme === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"
        aria-label="Loading theme"
      >
        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-500 animate-pulse"></div>
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
      <button
        className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Theme options"
        title="Theme options"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
      <div className="absolute top-12 right-0 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md p-2 w-40">
        <button
          onClick={() => handleThemeChange('system')}
          className={`block w-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 ${theme === 'system' ? 'bg-gray-300 dark:bg-gray-600' : ''}`}
        >
          System
        </button>
        <button
          onClick={() => handleThemeChange('light')}
          className={`block w-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 ${theme === 'light' ? 'bg-gray-300 dark:bg-gray-600' : ''}`}
        >
          Light
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className={`block w-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 ${theme === 'dark' ? 'bg-gray-300 dark:bg-gray-600' : ''}`}
        >
          Dark
        </button>
      </div>
    </div>
  )
}
