import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { Close, Menu } from './icons'
import { ease } from './ui'
import { AUTORA } from '../config'

/* Cabeçalho fixo. links = [[href, rótulo]], cta = { href, label } */
export default function Header({ links = [], cta }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-sm transition-[border-color] ${scrolled || open ? 'border-b border-line' : 'border-b border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="font-serif text-[1.35rem] leading-none text-ink">{AUTORA}</Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-ink-2 hover:text-rose transition-colors">{label}</a>
          ))}
          {cta && (
            <a href={cta.href} {...(/^https?:/.test(cta.href) ? { target: '_blank', rel: 'noopener' } : {})}
              className="rounded-sm bg-ink text-paper px-4 py-2 text-sm font-bold hover:bg-rose transition-colors">
              {cta.label}
            </a>
          )}
        </nav>

        <button onClick={() => setOpen((o) => !o)} className="md:hidden -mr-2 p-2" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3, ease }}
            className="md:hidden overflow-hidden border-t border-line"
          >
            <div className="px-5 py-4 flex flex-col">
              {links.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 border-b border-line text-lg">{label}</a>
              ))}
              {cta && (
                <a href={cta.href} onClick={() => setOpen(false)} className="mt-4 rounded-sm bg-ink text-paper text-center py-3 font-bold">{cta.label}</a>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
