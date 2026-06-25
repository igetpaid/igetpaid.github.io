import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
  const { activeSection, headerStyle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = headerStyle === 'dark'
  const showBg = scrolled || mobileMenuOpen

  const textColor = showBg
    ? 'text-slate-900'
    : isDark
      ? 'text-white'
      : 'text-slate-900'

  const bgClass = showBg
    ? 'bg-white/90 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const mobileBgClass = isDark && !showBg
    ? 'bg-slate-900/95'
    : 'bg-white/95'

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
          <span className="text-[--section-accent]">iget</span>paid
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? isDark
                      ? 'bg-white/10 text-white'
                      : 'bg-blue-50 text-blue-600'
                    : `${textColor} hover:${isDark ? 'bg-white/5' : 'bg-slate-100'}`
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-900'
          }`}
          aria-label="Меню"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
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
                      ? isDark
                        ? 'bg-white/10 text-white'
                        : 'bg-blue-50 text-blue-600'
                      : isDark
                        ? 'text-slate-300 hover:bg-white/5'
                        : 'text-slate-600 hover:bg-slate-100'
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
