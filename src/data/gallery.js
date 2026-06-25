// Данные галереи
// Инструкция: добавляй новые альбомы в массив albums
// Картинки клади в public/gallery/название-альбома/

export const albums = [
  {
    id: 'light-whisper',
    title: 'LightWhisper',
    description: 'Скриншоты и арты к проекту LightWhisper',
    cover: '/gallery/light-whisper/cover.jpg',
    images: [
      { src: '/gallery/light-whisper/screenshot-1.jpg', title: 'Интерфейс приложения' },
      { src: '/gallery/light-whisper/screenshot-2.jpg', title: 'Настройки запуска' },
    ],
  },
  // Пример добавления нового альбома:
  // {
  //   id: 'game-dev-art',
  //   title: 'GameDev Art',
  //   description: 'Скриншоты игровых проектов',
  //   cover: '/gallery/game-dev-art/cover.jpg',
  //   images: [
  //     { src: '/gallery/game-dev-art/screenshot-1.jpg', title: 'Геймплей' },
  //   ],
  // },
]
