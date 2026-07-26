import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollIndicator from './ScrollIndicator'
import GitHubIcon from './icons/GitHubIcon'
import VKIcon from './icons/VKIcon'

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-hero relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--section-bg)]"
    >
      {/* Large blur orbs */}
      <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-vk-blue/5 blur-[200px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-vk-blue/3 blur-[150px]" />

      {/* Grid pattern overlay - removed */}

      {/* Diagonal accent lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="0" x2="30%" y2="100%" stroke="#2680EB" strokeWidth="1" />
        <line x1="85%" y1="0" x2="65%" y2="100%" stroke="#2680EB" strokeWidth="1" />
        <line x1="50%" y1="0" x2="55%" y2="100%" stroke="#2680EB" strokeWidth="0.5" />
      </svg>

      {/* Floating dots */}
      <div className="absolute top-1/4 left-[8%] w-3 h-3 rounded-full bg-vk-blue/40 dark:bg-vk-blue/50" />
      <div className="absolute top-3/4 right-[12%] w-3.5 h-3.5 rounded-full bg-vk-blue/35 dark:bg-vk-blue/45" />
      <div className="absolute top-1/3 right-[20%] w-2.5 h-2.5 rounded-full bg-vk-blue/40 dark:bg-vk-blue/50" />
      <div className="absolute bottom-1/4 left-[30%] w-3 h-3 rounded-full bg-vk-blue/30 dark:bg-vk-blue/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-[var(--section-text)] leading-[1.1]"
        >
          Игорь Тенгель
          <br />
          <span className="text-[var(--section-accent)]">Вайб-инженер</span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--section-accent)] text-white font-semibold text-base shadow-lg shadow-[var(--section-accent)]/25 hover:shadow-xl hover:shadow-[var(--section-accent)]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <ExternalLink className="w-6 h-6" />
            Все проекты
          </Link>
          <a
            href="https://github.com/igetpaid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-[var(--section-text-secondary)]/20 text-[var(--section-text-secondary)] font-semibold text-base hover:border-[var(--section-accent)]/30 hover:text-[var(--section-accent)] hover:bg-[var(--section-accent-light)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <GitHubIcon className="w-6 h-6" />
            GitHub
          </a>
          <a
            href="https://vk.ru/igor_tengel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-[var(--section-text-secondary)]/20 text-[var(--section-text-secondary)] font-semibold text-base hover:border-[var(--section-accent)]/30 hover:text-[var(--section-accent)] hover:bg-[var(--section-accent-light)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <VKIcon className="w-6 h-6" />
            VK
          </a>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
