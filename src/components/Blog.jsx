import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Tag, ChevronDown, ChevronUp, BookOpen } from 'lucide-react'
import { blogPosts } from '../data/blog'

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null)

  return (
    <section
      id="blog"
      className="section-blog relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-20 -right-40 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold tracking-wider uppercase mb-4">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[--section-text] tracking-tight">
            Блог и мысли
          </h2>
          <p className="mt-4 text-lg text-[--section-text-secondary] max-w-2xl">
            Заметки о процессе, открытиях и просто интересные истории из разработки.
          </p>
        </motion.div>

        {/* Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 space-y-6"
        >
          {blogPosts.length === 0 && (
            <div className="text-center py-16 rounded-2xl border border-dashed border-[--section-border]">
              <BookOpen className="w-12 h-12 text-[--section-muted] mx-auto mb-4" />
              <p className="text-[--section-text-secondary] text-lg">Записей пока нет</p>
              <p className="text-[--section-text-secondary] text-sm mt-1">Скоро здесь появятся первые заметки</p>
            </div>
          )}

          {blogPosts.map((post) => {
            const isExpanded = expandedPost === post.id

            return (
              <article
                key={post.id}
                className="p-6 rounded-2xl bg-[--section-card-bg] border border-[--section-border] hover:border-amber-300/40 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-center gap-3 text-sm text-[--section-text-secondary] mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="text-[--section-muted]">·</span>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-amber-50 text-amber-700"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[--section-text]">{post.title}</h3>
                <p className="mt-2 text-sm text-[--section-text-secondary] leading-relaxed">{post.excerpt}</p>

                {/* Expand/collapse */}
                <button
                  onClick={() => setExpandedPost(isExpanded ? null : post.id)}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                >
                  {isExpanded ? 'Свернуть' : 'Читать дальше'}
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-[--section-border]"
                  >
                    <div className="text-sm text-[--section-text] leading-relaxed whitespace-pre-line">
                      {post.content}
                    </div>
                  </motion.div>
                )}
              </article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
