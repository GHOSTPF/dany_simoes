import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'motion/react'
import Preloader from './components/Preloader'
import Navbar, { ScrollProgress } from './components/Navbar'
import Hero from './components/Hero'
import { Bonus, Chapters, Gallery, Learn, Marquee, Pain, Solution } from './components/Sections'
import { About, Testimonials } from './components/About'
import { Faq, FinalCTA, Footer, Guarantee, Offer, StickyCTA, WhatsAppButton } from './components/Offer'

const MARQUEE_1 = ['Bem-casados', 'Pão de ló fofinho', 'Doce de leite', 'Calda perfeita', 'Laços caprichados', 'Encomendas de casamento']
const MARQUEE_2 = ['Receitas testadas', 'Precificação certa', 'Embalagem que encanta', 'Venda pelo Instagram', 'Garantia de 7 dias']

export default function App() {
  const [loading, setLoading] = useState(true)
  const done = useCallback(() => setLoading(false), [])

  useEffect(() => {
    document.documentElement.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Preloader key="preloader" onDone={done} />}</AnimatePresence>
      <ScrollProgress />
      <Navbar ready={!loading} />
      <Hero ready={!loading} />
      <main>
        <Pain />
        <Marquee items={MARQUEE_1} />
        <Solution />
        <Learn />
        <Chapters />
        <Bonus />
        <Gallery />
        <About />
        <Testimonials />
        <Marquee items={MARQUEE_2} reverse className="bg-choco text-cream rotate-1" />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </MotionConfig>
  )
}
