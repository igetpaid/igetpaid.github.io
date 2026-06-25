import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { sections } from '../utils/sectionThemes'

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
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = headerStyle === 'dark'
  const showBg = scrolled || mobileMenuOpen

  // Nav text color: when header has solid bg -> always dark text; when transparent -> adapt
  const textColor = showBg
    ? 'text-slate-700 dark:text-slate-300'
    : isDark
      ? 'text-white'
      : 'text-slate-900 dark:text-slate-100'

  const bgClass = showBg
    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const mobileBgClass = showBg
    ? 'bg-white/95 dark:bg-slate-900/95'
    : isDark
      ? 'bg-slate-900/95'
      : 'bg-white/95 dark:bg-slate-900/95'

  // Active nav item: always visible no matter scroll state or section
  const activeNavClass = 'bg-vk-blue text-white shadow-sm'
  const inactiveNavClass = `${textColor} hover:bg-black/5 dark:hover:bg-white/10`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Logo */}
        <a
          href="#hero"
          className={`text-lg font-bold tracking-tight transition-colors ${textColor}`}
        >
          <span className="text-vk-blue">iget</span>paid
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id ? activeNavClass : inactiveNavClass
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right section: theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-200 ${
              showBg
                ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
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
                ? 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
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
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? activeNavClass
                      : `text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800`
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
