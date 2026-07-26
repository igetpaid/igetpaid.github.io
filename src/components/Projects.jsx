import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, FileCode2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import GitHubIcon from './icons/GitHubIcon'
import { projects } from '../data/projects'

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
        {screenshots.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </>
    )
  }

  return <FileCode2 className="w-10 h-10 text-vk-blue/30" />
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-projects relative py-24 sm:py-32 overflow-hidden bg-[var(--section-bg)]"
    >
      {/* Decorative: blue gradient blobs */}
      <div className="absolute -left-60 -top-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-vk-blue/15 via-vk-blue/5 to-transparent blur-[180px]" />
      <div className="absolute -right-60 -bottom-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-vk-blue/12 via-blue-400/5 to-transparent blur-[160px]" />
      <div className="absolute left-1/3 bottom-10 h-[300px] w-[300px] rounded-full bg-vk-blue/5 blur-[120px]" />

      {/* Decorative: diagonal accent lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="15%" y1="0" x2="35%" y2="100%" stroke="#2680EB" strokeWidth="1" />
        <line x1="80%" y1="0" x2="60%" y2="100%" stroke="#2680EB" strokeWidth="1" />
      </svg>

      {/* Decorative: floating dots */}
      <div className="absolute top-1/3 left-[5%] w-3 h-3 rounded-full bg-vk-blue/35 dark:bg-vk-blue/45" />
      <div className="absolute top-2/3 right-[8%] w-3.5 h-3.5 rounded-full bg-vk-blue/30 dark:bg-vk-blue/40" />
      <div className="absolute bottom-1/4 left-[20%] w-2.5 h-2.5 rounded-full bg-vk-blue/35 dark:bg-vk-blue/45" />
      <div className="absolute top-1/4 right-[25%] w-3 h-3 rounded-full bg-vk-blue/30 dark:bg-vk-blue/40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vk-blue/10 text-vk-blue text-xs font-semibold tracking-wider uppercase mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--section-text)] tracking-tight">
            Проекты
          </h2>
          <p className="mt-4 text-lg text-[var(--section-text-secondary)] max-w-2xl">
            То, что я сделал и чем могу гордиться. Open source, десктоп, автоматизация.
          </p>
        </motion.div>

        {/* Projects list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 space-y-8"
        >
          {projects.map((project, i) => (
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
                        <p className="text-sm text-[var(--section-text-secondary)] mt-0.5">{project.subtitle}</p>
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
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--section-card-bg)] text-[var(--section-text)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex items-center gap-4">
                      {project.links.github && (
                        <span
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--section-text)] hover:text-vk-blue transition-colors"
                        >
                          <GitHubIcon className="w-4 h-4" />
                          Исходники
                        </span>
                      )}
                      {project.links.release && (
                        <span
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--section-text)] hover:text-vk-blue transition-colors"
                        >
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

        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center py-16 rounded-2xl border border-dashed border-[var(--section-border)]"
          >
            <FileCode2 className="w-12 h-12 text-[var(--section-muted)] mx-auto mb-4" />
            <p className="text-[var(--section-text-secondary)] text-lg">Проекты скоро появятся</p>
          </motion.div>
        )}

        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-vk-blue/10 text-vk-blue font-medium hover:bg-vk-blue/20 transition-all duration-200"
            >
              Все проекты
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
