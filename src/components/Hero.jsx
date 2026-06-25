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
      {/* Background decorations */}
      <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-vk-blue/5 blur-[200px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-vk-blue/3 blur-[150px]" />

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
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
        >
          Игорь Тенгель
          <br />
          <span className="text-vk-blue">Разработчик</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-vk-blue text-white font-semibold text-base shadow-lg shadow-vk-blue/25 hover:shadow-xl hover:shadow-vk-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Мои проекты
          </a>
          <a
            href="https://github.com/igetpaid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-base hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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
          className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400"
        >
          <a
            href="https://vk.com/igetpaid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vk-blue transition-colors"
          >
            VK
          </a>
          <span className="text-slate-300">·</span>
          <a
            href="https://github.com/igetpaid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vk-blue transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400">igetpaid</span>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
