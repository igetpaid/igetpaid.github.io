import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-[--section-border] bg-[--section-card-bg]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[--section-text-secondary]">
          © {currentYear} Игорь Тенгель
        </p>
        <p className="text-sm text-[--section-text-secondary] inline-flex items-center gap-1">
          Сделано с <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> 
          и открытым исходным кодом
        </p>
        <div className="flex items-center gap-4 text-sm text-[--section-text-secondary]">
          <a href="https://github.com/igetpaid" target="_blank" rel="noopener noreferrer" className="hover:text-vk-blue transition-colors">
            GitHub
          </a>
          <a href="https://vk.com/igetpaid" target="_blank" rel="noopener noreferrer" className="hover:text-vk-blue transition-colors">
            VK
          </a>
        </div>
      </div>
    </footer>
  )
}
