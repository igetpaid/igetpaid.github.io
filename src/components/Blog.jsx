import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import VKIcon from './icons/VKIcon'

export default function Blog() {
  return (
    <section
      id="blog"
      className="section-blog relative py-24 sm:py-32 overflow-hidden bg-[var(--section-bg)]"
    >
      {/* Background */}
      <div className="absolute top-20 -right-40 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[150px]" />

      {/* Diagonal lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20%" y1="0" x2="40%" y2="100%" stroke="#d97706" strokeWidth="1" />
        <line x1="75%" y1="0" x2="55%" y2="100%" stroke="#d97706" strokeWidth="1" />
      </svg>

      {/* Floating dots */}
      <div className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-amber-500/35 dark:bg-amber-500/45" />
      <div className="absolute bottom-1/3 right-[12%] w-3.5 h-3.5 rounded-full bg-amber-500/30 dark:bg-amber-500/40" />
      <div className="absolute top-3/4 left-[30%] w-2.5 h-2.5 rounded-full bg-amber-500/35 dark:bg-amber-500/45" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--section-text)] tracking-tight">
            VK
          </h2>
        </motion.div>

        {/* VK Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <a
            href="https://vk.ru/wall-239672881_1"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-[var(--section-card-bg)] border border-[var(--section-border)] hover:border-amber-300/40 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-vk-blue/10 flex items-center justify-center">
                <VKIcon className="w-6 h-6 text-vk-blue" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[var(--section-text-secondary)] mb-1">
                  Пост в ВКонтакте
                </p>
                <h3 className="text-xl font-bold text-[var(--section-text)] group-hover:text-amber-600 transition-colors">
                  Замутил фичу для Light Whisper
                </h3>
                <p className="mt-2 text-sm text-[var(--section-text-secondary)] leading-relaxed">
                  Как я добавил режим скрытого запуска в трей, настроил облачную сборку через GitHub Actions.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--section-text-secondary)] group-hover:text-amber-600 transition-colors">
                    Читать в VK
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </a>

          <div className="mt-4 text-center">
            <Link
              to="/light-whisper"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/15 text-amber-600 font-medium hover:bg-amber-500/25 transition-all duration-200"
            >
              Подробнее о LightWhisper
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
