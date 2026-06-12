import { create } from 'zustand'

interface ThemeState {
  isDark: boolean
  toggleTheme: () => void
  setTheme: (isDark: boolean) => void
  initializeTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  
  toggleTheme: () => {
    set((state) => {
      const newIsDark = !state.isDark
      const newTheme = newIsDark ? 'dark' : 'light'
      
      // Update DOM
      if (newIsDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // Save to localStorage
      localStorage.setItem('theme', newTheme)
      
      return { isDark: newIsDark }
    })
  },
  
  setTheme: (isDark) => {
    set(() => {
      const newTheme = isDark ? 'dark' : 'light'
      
      // Update DOM
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // Save to localStorage
      localStorage.setItem('theme', newTheme)
      
      return { isDark }
    })
  },
  
  initializeTheme: () => {
    set(() => {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      let isDarkMode = false
      
      if (savedTheme) {
        isDarkMode = savedTheme === 'dark'
      } else {
        isDarkMode = prefersDark
      }
      
      // Update DOM
      if (isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      return { isDark: isDarkMode }
    })
  },
}))
