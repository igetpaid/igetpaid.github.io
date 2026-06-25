import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Gamepad2, Code2, Sparkles, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'

const gameDevProjects = projects.filter((p) =>
  p.tags.some((t) => t.toLowerCase().includes('gamedev') || t === 'Godot 4')
)

const highlights = [
  {
    icon: Code2,
    text: 'Пишу на C#, Rust, Python',
  },
  {
    icon: Gamepad2,
    text: 'Делаю механики и оптимизацию',
  },
  {
    icon: Sparkles,
    text: 'Генерирую арты и текстуры через AI',
  },
]

export default function GameDev() {
  return (
    <section
      id="gamedev"
      className="section-gamedev relative py-24 sm:py-32 overflow-hidden bg-[var(--section-bg)]"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gamedev-accent/10 blur-[150px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-gamedev-secondary/10 blur-[150px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gamedev-accent/15 text-gamedev-accent text-xs font-semibold tracking-wider uppercase mb-4">
            GameDev
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Игры, которые я делаю
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            От проектов в одиночку до командных — всё с душой и вниманием к деталям.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <item.icon className="w-5 h-5 text-gamedev-accent shrink-0" />
              <span className="text-sm text-slate-300">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {gameDevProjects.map((game) => (
            <Link
              key={game.id}
              to={`/gamedev/${game.id}`}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
            >
              {/* Placeholder image area */}
              <div className="aspect-video rounded-xl bg-gradient-to-br from-gamedev-accent/20 to-gamedev-secondary/20 mb-4 flex items-center justify-center overflow-hidden">
                {game.image ? (
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Gamepad2 className="w-12 h-12 text-white/20 group-hover:scale-110 transition-transform" />
                )}
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gamedev-accent transition-colors">
                    {game.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400 line-clamp-2">{game.subtitle}</p>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-gamedev-accent/15 text-gamedev-accent whitespace-nowrap">
                  {game.status === 'completed' ? 'Завершён' : 'В разработке'}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {game.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Empty state */}
        {gameDevProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center py-16 rounded-2xl border border-dashed border-white/10"
          >
            <Gamepad2 className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">Скоро здесь появятся игровые проекты</p>
            <p className="text-slate-600 text-sm mt-1">А пока — изучаю движки и механики</p>
          </motion.div>
        )}

        {/* Link to full page */}
        {gameDevProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/gamedev"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gamedev-accent/15 text-gamedev-accent font-medium hover:bg-gamedev-accent/25 transition-all duration-200"
            >
              Все проекты GameDev
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
