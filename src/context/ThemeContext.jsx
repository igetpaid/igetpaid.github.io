import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Apply .dark class to <html> when dark mode is active
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const updateSection = useCallback((sectionId) => {
    setActiveSection(sectionId)
  }, [])

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev)
  }, [])

  return (
    <ThemeContext.Provider value={{ activeSection, isDarkMode, updateSection, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
