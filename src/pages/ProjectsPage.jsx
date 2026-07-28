import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, FileCode2, ArrowLeft } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GitHubIcon from '../components/icons/GitHubIcon'
import { projects, categories } from '../data/projects'

function ProjectPreview({ project }) {
  const screenshots = project.screenshots || []
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (screenshots.length < 2) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [screenshots.length])

  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    )
  }

  if (screenshots.length > 0) {
    return (
      <>
        {screenshots.map((src, i) => {
          const diff = Math.abs(i - current)
          const isVisible = diff <= 1 || diff === screenshots.length - 1
          if (!isVisible) return null
          return (
            <img
              key={i}
              src={src}
              alt=""
              loading={i === current ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )
        })}
      </>
    )
  }

  return <FileCode2 className="w-10 h-10 text-vk-blue/30" />
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-[var(--section-bg)]">
      <Header />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--section-text-secondary)] hover:text-[var(--section-accent)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--section-text)] tracking-tight">
              Проекты
            </h1>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-vk-blue text-white shadow-sm'
                    : 'bg-[var(--section-card-bg)] text-[var(--section-text-secondary)] border border-[var(--section-border)] hover:border-vk-blue/30 hover:text-vk-blue'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Projects list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 space-y-6"
          >
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/${project.slug}`}
                className="group block p-6 sm:p-8 rounded-2xl bg-[var(--section-card-bg)] border border-[var(--section-border)] hover:border-vk-blue/20 hover:shadow-lg hover:shadow-vk-blue/5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Preview image / slideshow */}
                  <div className="shrink-0 w-full sm:w-72 aspect-video rounded-xl bg-gradient-to-br from-vk-blue/10 to-blue-200/30 flex items-center justify-center overflow-hidden relative">
                    <ProjectPreview project={project} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--section-text)] group-hover:text-vk-blue transition-colors">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-sm text-[var(--section-text-secondary)] mt-0.5">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="mt-3 text-sm text-[var(--section-text)] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-white/10 dark:bg-white/10 text-[var(--section-text-secondary)] border border-[var(--section-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex items-center gap-4">
                      {project.links.github && (
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--section-text)] hover:text-vk-blue transition-colors">
                          <GitHubIcon className="w-4 h-4" />
                          Исходники
                        </span>
                      )}
                      {project.links.release && (
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--section-text)] hover:text-vk-blue transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          Скачать
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 text-center py-16 rounded-2xl border border-dashed border-[var(--section-border)]"
            >
              <FileCode2 className="w-12 h-12 text-[var(--section-muted)] mx-auto mb-4" />
              <p className="text-[var(--section-text-secondary)] text-lg">
                В этой категории пока нет проектов
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}