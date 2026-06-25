import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import ScrollIndicator from './ScrollIndicator'
import GitHubIcon from './icons/GitHubIcon'

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-hero relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Large blur orbs */}
      <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-vk-blue/5 blur-[200px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-vk-blue/3 blur-[150px]" />

      {/* Grid pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2680EB" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Diagonal accent lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="0" x2="30%" y2="100%" stroke="#2680EB" strokeWidth="1" />
        <line x1="85%" y1="0" x2="65%" y2="100%" stroke="#2680EB" strokeWidth="1" />
        <line x1="50%" y1="0" x2="55%" y2="100%" stroke="#2680EB" strokeWidth="0.5" />
      </svg>

      {/* Floating dots */}
      <div className="absolute top-1/4 left-[8%] w-2 h-2 rounded-full bg-vk-blue/20 dark:bg-vk-blue/30" />
      <div className="absolute top-3/4 right-[12%] w-3 h-3 rounded-full bg-vk-blue/15 dark:bg-vk-blue/25" />
      <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 rounded-full bg-vk-blue/20 dark:bg-vk-blue/30" />
      <div className="absolute bottom-1/4 left-[30%] w-2 h-2 rounded-full bg-vk-blue/10 dark:bg-vk-blue/20" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vk-blue/10 text-vk-blue text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-vk-blue animate-pulse" />
          Open source & AI
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[--section-text] leading-[1.1]"
        >
          Игорь Тенгель
          <br />
          <span className="text-[--section-accent]">Разработчик</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[--section-text-secondary] max-w-2xl mx-auto leading-relaxed"
        >
          Делаю десктоп-приложения, игры, автоматизации и экспериментирую с нейросетями.
          Форкаю, улучшаю, собираю в облаке — и рассказываю об этом.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[--section-accent] text-white font-semibold text-base shadow-lg shadow-[--section-accent]/25 hover:shadow-xl hover:shadow-[--section-accent]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Мои проекты
          </a>
          <a
            href="https://github.com/igetpaid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[--section-text-secondary]/20 text-[--section-text-secondary] font-semibold text-base hover:border-[--section-accent]/30 hover:text-[--section-accent] hover:bg-[--section-accent-light] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-[--section-text-secondary]"
        >
          <a
            href="https://vk.com/igetpaid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[--section-accent] transition-colors"
          >
            VK
          </a>
          <span className="opacity-40">·</span>
          <a
            href="https://github.com/igetpaid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[--section-accent] transition-colors"
          >
            GitHub
          </a>
          <span className="opacity-40">·</span>
          <span className="opacity-60">igetpaid</span>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
