import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Monitor, Smartphone, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { getProjectDetails } from '../data/projectDetails'
import ProjectDescription from './ProjectDescription'

export default function FeaturedProject() {
  const project = getProjectDetails('hardreset')
  if (!project) return null

  const previews = project.screenshots.map((s) => s.src)

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % previews.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? previews.length - 1 : prev - 1))
  }
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === previews.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      id="featured"
      className="section-gamedev relative py-24 sm:py-32 overflow-hidden bg-[var(--section-bg)]"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 h-72 w-72" style={{ background: 'radial-gradient(circle closest-side, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / var(--blob-a)) 0%, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / 0) 100%)' }} />
      <div className="absolute bottom-20 right-10 h-72 w-72" style={{ background: 'radial-gradient(circle closest-side, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / var(--blob-a)) 0%, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / 0) 100%)' }} />

      {/* Diagonal lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="15%" y1="0" x2="35%" y2="100%" stroke="#ff6b9d" strokeWidth="1" />
        <line x1="80%" y1="0" x2="60%" y2="100%" stroke="#ff6b9d" strokeWidth="1" />
      </svg>

      {/* Floating dots */}
      <div className="absolute top-1/3 left-[5%] w-3 h-3 rounded-full bg-gamedev-accent/35 dark:bg-gamedev-accent/45" />
      <div className="absolute top-2/3 right-[8%] w-3.5 h-3.5 rounded-full bg-gamedev-accent/30 dark:bg-gamedev-accent/40" />
      <div className="absolute bottom-1/4 left-[20%] w-2.5 h-2.5 rounded-full bg-gamedev-accent/35 dark:bg-gamedev-accent/45" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gamedev-accent/15 text-gamedev-accent text-sm font-semibold tracking-wider mb-4">
            GameDev
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--section-text)] tracking-tight">
            {project.title}
          </h2>
          <p className="mt-2 text-lg text-gamedev-accent font-medium">
            {project.subtitle}
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          {/* Left: Slideshow with arrows */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="group relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gamedev-accent/20 to-gamedev-secondary/20 border border-[var(--section-border)]">
              {/* Images — only render current + neighbors for performance */}
              {previews.map((src, i) => {
                const diff = Math.abs(i - currentSlide)
                const isVisible = diff <= 1 || diff === previews.length - 1
                if (!isVisible) return null
                return (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading={i === currentSlide ? 'eager' : 'lazy'}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      i === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )
              })}

              {/* Arrows — hidden by default, visible on hover */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 text-white text-sm font-medium">
                {currentSlide + 1} / {previews.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
              {previews.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentSlide
                      ? 'border-gamedev-accent opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <ProjectDescription description={project.description} />

            {/* Tags + Date */}
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-white/10 dark:bg-white/10 text-[var(--section-text-secondary)] border border-[var(--section-border)]"
                >
                  {tag}
                </span>
              ))}
              {project.date && (
                <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--section-muted)]">
                  Релиз: {project.date}
                </span>
              )}
            </div>

            {/* Platforms */}
            <div className="flex items-center gap-4 text-sm text-[var(--section-text-secondary)]">
              <span className="inline-flex items-center gap-1.5">
                <Monitor className="w-4 h-4 text-blue-500" />
                Windows
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-emerald-500" />
                Android
              </span>
            </div>

            {/* Features */}
            <div className="space-y-2">
              {project.gameplay?.features?.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gamedev-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--section-text-secondary)]">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/hardreset"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gamedev-accent/15 text-gamedev-accent font-medium hover:bg-gamedev-accent/25 transition-all duration-200"
            >
              Подробнее
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
