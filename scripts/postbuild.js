// Постбилд-скрипт для портфолио-сайта
import { copyFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = resolve(root, 'dist')

// 1. .htaccess для Apache/InfinityFree
const htaccessSrc = resolve(root, '.htaccess')
const htaccessDest = resolve(dist, '.htaccess')
if (existsSync(htaccessSrc)) {
  copyFileSync(htaccessSrc, htaccessDest)
  console.log('✓ .htaccess copied to dist/')
} else {
  console.warn('⚠ .htaccess not found, skipping')
}

// 2. 404.html = index.html для SPA-роутинга на GitHub Pages
// GitHub Pages не поддерживает .htaccess, поэтому для прямых ссылок
// вида /gamedev/hardreset отдаёт 404. Копируем index.html как 404.html —
// GitHub Pages отдаст его для любого несуществующего пути, а React Router
// прочитает URL и покажет правильную страницу.
const indexSrc = resolve(dist, 'index.html')
const notFoundDest = resolve(dist, '404.html')
if (existsSync(indexSrc)) {
  copyFileSync(indexSrc, notFoundDest)
  console.log('✓ 404.html created from index.html for GitHub Pages SPA fallback')
} else {
  console.warn('⚠ index.html not found in dist/, skipping 404.html')
}
