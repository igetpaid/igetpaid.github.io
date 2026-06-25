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
  {
    id: 'hardreset',
    title: 'HardReset!',
    subtitle: 'Симулятор компьютерного мастера',
    description: '2D-симулятор компьютерного мастера с элементами драмы на Godot 4. Чини компьютеры, зарабатывай опыт, перепроходи турнир — 2 концовки. Drag-and-drop, 5 уникальных персонажей, анимации, автосохранение.',
    tags: ['Godot 4', 'GDScript', 'Photoshop', 'GameDev'],
    links: {},
    status: 'completed',
    image: null,
    featured: true,
  },
]
