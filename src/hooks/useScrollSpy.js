import { useEffect, useRef } from 'react'
import { sections } from '../utils/sectionThemes'
import { useTheme } from '../context/ThemeContext'

export function useScrollSpy() {
  const { updateSection } = useTheme()
  const observerRef = useRef(null)

  useEffect(() => {
    // Создаём наблюдатель пересечений
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            const section = sections.find((s) => s.id === sectionId)
            if (section) {
              updateSection(section.id)
            }
          }
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px', // срабатывает когда секция в центре 20% экрана
        threshold: [0],
      }
    )

    // Наблюдаем все секции
    const sectionElements = document.querySelectorAll('section[id]')
    sectionElements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [updateSection])
}
