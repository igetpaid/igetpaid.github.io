// Цветовые схемы для каждой секции
// Применяются через CSS-классы и динамически меняют тему сайта
//
// ВАЖНО: headerStyle удалён намеренно.
// Стиль хедера (тёмный/светлый) теперь определяется ТОЛЬКО isDarkMode.
// Подробнее: .opencode/references/lessons.md — Lesson 11

export const sections = [
  {
    id: 'hero',
    label: 'Главная',
    themeClass: 'section-hero',
    accent: '#2680EB',
  },
  {
    id: 'gamedev',
    label: 'GameDev',
    themeClass: 'section-gamedev',
    accent: '#ff6b9d',
  },
  {
    id: 'ai',
    label: 'AI & Нейросети',
    themeClass: 'section-ai',
    accent: '#4f8cff',
  },
  {
    id: 'lora',
    label: 'LoRA',
    themeClass: 'section-lora',
    accent: '#58a6ff',
  },
  {
    id: 'projects',
    label: 'Проекты',
    themeClass: 'section-projects',
    accent: '#2680EB',
  },
  {
    id: 'gallery',
    label: 'Галерея',
    themeClass: 'section-gallery',
    accent: '#2680EB',
  },
  {
    id: 'blog',
    label: 'Блог',
    themeClass: 'section-blog',
    accent: '#d97706',
  },
  {
    id: 'contacts',
    label: 'Контакты',
    themeClass: 'section-contacts',
    accent: '#2680EB',
  },
]
