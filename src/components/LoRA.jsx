import { motion } from 'framer-motion'
import { Layers, Download, RefreshCw, GitBranch } from 'lucide-react'

const steps = [
  {
    icon: GitBranch,
    title: 'Выбор базы',
    description: 'Определяю исходную модель и концепцию — что именно хочу обучить (стиль, персонаж, объект).',
  },
  {
    icon: Layers,
    title: 'Подготовка данных',
    description: 'Собираю и размечаю датасет: от 15 до 100+ изображений с подписями.',
  },
  {
    icon: RefreshCw,
    title: 'Обучение',
    description: 'Запускаю тренировку на GPU. Экспериментирую с параметрами: rank, learning rate, шаги.',
  },
  {
    icon: Download,
    title: 'Экспорт и тест',
    description: 'Готовую LoRA загружаю в генератор и тестирую на разных промптах. Итерация при необходимости.',
  },
]

export default function LoRA() {
  return (
    <section
      id="lora"
      className="section-lora relative py-24 sm:py-32 overflow-hidden bg-[var(--section-bg)]"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-lora-accent/5 blur-[200px]" />
      <div className="absolute bottom-20 left-10 h-[300px] w-[300px] rounded-full bg-blue-400/5 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(rgba(88, 166, 255, 1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lora-accent/15 text-lora-accent text-xs font-semibold tracking-wider uppercase mb-4">
            LoRA
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--section-text)] tracking-tight">
                LoRA модели
              </h2>
              <p className="mt-4 text-lg text-[var(--section-text-secondary)] max-w-2xl">
                Low-Rank Adaptation — дообучаю модели эффективно, без полного fine-tuning&apos;a.
                Меньше ресурсов, те же возможности.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              {/* Step connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-[calc(100%-3rem)] h-px bg-gradient-to-r from-lora-accent/30 to-transparent" />
              )}

              <div className="p-6 rounded-2xl bg-[var(--section-card-bg)] border border-[var(--section-border)] hover:border-lora-accent/15 transition-all duration-300">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lora-accent/10 text-lora-accent text-sm font-bold">
                    {i + 1}
                  </span>
                  <step.icon className="w-5 h-5 text-lora-accent/60" />
                </div>

                <h3 className="text-base font-semibold text-[var(--section-text)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--section-text-secondary)] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-[var(--section-card-bg)]/50 border border-[var(--section-border)]"
        >
          <p className="text-sm text-[var(--section-text-secondary)] mb-3">Инструменты, с которыми работаю:</p>
          <div className="flex flex-wrap gap-2">
            {['Automatic1111', 'ComfyUI', 'Kohya', 'Flux', 'Python', 'CUDA'].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-lora-accent/10 text-lora-accent/80"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
