import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow">
      <ChevronDown className="w-5 h-5 opacity-50" />
      <ChevronDown className="w-5 h-5 -mt-4 opacity-30" />
    </div>
  )
}
