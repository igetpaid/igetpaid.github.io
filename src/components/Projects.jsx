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
      className="section-projects relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-vk-blue/5 blur-[150px]" />
      <div className="absolute -right-40 bottom-20 h-[300px] w-[300px] rounded-full bg-vk-blue/3 blur-[100px]" />

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Проекты
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl">
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
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-vk-blue/20 hover:shadow-lg hover:shadow-vk-blue/5 transition-all duration-300"
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
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-vk-blue transition-colors">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-sm text-slate-500 mt-0.5">{project.subtitle}</p>
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

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600"
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
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-vk-blue transition-colors"
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
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-vk-blue transition-colors"
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
            className="mt-12 text-center py-16 rounded-2xl border border-dashed border-slate-200"
          >
            <FileCode2 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">Проекты скоро появятся</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
