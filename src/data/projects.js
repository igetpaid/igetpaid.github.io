// Данные о проектах

export const categories = [
  { id: 'all', label: 'Все' },
  { id: 'gamedev', label: 'GameDev' },
  { id: 'ai', label: 'AI' },
  { id: 'utils', label: 'Utils' },
]

export const projects = [
  {
    id: 'light-whisper',
    slug: 'light-whisper',
    category: 'ai',
    title: 'LightWhisper',
    subtitle: 'Start minimized to tray',
    description: 'Форк open-source speech-to-text программы. Добавил режим скрытого запуска в трей, настроил облачную сборку через GitHub Actions. Результат: программа стартует с Windows и незаметно сидит в трее — никаких вспышек окна.',
    tags: ['Rust', 'Tauri', 'React', 'TypeScript', 'GitHub Actions', 'Open Source'],
    links: {
      github: 'https://github.com/igetpaid/light-whisper',
      release: 'https://github.com/igetpaid/light-whisper/releases/latest',
    },
    status: 'active',
    image: '/gallery/lightwhisper/preview.jpg',
    featured: true,
  },
  {
    id: 'hardreset',
    slug: 'hardreset',
    category: 'gamedev',
    title: 'Hard Reset',
    subtitle: 'Симулятор компьютерного мастера',
    description: '2D-симулятор компьютерного мастера с элементами драмы на Godot 4. Чини компьютеры, зарабатывай опыт, перепроходи турнир — 2 концовки. Drag-and-drop, 5 уникальных персонажей, анимации, автосохранение.',
    tags: ['Godot 4', 'GDScript', 'Photoshop', 'GameDev'],
    links: {},
    status: 'completed',
    image: null,
    screenshots: [
      '/gallery/hardreset/главное меню.jpg',
      '/gallery/hardreset/заставка начальная 1.png',
      '/gallery/hardreset/заставка начальная 2.png',
      '/gallery/hardreset/заставка начальная 3 - добро пожаловть в мастерсую.png',
      '/gallery/hardreset/первый клиент.jpg',
      '/gallery/hardreset/минигра - замена старого вентилятора.jpg',
      '/gallery/hardreset/уникальный дизайн корпуса 1.jpg',
      '/gallery/hardreset/уникальный дизайн корпуса 2.jpg',
      '/gallery/hardreset/уникальный дизайн корпуса 3.jpg',
      '/gallery/hardreset/уникальный дизайн корпуса 4.jpg',
      '/gallery/hardreset/приглашение на птовроный турнир - ближе к концовке.jpg',
      '/gallery/hardreset/финальная минигра - нужно воремя нажать ЛКМ чтобы убить противника .png',
      '/gallery/hardreset/проигры в финальной минигре.png',
    ],
    featured: true,
  },
]
