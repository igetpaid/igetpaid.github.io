import { motion } from 'framer-motion'
import { ExternalLink, FileCode2, CheckCircle2, Timer, Code2 } from 'lucide-react'
import GitHubIcon from './icons/GitHubIcon'
import { projects } from '../data/projects'

const statusConfig = {
  active: { icon: CheckCircle2, label: 'Активен', color: 'text-green-600 bg-green-50' },
  paused: { icon: Timer, label: 'На паузе', color: 'text-amber-600 bg-amber-50' },
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-projects relative py-24 sm:py-32 overflow-hidden bg-[var(--section-bg)]"
    >
      {/* Decorative: blur orbs */}
      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-vk-blue/5 blur-[150px]" />
      <div className="absolute -right-40 bottom-20 h-[300px] w-[300px] rounded-full bg-vk-blue/3 blur-[100px]" />

      {/* Decorative: grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="projects-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2680EB" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#projects-grid)" />
      </svg>

      {/* Decorative: diagonal accent lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="15%" y1="0" x2="35%" y2="100%" stroke="#2680EB" strokeWidth="1" />
        <line x1="80%" y1="0" x2="60%" y2="100%" stroke="#2680EB" strokeWidth="1" />
      </svg>

      {/* Decorative: floating dots */}
      <div className="absolute top-1/3 left-[5%] w-2 h-2 rounded-full bg-vk-blue/15 dark:bg-vk-blue/25" />
      <div className="absolute top-2/3 right-[8%] w-3 h-3 rounded-full bg-vk-blue/10 dark:bg-vk-blue/20" />
      <div className="absolute bottom-1/4 left-[20%] w-1.5 h-1.5 rounded-full bg-vk-blue/15 dark:bg-vk-blue/25" />
      <div className="absolute top-1/4 right-[25%] w-2 h-2 rounded-full bg-vk-blue/10 dark:bg-vk-blue/20" />

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
          {projects.map((project, i) => {
            const status = statusConfig[project.status]
            const StatusIcon = status?.icon

            return (
              <div
                key={project.id}
                className="group p-6 sm:p-8 rounded-2xl bg-[var(--section-card-bg)] border border-[var(--section-border)] hover:border-vk-blue/20 hover:shadow-lg hover:shadow-vk-blue/5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Placeholder image */}
                  <div className="shrink-0 w-full sm:w-48 h-32 rounded-xl bg-gradient-to-br from-vk-blue/10 to-blue-200/30 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FileCode2 className="w-10 h-10 text-vk-blue/30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--section-text)] group-hover:text-vk-blue transition-colors">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-sm text-[var(--section-text-secondary)] mt-0.5">{project.subtitle}</p>
                        )}
                      </div>
                      {/* Status badge */}
                      {status && (
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium shrink-0 ${status.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
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
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--section-text)] hover:text-vk-blue transition-colors"
                        >
                          <GitHubIcon className="w-4 h-4" />
                          Исходники
                        </a>
                      )}
                      {project.links.release && (
                        <a
                          href={project.links.release}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--section-text)] hover:text-vk-blue transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Скачать
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
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
      </div>
    </section>
  )
}
