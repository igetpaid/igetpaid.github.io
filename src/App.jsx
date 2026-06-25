import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import LandingPage from './pages/LandingPage'
import GameDevPage from './pages/GameDevPage'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gamedev" element={<GameDevPage />} />
          <Route path="/gamedev/:projectId" element={<ProjectPage />} />
          {/* TODO: /ai, /lora, /projects, /gallery, /blog, /contacts — when pages are ready */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-[var(--section-bg)] flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="text-4xl font-bold text-[var(--section-text)] mb-2">404</h1>
                  <p className="text-[var(--section-text-secondary)]">Страница не найдена</p>
                  <a href="/" className="mt-4 inline-block text-[var(--section-accent)] hover:underline">
                    На главную
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
