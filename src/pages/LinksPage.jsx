import { Link } from 'react-router'
import { motion } from 'motion/react'
import BemCasado from '../components/BemCasado'
import { Arrow, Instagram, WhatsApp } from '../components/icons'
import { ease } from '../components/ui'
import { AUTORA, INSTAGRAM, INSTAGRAM_URL, whatsappHref } from '../config'
import { EBOOKS } from '../data/ebooks'
import { usePageMeta } from '../hooks'

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

const MotionLink = motion.create(Link)

function LinkButton({ to, href, children, className = 'bg-paper text-ink hover:bg-white', icon }) {
  const props = {
    variants: item,
    className: `group flex items-center gap-4 w-full min-h-[72px] px-4 sm:px-5 py-3 rounded-sm transition-colors ${className}`,
  }
  const content = (
    <>
      <span className="shrink-0 w-11 h-11 flex items-center justify-center">{icon}</span>
      <span className="flex-1 text-center leading-snug">{children}</span>
      <Arrow className="shrink-0 w-4 h-4 mr-3.5 opacity-40 transition-transform group-hover:translate-x-1 group-hover:opacity-80" />
    </>
  )
  return to
    ? <MotionLink to={to} {...props}>{content}</MotionLink>
    : <motion.a href={href} target="_blank" rel="noopener" {...props}>{content}</motion.a>
}

export default function LinksPage() {
  usePageMeta(`${AUTORA} · Links`, `Ebooks, encomendas e contato da ${AUTORA}, confeiteira e professora de confeitaria.`)

  // Em produção o WhatsApp só aparece com o número preenchido em src/config.js
  const zap = whatsappHref() ?? (import.meta.env.DEV ? '#' : null)

  return (
    <div className="grain min-h-[100svh] bg-ink text-paper flex flex-col items-center px-4 pt-14 pb-10">
      <motion.main
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden"
        animate="show"
        className="w-full max-w-[560px] flex flex-col items-center"
      >
        <motion.div variants={item} className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-[3px] border-paper p-1.5">
          <img src="/foto-autora.png" alt={AUTORA} className="w-full h-full rounded-full object-cover object-top bg-rose-soft" />
        </motion.div>

        <motion.h1 variants={item} className="mt-6 text-[2.1rem] sm:text-4xl text-center leading-tight">{AUTORA}</motion.h1>
        <motion.p variants={item} className="mt-2 label text-paper/80 text-center">
          Confeitaria artesanal &amp; ebooks
        </motion.p>

        <div className="mt-9 w-full flex flex-col gap-3.5">
          {EBOOKS.map((e) => (
            <LinkButton key={e.slug} to={e.path} icon={<BemCasado className="w-11 text-ink" />}>
              <span className="block label text-[10px] text-rose">Ebook</span>
              <span className="font-bold">{e.titulo}</span>
            </LinkButton>
          ))}

          {zap && (
            <LinkButton href={zap} className="bg-zap text-white hover:brightness-110" icon={<WhatsApp className="w-7 h-7" />}>
              <span className="font-bold">Fale comigo no WhatsApp</span>
              {zap === '#' && <span className="block text-[11px] opacity-80">(preencha o número em src/config.js)</span>}
            </LinkButton>
          )}

          <LinkButton to="/" icon={<span className="font-serif text-2xl text-rose">D</span>}>
            <span className="font-bold">Encomendas e portfólio</span>
          </LinkButton>

          <LinkButton href={INSTAGRAM_URL} icon={<Instagram className="w-6 h-6 text-rose" />}>
            <span className="font-bold">Instagram</span>
          </LinkButton>
        </div>

        <motion.div variants={item} className="mt-10 flex items-center gap-7">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" className="text-paper/80 hover:text-paper">
            <Instagram className="w-7 h-7" />
          </a>
          {zap && (
            <a href={zap} target="_blank" rel="noopener" aria-label="WhatsApp" className="text-paper/80 hover:text-paper">
              <WhatsApp className="w-6 h-6" />
            </a>
          )}
        </motion.div>

        <motion.p variants={item} className="mt-12 text-xs text-paper/40">@{INSTAGRAM}</motion.p>
      </motion.main>
    </div>
  )
}
