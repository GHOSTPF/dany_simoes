import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import { Close, Menu, Star } from './icons'
import { ease } from './ui'
import { AUTORA } from '../config'

const LINKS = [
  ['#aprender', 'O que vai aprender'],
  ['#conteudo', 'Conteúdo'],
  ['#autora', 'Sobre mim'],
  ['#faq', 'Dúvidas'],
]

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return <motion.div style={{ scaleX }} className="fixed top-0 inset-x-0 h-1 z-[70] origin-left bg-linear-to-r from-gold via-rose-dark to-gold" />
}

export default function Navbar({ ready }) {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 40)
    setHidden(y > 500 && y > prev && !open)
  })

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={{ y: -120 }}
      animate={{ y: ready ? (hidden ? -120 : 0) : -120 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* barra de oferta */}
      <motion.div
        animate={{ height: scrolled ? 0 : 'auto', opacity: scrolled ? 0 : 1 }}
        className="overflow-hidden bg-choco text-cream text-center text-xs sm:text-sm tracking-wide"
      >
        <p className="py-2 px-4 inline-flex items-center gap-2">
          <motion.span animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}>
            <Star className="w-4 h-4 text-gold" />
          </motion.span>
          <strong className="font-semibold">Oferta especial de lançamento</strong> por tempo limitado
        </p>
      </motion.div>

      <nav className={`transition-all duration-500 ${scrolled ? 'bg-cream/85 backdrop-blur-md shadow-soft text-choco' : 'text-cream'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
            {AUTORA}<motion.span className="text-gold inline-block" animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 2, repeat: Infinity }}>.</motion.span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href} className="relative group py-1">
                {label}
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-gold origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
            <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} href="#oferta" className="bg-gold text-choco-dark font-semibold px-5 py-2 rounded-full hover:bg-gold-light transition-colors">
              Garantir o meu
            </motion.a>
          </div>
          <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 -mr-2" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? 'x' : 'm'} className="block" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {open ? <Close className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-4 mt-2 rounded-3xl bg-cream text-choco shadow-card p-6 flex flex-col gap-4 text-lg"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease }}
          >
            {LINKS.map(([href, label], i) => (
              <motion.a key={href} href={href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                {label}
              </motion.a>
            ))}
            <a onClick={() => setOpen(false)} href="#oferta" className="bg-choco text-cream text-center font-semibold py-3 rounded-full">Garantir o meu</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
