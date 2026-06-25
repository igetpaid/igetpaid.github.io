// Цветовые схемы для каждой секции
// Применяются через CSS-классы и динамически меняют тему сайта

export const sections = [
  {
    id: 'hero',
    label: 'Главная',
    themeClass: 'section-hero',
    accent: '#2680EB',
    bgColor: '#ffffff',
    textColor: '#1a1a2e',
    headerStyle: 'light', // светлый хедер (темный текст, прозрачный фон)
  },
  {
    id: 'gamedev',
    label: 'GameDev',
    themeClass: 'section-gamedev',
    accent: '#ff6b9d',
    bgColor: '#0f0a1a',
    textColor: '#ffffff',
    headerStyle: 'dark', // темный хедер (белый текст)
  },
  {
    id: 'ai',
    label: 'AI & Нейросети',
    themeClass: 'section-ai',
    accent: '#4f8cff',
    bgColor: '#0a0a23',
    textColor: '#ffffff',
    headerStyle: 'dark',
  },
  {
    id: 'lora',
    label: 'LoRA',
    themeClass: 'section-lora',
    accent: '#58a6ff',
    bgColor: '#0d1117',
    textColor: '#f0f6fc',
    headerStyle: 'dark',
  },
  {
    id: 'projects',
    label: 'Проекты',
    themeClass: 'section-projects',
    accent: '#2680EB',
    bgColor: '#ffffff',
    textColor: '#1a1a2e',
    headerStyle: 'light',
  },
  {
    id: 'gallery',
    label: 'Галерея',
    themeClass: 'section-gallery',
    accent: '#2680EB',
    bgColor: '#f8fafc',
    textColor: '#1a1a2e',
    headerStyle: 'light',
  },
  {
    id: 'blog',
    label: 'Блог',
    themeClass: 'section-blog',
    accent: '#d97706',
    bgColor: '#fefcf5',
    textColor: '#1a1a2e',
    headerStyle: 'light',
  },
  {
    id: 'contacts',
    label: 'Контакты',
    themeClass: 'section-contacts',
    accent: '#2680EB',
    bgColor: '#ffffff',
    textColor: '#1a1a2e',
    headerStyle: 'light',
  },
]
