import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow">
      <ChevronDown className="w-[22px] h-[22px] opacity-50 text-[var(--section-text)] dark:text-white dark:opacity-60" />
      <ChevronDown className="w-[22px] h-[22px] -mt-4 opacity-30 text-[var(--section-text)] dark:text-white dark:opacity-40" />
    </div>
  )
}