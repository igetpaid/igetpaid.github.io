import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { sections } from '../utils/sectionThemes'

// Sections that have their own dedicated page
const sectionRoutes = {
  gamedev: '/gamedev',
}

const navItems = [
  { id: 'hero', label: 'Главная' },
  { id: 'gamedev', label: 'GameDev' },
  { id: 'ai', label: 'AI' },
  { id: 'lora', label: 'LoRA' },
  { id: 'projects', label: 'Проекты' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'blog', label: 'Блог' },
  { id: 'contacts', label: 'Контакты' },
]

export default function Header() {
  const { activeSection, headerStyle, isDarkMode, toggleDarkMode } = useTheme()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isLanding = location.pathname === '/'

  // Determine which section is "active" based on route or scroll spy
  const getActiveSection = () => {
    if (isLanding) {
      // On landing page, use scroll spy
      return activeSection
    }
    // On section pages, derive from route
    const parts = location.pathname.split('/').filter(Boolean)
    const sectionFromRoute = parts[0] || ''
    return navItems.find((item) => item.id === sectionFromRoute) ? sectionFromRoute : ''
  }

  const currentSection = getActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Section pages with dark theme force dark header
  const darkSectionRoutes = ['gamedev']
  const isDarkSectionPage = !isLanding && darkSectionRoutes.includes(currentSection)
  const effectiveHeaderStyle = isDarkSectionPage ? 'dark' : headerStyle

  const isDark = effectiveHeaderStyle === 'dark'
  const showBg = scrolled || mobileMenuOpen

  // On dark section pages (gamedev, etc.), header is always dark, no matter the toggle
  const textColor = showBg
    ? isDarkSectionPage
      ? 'text-slate-300'
      : 'text-slate-700 dark:text-slate-300'
    : isDark
      ? 'text-white'
      : 'text-slate-900 dark:text-slate-100'

  const bgClass = showBg
    ? isDarkSectionPage
      ? 'bg-slate-900/90 backdrop-blur-md shadow-sm'
      : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const mobileBgClass = showBg
    ? isDarkSectionPage
      ? 'bg-slate-900/95'
      : 'bg-white/95 dark:bg-slate-900/95'
    : isDark
      ? 'bg-slate-900/95'
      : 'bg-white/95 dark:bg-slate-900/95'

  const activeNavClass = 'bg-vk-blue text-white shadow-sm'
  const inactiveNavClass = `${textColor} hover:bg-black/5 dark:hover:bg-white/10`

  // Handle nav click: route or smooth scroll
  const handleNavClick = (e, id) => {
    const route = sectionRoutes[id]
    if (route) {
      // Has dedicated page — Link handles this
      return
    }
    if (isLanding) {
      // On landing page — smooth scroll to section
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileMenuOpen(false)
    }
    // On other pages, default anchor behavior navigates to /#id
  }

  const renderNavLink = (item, isMobile = false) => {
    const route = sectionRoutes[item.id]
    const isActive = currentSection === item.id
    const linkClass = isMobile
      ? `block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
          isActive
            ? activeNavClass
            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`
      : `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive ? activeNavClass : inactiveNavClass
        }`

    if (route) {
      return (
        <Link
          to={route}
          className={linkClass}
          onClick={() => isMobile && setMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      )
    }

    // Sections without dedicated page — scroll on landing, navigate on others
    if (isLanding) {
      return (
        <a
          href={`#${item.id}`}
          className={linkClass}
          onClick={(e) => {
            e.preventDefault()
            const el = document.getElementById(item.id)
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' })
            }
            if (isMobile) setMobileMenuOpen(false)
          }}
        >
          {item.label}
        </a>
      )
    }

    return (
      <a
        href={`/#${item.id}`}
        className={linkClass}
        onClick={() => isMobile && setMobileMenuOpen(false)}
      >
        {item.label}
      </a>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Logo */}
        <Link
          to="/"
          className={`text-lg font-bold tracking-tight transition-colors ${textColor}`}
        >
          <span className="text-vk-blue">iget</span>paid
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>{renderNavLink(item)}</li>
          ))}
        </ul>

        {/* Right section: theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-200 ${
              showBg
                ? isDarkSectionPage
                  ? 'text-slate-400 hover:bg-white/10'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                : isDark
                  ? 'text-white/80 hover:bg-white/10'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            aria-label={isDarkMode ? 'Светлая тема' : 'Тёмная тема'}
            title={isDarkMode ? 'Светлая тема' : 'Тёмная тема'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              showBg
                ? isDarkSectionPage
                  ? 'text-slate-400 hover:bg-white/10'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                : isDark
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t ${mobileBgClass} backdrop-blur-md`}>
          <ul className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>{renderNavLink(item, true)}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
