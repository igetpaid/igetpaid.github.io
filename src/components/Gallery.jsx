import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Album } from 'lucide-react'
import { albums } from '../data/gallery'

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const image = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              className="absolute left-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Предыдущая"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              className="absolute right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Следующая"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="max-w-4xl max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image?.src || '/placeholder.svg'}
            alt={image?.title || ''}
            className="w-full h-full object-contain rounded-lg"
          />
          {image?.title && (
            <p className="mt-3 text-center text-sm text-white/70">{image.title}</p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function GalleryImage({ image }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[var(--section-card-bg)]">
        <ImageIcon className="w-8 h-8 text-[var(--section-muted)]" />
      </div>
    )
  }

  return (
    <img
      src={image.src}
      alt={image.title || ''}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
      onError={() => setErrored(true)}
    />
  )
}

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState(albums[0]?.id || null)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const currentAlbum = albums.find((a) => a.id === activeAlbum)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (!currentAlbum) return
    setLightboxIndex((prev) => (prev + 1) % currentAlbum.images.length)
  }

  const goPrev = () => {
    if (!currentAlbum) return
    setLightboxIndex((prev) =>
      prev === 0 ? currentAlbum.images.length - 1 : prev - 1
    )
  }

  return (
    <section
      id="gallery"
      className="section-gallery relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--section-accent)]/10 text-[var(--section-accent)] text-xs font-semibold tracking-wider uppercase mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--section-text)] tracking-tight">
            Галерея
          </h2>
          <p className="mt-4 text-lg text-[var(--section-text-secondary)] max-w-2xl">
            Арты, скриншоты, визуальные эксперименты.
          </p>
        </motion.div>

        {albums.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center py-16 rounded-2xl border border-dashed border-[var(--section-border)]"
          >
            <ImageIcon className="w-12 h-12 text-[var(--section-muted)] mx-auto mb-4" />
            <p className="text-[var(--section-text-secondary)] text-lg">Галерея пуста</p>
            <p className="text-[var(--section-text-secondary)] text-sm mt-1">
              Добавь изображения в <code className="text-xs bg-[var(--section-card-bg)] px-1.5 py-0.5 rounded">public/gallery/</code>
            </p>
          </motion.div>
        ) : (
          <>
            {/* Album tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {albums.map((album) => (
                <button
                  key={album.id}
                  onClick={() => { setActiveAlbum(album.id); setLightboxIndex(null) }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeAlbum === album.id
                      ? 'bg-[var(--section-accent)] text-white shadow-md shadow-[var(--section-accent)]/20'
                      : 'bg-[var(--section-card-bg)] text-[var(--section-text)] border border-[var(--section-border)] hover:border-[var(--section-accent)]/30 hover:text-[var(--section-accent)]'
                  }`}
                >
                  <Album className="w-4 h-4" />
                  {album.title}
                </button>
              ))}
            </motion.div>

            {/* Image grid */}
            {currentAlbum && (
              <motion.div
                key={activeAlbum}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <p className="text-sm text-[var(--section-text-secondary)] mb-4">{currentAlbum.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentAlbum.images.map((image, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="group aspect-square rounded-xl overflow-hidden bg-[var(--section-card-bg)] border border-[var(--section-border)] hover:border-[var(--section-accent)]/30 hover:shadow-lg transition-all duration-200"
                    >
                      <GalleryImage image={image} />
                      {image.title && (
                        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-xs text-white truncate">{image.title}</p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && currentAlbum && (
        <Lightbox
          images={currentAlbum.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  )
}
