// Данные о проектах

export const projects = [
  {
    id: 'light-whisper',
    title: 'LightWhisper',
    subtitle: 'Start minimized to tray',
    description: 'Форк open-source speech-to-text программы. Добавил режим скрытого запуска в трей, настроил облачную сборку через GitHub Actions. Результат: программа стартует с Windows и незаметно сидит в трее — никаких вспышек окна.',
    tags: ['Rust', 'Tauri', 'React', 'TypeScript', 'GitHub Actions', 'Open Source'],
    links: {
      github: 'https://github.com/igetpaid/light-whisper',
      release: 'https://github.com/igetpaid/light-whisper/releases/latest',
    },
    status: 'active',
    image: null, // будет добавлено позже
    featured: true,
  },
  // Добавляй новые проекты сюда:
  // {
  //   id: 'my-game',
  //   title: 'My Game',
  //   subtitle: 'Короткое описание',
  //   description: 'Подробное описание проекта...',
  //   tags: ['Unity', 'C#', 'Blender'],
  //   links: { github: '...' },
  //   status: 'active',
  //   image: null,
  //   featured: false,
  // },
]
