// Данные о проектах — ЕДИНЫЙ ИСТОЧНИК ПРАВДЫ: projectDetails.js
// Этот файл просто строит список карточек из projectDetails

import { projectDetails } from './projectDetails'

export const categories = [
  { id: 'all', label: 'Все' },
  { id: 'gamedev', label: 'GameDev' },
  { id: 'ai', label: 'AI' },
  { id: 'utils', label: 'Utils' },
]

// Порядок отображения проектов на главной
const projectOrder = ['light-whisper', 'hardreset']

export const projects = projectOrder
  .map((id) => projectDetails[id])
  .filter(Boolean)
  .map((p) => ({
    id: p.id,
    slug: p.id,
    category: p.category,
    title: p.title,
    subtitle: p.subtitle,
    description: p.description || p.about?.paragraphs?.join('\n') || '',
    tags: p.tags || [],
    date: p.date || null,
    links: p.links || {},
    status: p.status,
    image: p.screenshots?.[0]?.src || null,
    screenshots: (p.screenshots || []).map((s) => s.src),
  }))
