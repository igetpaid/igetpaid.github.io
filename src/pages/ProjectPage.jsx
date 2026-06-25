import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Gamepad2,
  Calendar,
  Clock,
  Monitor,
  Smartphone,
  Code2,
  CheckCircle2,
  Lightbulb,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Quote,
  Tag,
  BarChart3,
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VKIcon from '../components/icons/VKIcon'
import GitHubIcon from '../components/icons/GitHubIcon'
import { getProjectDetails } from '../data/projectDetails'

const SocialIcon = ({ url }) => {
  if (url.includes('vk.com')) return <VKIcon className="w-4 h-4" />
  if (url.includes('github.com')) return <GitHubIcon className="w-4 h-4" />
  return null
}

export default function ProjectPage() {
  const { projectId } = useParams()
  const project = getProjectDetails(projectId)

  const [selectedScreenshot, setSelectedScreenshot] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--section-bg)]">
        <Header />
        <main className="pt-32 text-center">
          <div className="mx-auto max-w-md px-4">
            <h1 className="text-2xl font-bold text-[var(--section-text)]">Проект не найден</h1>
            <p className="mt-2 text-[var(--section-text-secondary)]">
              Такого проекта нет или он был удалён.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-[var(--section-accent)] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const sectionClass = `section-${project.category}`
  const screenshots = project.screenshots || []

  const prevScreenshot = () => {
    setSelectedScreenshot((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }
  const nextScreenshot = () => {
    setSelectedScreenshot((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
    ]
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
  }

  return (
    <div className={`min-h-screen ${sectionClass} bg-[var(--section-bg)]`}>
      <Header />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Back link */}
          <Link
            to={`/${project.category}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--section-text-secondary)] hover:text-[var(--section-accent)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к {project.categoryLabel}
          </Link>

          {/* ─── Hero Section ─── */}
          <div className="mb-10">
            <div className="flex items-start gap-4 flex-wrap">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--section-text)] tracking-tight">
                {project.title}
              </h1>
              {project.version && (
                <span className="mt-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--section-accent)]/10 text-[var(--section-accent)] border border-[var(--section-accent)]/20">
                  v{project.version}
                </span>
              )}
            </div>
            <p className="text-lg sm:text-xl text-[var(--section-accent-secondary)] mt-2 font-medium">
              {project.subtitle}
            </p>
            <p className="mt-6 text-lg text-[var(--section-text-secondary)] leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Tags + Year + Platforms */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.tech && (
                <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--section-accent)]/10 text-[var(--section-accent)]">
                  {project.tech.engine} • {project.tech.language}
                </span>
              )}
              {project.platforms && project.platforms.includes('Android') && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <Smartphone className="w-3 h-3" />
                  Android
                </span>
              )}
              {project.platforms && project.platforms.includes('Windows') && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <Monitor className="w-3 h-3" />
                  Windows
                </span>
              )}
              {project.year && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--section-card-bg)] text-[var(--section-text-secondary)] border border-[var(--section-border)]">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              )}
              <span
                className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                  project.status === 'completed'
                    ? 'bg-emerald-500/10 text-emerald-500'
                    : 'bg-amber-500/10 text-amber-500'
                }`}
              >
                {project.status === 'completed' ? 'Завершён' : 'В разработке'}
              </span>
            </div>
          </div>

          {/* ─── Screenshot Gallery ─── */}
          {screenshots.length > 0 && (
            <div className="mb-14">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden bg-black/20 border border-[var(--section-border)]">
                <img
                  src={screenshots[selectedScreenshot].src}
                  alt={screenshots[selectedScreenshot].alt}
                  className="w-full aspect-video object-cover"
                />
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevScreenshot}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      aria-label="Предыдущий скриншот"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextScreenshot}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                      aria-label="Следующий скриншот"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                {/* Counter */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 text-white text-xs font-medium">
                  {selectedScreenshot + 1} / {screenshots.length}
                </div>
              </div>

              {/* Caption */}
              <div className="mt-2 text-center text-sm text-[var(--section-text-secondary)] italic">
                {screenshots[selectedScreenshot].alt}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                {screenshots.map((ss, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedScreenshot(i)}
                    className={`shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      i === selectedScreenshot
                        ? 'border-[var(--section-accent)] opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-90'
                    }`}
                  >
                    <img src={ss.src} alt={ss.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ─── Content Grid ─── */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Story */}
              {project.story && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-[var(--section-text)] mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 rounded-full bg-[var(--section-accent)]" />
                    {project.story.title}
                  </h2>
                  <div className="space-y-4">
                    {project.story.paragraphs.map((p, i) => (
                      <p key={i} className="text-[var(--section-text-secondary)] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Gameplay */}
              {project.gameplay && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-[var(--section-text)] mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 rounded-full bg-[var(--section-accent)]" />
                    {project.gameplay.title}
                  </h2>
                  <div className="space-y-4">
                    {project.gameplay.paragraphs.map((p, i) => (
                      <p key={i} className="text-[var(--section-text-secondary)] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                </motion.section>
              )}

              {/* Comments */}
              {project.comments && project.comments.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-[var(--section-text)] mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 rounded-full bg-[var(--section-accent)]" />
                    Комментарии
                  </h2>
                  <div className="space-y-4">
                    {project.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="p-5 rounded-xl bg-[var(--section-card-bg)] border border-[var(--section-border)]"
                      >
                        <div className="flex items-start gap-3">
                          <Quote className="w-5 h-5 text-[var(--section-accent)]/40 shrink-0 mt-1" />
                          <div className="flex-1 min-w-0">
                            <p className="text-[var(--section-text-secondary)] italic leading-relaxed">
                              «{comment.text}»
                            </p>
                            <div className="mt-3 flex items-center gap-3 flex-wrap">
                              <a
                                href={comment.authorLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--section-accent)] hover:underline"
                              >
                                <SocialIcon url={comment.authorLink} />
                                {comment.author}
                              </a>
                              <span className="text-xs text-[var(--section-muted)]">
                                {formatDate(comment.date)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Leave a comment stub */}
                  <button
                    onClick={() => alert('Форма комментариев появится позже')}
                    className="mt-6 w-full py-3 px-4 rounded-xl border-2 border-dashed border-[var(--section-border)] text-[var(--section-text-secondary)] text-sm font-medium hover:border-[var(--section-accent)]/40 hover:text-[var(--section-accent)] transition-colors"
                  >
                    + Оставить комментарий
                  </button>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech specs */}
              {project.tech && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-2xl bg-[var(--section-card-bg)] border border-[var(--section-border)]"
                >
                  <h3 className="text-lg font-bold text-[var(--section-text)] mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-[var(--section-accent)]" />
                    {project.tech.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-4 h-4 text-[var(--section-muted)]" />
                      <div>
                        <p className="text-xs text-[var(--section-muted)]">Движок</p>
                        <p className="text-sm font-medium text-[var(--section-text)]">
                          {project.tech.engine}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-[var(--section-muted)]" />
                      <div>
                        <p className="text-xs text-[var(--section-muted)]">Язык</p>
                        <p className="text-sm font-medium text-[var(--section-text)]">
                          {project.tech.language}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Tag className="w-4 h-4 text-[var(--section-muted)]" />
                      <div>
                        <p className="text-xs text-[var(--section-muted)]">Версия</p>
                        <p className="text-sm font-medium text-[var(--section-text)]">
                          {project.version || '—'}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Development stats */}
              {project.development && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 rounded-2xl bg-[var(--section-card-bg)] border border-[var(--section-border)]"
                >
                  <h3 className="text-lg font-bold text-[var(--section-text)] mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[var(--section-accent)]" />
                    {project.development.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[var(--section-muted)]" />
                      <div>
                        <p className="text-xs text-[var(--section-muted)]">Суммарное время</p>
                        <p className="text-sm font-medium text-[var(--section-text)]">
                          {project.development.stats?.totalTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Gamepad2 className="w-4 h-4 text-[var(--section-muted)]" />
                      <div>
                        <p className="text-xs text-[var(--section-muted)]">В редакторе Godot</p>
                        <p className="text-sm font-medium text-[var(--section-text)]">
                          {project.development.stats?.engineTime}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[var(--section-border)] space-y-2">
                      <p className="text-xs text-[var(--section-muted)]">Платформы</p>
                      <div className="flex flex-wrap gap-2">
                        {project.development.platforms?.map((p) => (
                          <span
                            key={p}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--section-accent)]/10 text-[var(--section-accent)]"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                      {project.development.note && (
                        <p className="text-xs text-[var(--section-muted)] italic mt-2">
                          {project.development.note}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Download */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-2xl bg-[var(--section-card-bg)] border border-[var(--section-border)]"
              >
                <h3 className="text-lg font-bold text-[var(--section-text)] mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-[var(--section-accent)]" />
                  Скачать игру
                </h3>

                <div className="space-y-3">
                  {/* Windows — заглушка */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <Monitor className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[var(--section-text)]">Windows</p>
                      <p className="text-xs text-[var(--section-muted)] line-through decoration-red-500/50">
                        {project.download?.note || 'Ссылка появится после публикации релиза'}
                      </p>
                    </div>
                  </div>

                  {/* Android — заглушка */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <Smartphone className="w-5 h-5 text-emerald-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[var(--section-text)]">Android (.apk)</p>
                      <p className="text-xs text-[var(--section-muted)] line-through decoration-red-500/50">
                        {project.download?.note || 'Ссылка появится после публикации релиза'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Links */}
              {Object.keys(project.links).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 rounded-2xl bg-[var(--section-card-bg)] border border-[var(--section-border)]"
                >
                  <h3 className="text-lg font-bold text-[var(--section-text)] mb-3">Ссылки</h3>
                  <div className="space-y-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[var(--section-accent)] hover:underline"
                      >
                        <Download className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* ─── Collapsible Details ─── */}
          {(project.gameplay?.features || project.challenges) && (
            <DetailsSection
              features={project.gameplay?.features}
              challenges={project.challenges}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

/* ─── Collapsible Details Section ─── */
function DetailsSection({ features, challenges }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="mt-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 rounded-xl bg-[var(--section-card-bg)] border border-[var(--section-border)] hover:border-[var(--section-accent)]/30 transition-colors group"
      >
        <span className="text-lg font-bold text-[var(--section-text)] group-hover:text-[var(--section-accent)] transition-colors">
          Подробности
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--section-muted)] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 space-y-8 overflow-hidden"
        >
          {/* Features */}
          {features && features.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-[var(--section-text)] mb-4 flex items-center gap-3">
                <span className="w-1 h-5 rounded-full bg-[var(--section-accent)]" />
                Особенности
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[var(--section-card-bg)] border border-[var(--section-border)]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--section-accent)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--section-text-secondary)]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {challenges && challenges.items && challenges.items.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-[var(--section-text)] mb-4 flex items-center gap-3">
                <span className="w-1 h-5 rounded-full bg-[var(--section-accent)]" />
                {challenges.title || 'Сложности и решения'}
              </h3>
              <div className="space-y-4">
                {challenges.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[var(--section-card-bg)] border border-[var(--section-border)]"
                  >
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[var(--section-text)] mb-1">
                          {item.problem}
                        </p>
                        <p className="text-sm text-[var(--section-text-secondary)]">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </section>
  )
}
