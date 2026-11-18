import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'
import { MotionConfig } from 'motion/react'
import HomePage from './pages/HomePage'
import LinksPage from './pages/LinksPage'
import BemCasadoPage from './pages/ebooks/BemCasadoPage'

/* Ao trocar de página, volta pro topo (ou rola até a âncora, se houver #) */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/ebook/bem-casado" element={<BemCasadoPage />} />
          {/* novos ebooks: <Route path="/ebook/slug" element={<NovaPagina />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MotionConfig>
    </BrowserRouter>
  )
}
