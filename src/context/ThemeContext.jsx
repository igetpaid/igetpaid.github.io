import { createContext, useContext, useState, useCallback } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [headerStyle, setHeaderStyle] = useState('light')

  const updateSection = useCallback((sectionId, style) => {
    setActiveSection(sectionId)
    setHeaderStyle(style)
  }, [])

  return (
    <ThemeContext.Provider value={{ activeSection, headerStyle, updateSection }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
