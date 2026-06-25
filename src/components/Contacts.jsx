import { motion } from 'framer-motion'
import { MessageCircle, Send, Mail, Code2 } from 'lucide-react'
import GitHubIcon from './icons/GitHubIcon'

const contacts = [
  {
    icon: MessageCircle,
    label: 'VK',
    handle: '@igetpaid',
    href: 'https://vk.com/igetpaid',
    color: 'text-vk-blue',
    bgColor: 'bg-vk-blue/10',
    hoverBg: 'hover:bg-vk-blue/20',
  },
  {
    icon: Code2,
    label: 'GitHub',
    handle: '@igetpaid',
    href: 'https://github.com/igetpaid',
    color: 'text-slate-900',
    bgColor: 'bg-slate-100',
    hoverBg: 'hover:bg-slate-200',
    customIcon: 'github',
  },
  {
    icon: Send,
    label: 'Telegram',
    handle: '@igetpaid',
    href: '#',
    color: 'text-sky-500',
    bgColor: 'bg-sky-50',
    hoverBg: 'hover:bg-sky-100',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'igetpaid@ya.ru',
    href: 'mailto:igetpaid@ya.ru',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    hoverBg: 'hover:bg-rose-100',
  },
]

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="section-contacts relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-vk-blue/5 blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Связаться со мной
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
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
              className={`group flex items-center gap-4 p-5 rounded-xl ${contact.bgColor} ${contact.hoverBg} transition-all duration-200 text-left`}
            >
              <div className={`w-12 h-12 rounded-xl ${contact.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {contact.customIcon === 'github' ? (
                <GitHubIcon className={`w-5 h-5 ${contact.color}`} />
              ) : (
                <contact.icon className={`w-5 h-5 ${contact.color}`} />
              )}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{contact.label}</p>
                <p className="text-sm text-slate-500">{contact.handle}</p>
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
          className="mt-12 text-sm text-slate-400"
        >
          Открыт к сотрудничеству и интересным проектам
        </motion.p>
      </div>
    </section>
  )
}
