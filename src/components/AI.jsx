import { motion } from 'framer-motion'
import { Brain, Microscope, Cpu, ArrowRight } from 'lucide-react'

const topics = [
  {
    icon: Microscope,
    title: 'Speech-to-Text',
    description: 'Локальное распознавание речи через Whisper. Собрал форк с улучшениями.',
    tags: ['Whisper', 'Tauri', 'Rust'],
  },
  {
    icon: Brain,
    title: 'LoRA & Fine-tuning',
    description: 'Обучение и дообучение моделей. Эксперименты с диффузионками и LLM.',
    tags: ['LoRA', 'Diffusion', 'Python'],
  },
  {
    icon: Cpu,
    title: 'Автоматизация с AI',
    description: 'Использую нейросети для генерации контента, кода и автоматизации рутины.',
    tags: ['GPT', 'CLI', 'Pipeline'],
  },
]

export default function AI() {
  return (
    <section
      id="ai"
      className="section-ai relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-ai-accent/10 blur-[200px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[150px]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(rgba(79, 140, 255, 1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-accent/15 text-ai-accent text-xs font-semibold tracking-wider uppercase mb-4">
            AI & Neural Networks
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Нейросети и AI
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            От локального speech-to-text до генерации изображений — 
            исследую и применяю современные модели на практике.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {topics.map((topic, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-ai-card border border-white/[0.06] hover:border-ai-accent/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-ai-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <topic.icon className="w-6 h-6 text-ai-accent" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{topic.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{topic.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {topic.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs font-medium bg-white/5 text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="#lora"
            className="inline-flex items-center gap-2 text-ai-accent hover:text-blue-300 font-medium transition-colors"
          >
            Подробнее про LoRA
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
