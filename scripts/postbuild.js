// Копирует .htaccess в dist после сборки
import { copyFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const src = resolve(root, '.htaccess')
const dest = resolve(root, 'dist', '.htaccess')

if (existsSync(src)) {
  copyFileSync(src, dest)
  console.log('✓ .htaccess copied to dist/')
} else {
  console.warn('⚠ .htaccess not found, skipping')
}
