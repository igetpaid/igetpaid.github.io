import { motion } from 'framer-motion'
import { MessageCircle, Send, Mail, Code2 } from 'lucide-react'
import GitHubIcon from './icons/GitHubIcon'

const contacts = [
  {
    icon: MessageCircle,
    label: 'VK',
    handle: 'vk.ru/igor_tengel',
    href: 'https://vk.ru/igor_tengel',
    iconColor: 'text-vk-blue',
  },
  {
    icon: Code2,
    label: 'GitHub',
    handle: '@igetpaid',
    href: 'https://github.com/igetpaid',
    iconColor: 'text-[var(--section-text)]',
    customIcon: 'github',
  },
  {
    icon: Send,
    label: 'Telegram',
    handle: '@igor_tengel',
    href: 'https://t.me/igor_tengel',
    iconColor: 'text-sky-500',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'igetpaid@ya.ru',
    href: 'mailto:igetpaid@ya.ru',
    iconColor: 'text-rose-500',
  },
]

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="section-contacts relative py-24 sm:py-32 overflow-hidden bg-[var(--section-bg)]"
    >
      {/* Decorative: smooth gradient blobs (no CSS blur needed) */}
      <div className="absolute -left-60 bottom-10 h-[700px] w-[700px] transform-gpu" style={{ background: 'radial-gradient(circle closest-side, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / var(--blob-a)) 0%, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / 0) 100%)' }} />
      <div className="absolute -right-60 -top-40 h-[600px] w-[600px] transform-gpu" style={{ background: 'radial-gradient(circle closest-side, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / var(--blob-a)) 0%, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / 0) 100%)' }} />
      <div className="absolute right-1/4 top-1/3 h-[250px] w-[250px] transform-gpu" style={{ background: 'radial-gradient(circle closest-side, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / var(--blob-a)) 0%, hsl(var(--blob-h) var(--blob-s) var(--blob-l) / 0) 100%)' }} />

      {/* Decorative: diagonal accent lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20%" y1="0" x2="40%" y2="100%" stroke="#2680EB" strokeWidth="1" />
        <line x1="75%" y1="0" x2="55%" y2="100%" stroke="#2680EB" strokeWidth="1" />
      </svg>

      {/* Decorative: floating dots */}
      <div className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-vk-blue/35 dark:bg-vk-blue/45" />
      <div className="absolute bottom-1/3 right-[12%] w-3.5 h-3.5 rounded-full bg-vk-blue/30 dark:bg-vk-blue/40" />
      <div className="absolute top-3/4 left-[30%] w-2.5 h-2.5 rounded-full bg-vk-blue/35 dark:bg-vk-blue/45" />
      <div className="absolute bottom-1/4 right-[30%] w-3 h-3 rounded-full bg-vk-blue/30 dark:bg-vk-blue/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--section-text)] tracking-tight">
            Связаться со мной
          </h2>
          <p className="mt-4 text-lg text-[var(--section-text-secondary)] max-w-xl mx-auto">
            Если хочешь что-то предложить, обсудить или просто сказать «привет» — 
            пиши в любой из этих каналов.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group flex items-center gap-4 p-5 rounded-xl bg-vk-blue/10 hover:bg-vk-blue/20 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] transition-all duration-200 text-left`}
            >
              <div className={`w-12 h-12 rounded-xl bg-white/60 dark:bg-black/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {contact.customIcon === 'github' ? (
                <GitHubIcon className={`w-5 h-5 ${contact.iconColor}`} />
              ) : (
                <contact.icon className={`w-5 h-5 ${contact.iconColor}`} />
              )}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--section-text)]">{contact.label}</p>
                <p className="text-sm text-[var(--section-text-secondary)]">{contact.handle}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-sm text-[var(--section-text-secondary)]"
        >
          Открыт к сотрудничеству и интересным проектам
        </motion.p>
      </div>
    </section>
  )
}
