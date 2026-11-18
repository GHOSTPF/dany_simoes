import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Cake, Instagram, WhatsApp } from '../components/icons'
import { ease } from '../components/ui'
import { AUTORA, INSTAGRAM, INSTAGRAM_URL, whatsappHref } from '../config'
import { EBOOKS } from '../data/ebooks'
import { usePageMeta } from '../hooks'

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const btnBase = 'group relative flex items-center gap-4 w-full min-h-[76px] px-5 py-4 rounded-xl font-medium text-center transition-shadow'

const MotionLink = motion.create(Link)

function LinkButton({ to, href, children, className = '', icon }) {
  const props = {
    variants: item,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    className: `${btnBase} ${className}`,
  }
  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="flex-1 text-[15px] sm:text-base leading-snug">{children}</span>
      {/* espaço simétrico ao ícone para manter o texto centralizado */}
      {icon && <span aria-hidden className="shrink-0 w-11" />}
    </>
  )
  return to
    ? <MotionLink to={to} {...props}>{content}</MotionLink>
    : <motion.a href={href} target="_blank" rel="noopener" {...props}>{content}</motion.a>
}

export default function LinksPage() {
  usePageMeta(`${AUTORA} — Links`, `Ebooks, encomendas e contato da ${AUTORA}, confeiteira e professora de confeitaria.`)

  // Em produção o WhatsApp só aparece com o número preenchido em src/config.js
  const zap = whatsappHref() ?? (import.meta.env.DEV ? '#' : null)

  return (
    <div className="min-h-[100svh] bg-choco-dark text-cream flex flex-col items-center px-4 py-12 sm:py-16 relative overflow-hidden">
      {/* brilho de fundo */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-rose-dark/20 blur-3xl" />

      <motion.main
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-[600px] flex flex-col items-center"
      >
        <motion.div variants={{ hidden: { opacity: 0, scale: 0.6 }, show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } } }}
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-cream p-1.5 shadow-card"
        >
          <img src="/foto-autora.png" alt={`Foto da ${AUTORA}`} className="w-full h-full rounded-full object-cover object-top ring-1 ring-choco/20" />
        </motion.div>

        <motion.h1 variants={item} className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-center">
          {AUTORA}<span className="text-gold">.</span>
        </motion.h1>
        <motion.p variants={item} className="mt-2 text-xs sm:text-sm uppercase tracking-[.18em] font-semibold text-center text-cream/85">
          Confeitaria artesanal &amp; ebooks de confeitaria
        </motion.p>

        <div className="mt-8 w-full flex flex-col gap-4">
          {EBOOKS.map((e) => (
            <LinkButton
              key={e.slug}
              to={e.path}
              className="bg-cream text-choco shadow-soft"
              icon={<img src={e.capa} alt="" className="w-11 h-11 rounded-lg object-cover" />}
            >
              <span className="block text-[11px] uppercase tracking-widest text-rose-dark font-semibold">Ebook</span>
              {e.titulo}
            </LinkButton>
          ))}

          {zap && (
            <LinkButton href={zap} className="bg-[#25D366] text-white shadow-soft" icon={<WhatsApp className="w-11 h-11 p-1.5" />}>
              Fale comigo no WhatsApp
              {zap === '#' && <span className="block text-[11px] opacity-80">(preencha o número em src/config.js)</span>}
            </LinkButton>
          )}

          <LinkButton to="/" className="bg-cream text-choco shadow-soft" icon={<Cake className="w-11 h-11 p-2 text-rose-dark" />}>
            Conheça meu trabalho
          </LinkButton>

          <LinkButton href={INSTAGRAM_URL} className="bg-cream text-choco shadow-soft" icon={<Instagram className="w-11 h-11 p-2 text-rose-dark" />}>
            Siga no Instagram @{INSTAGRAM}
          </LinkButton>
        </div>

        <motion.div variants={item} className="mt-10 flex items-center gap-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-gold transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          {zap && (
            <a href={zap} target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-gold transition-colors">
              <WhatsApp className="w-7 h-7" />
            </a>
          )}
        </motion.div>

        <motion.p variants={item} className="mt-10 text-xs text-cream/40">
          © {new Date().getFullYear()} {AUTORA}
        </motion.p>
      </motion.main>
    </div>
  )
}
