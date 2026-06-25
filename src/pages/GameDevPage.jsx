import { Link } from 'react-router-dom'
import { ArrowLeft, Gamepad2, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PreviewSlideshow from '../components/PreviewSlideshow'
import { projects } from '../data/projects'

const hardresetPreviews = [
  '/gallery/hardreset/preview/1 - главное меню.jpg',
  '/gallery/hardreset/preview/2 - заставка начальная 2.png',
  '/gallery/hardreset/preview/3 - уникальный дизайн корпуса 1.jpg',
  '/gallery/hardreset/preview/4 - минигра - замена старого вентилятора.jpg',
  '/gallery/hardreset/preview/5 - финальная минигра - нужно воремя нажать ЛКМ чтобы убить противника .png',
]

export default function GameDevPage() {
  const gameDevProjects = projects.filter((p) =>
    p.tags.some((t) => t.toLowerCase().includes('gamedev') || t === 'Godot 4')
  )

  return (
    <div className="min-h-screen section-gamedev bg-[var(--section-bg)]">
      <Header />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--section-text-secondary)] hover:text-[var(--section-accent)] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-8 h-8 text-[var(--section-accent)]" />
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--section-text)]">
                GameDev
              </h1>
            </div>
            <p className="text-lg text-[var(--section-text-secondary)] max-w-2xl">
              Мои игровые проекты — от небольших прототипов до полноценных игр на Godot.
              Разработка, дизайн, анимации, звук — всё делаю сам.
            </p>
          </div>

          {/* Project cards */}
          {gameDevProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[var(--section-text-secondary)] text-lg">
                Пока нет игровых проектов в этом разделе.
              </p>
            </div>
          ) : (
            <div className="grid gap-8">
              {gameDevProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-[var(--section-card-bg)] border border-[var(--section-border)] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[var(--section-accent)]/30 hover:shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    {/* Preview slideshow */}
                    <div className="w-full sm:w-48 h-32 rounded-xl bg-gradient-to-br from-[var(--section-accent)]/20 to-[var(--section-accent-secondary)]/20 shrink-0 overflow-hidden">
                      {project.id === 'hardreset' ? (
                        <PreviewSlideshow
                          images={hardresetPreviews}
                          interval={2000}
                          className="w-full h-full"
                        />
                      ) : project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Gamepad2 className="w-12 h-12 text-[var(--section-accent)]/40" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold text-[var(--section-text)] group-hover:text-[var(--section-accent)] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm font-medium text-[var(--section-accent-secondary)] mt-1">
                        {project.subtitle}
                      </p>
                      <p className="mt-3 text-[var(--section-text-secondary)] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--section-accent)]/10 text-[var(--section-accent)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 mt-5">
                        <Link
                          to={`/gamedev/${project.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--section-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Подробнее об игре
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
