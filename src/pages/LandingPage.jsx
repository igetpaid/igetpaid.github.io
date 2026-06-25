import { useScrollSpy } from '../hooks/useScrollSpy'
import Header from '../components/Header'
import Hero from '../components/Hero'
import GameDev from '../components/GameDev'
import AI from '../components/AI'
import LoRA from '../components/LoRA'
import Projects from '../components/Projects'

import Blog from '../components/Blog'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

export default function LandingPage() {
  useScrollSpy()

  return (
    <div className="min-h-screen bg-[var(--section-bg)]">
      <Header />
      <main>
        <Hero />
        <GameDev />
        <AI />
        <LoRA />
        <Projects />
        <Blog />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}
