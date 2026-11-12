import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Card, Instagram, Lock, Pix, Plus, WhatsApp } from './icons'
import { Particles } from './Hero'
import { CTA, DrawCheck, Reveal, SectionTitle, SplitText, ease, inViewProps, stagger } from './ui'
import { AUTORA, EBOOK, INSTAGRAM, INSTAGRAM_URL, WHATSAPP_HREF } from '../config'

/* ---------------- OFERTA ---------------- */
const INCLUDES = [
  <>Ebook <strong>{EBOOK}</strong> completo</>,
  '7 capítulos com receitas e técnicas',
  'Bônus 1: Planilha de precificação',
  'Bônus 2: Guia de embalagens',
  'Bônus 3: Instagram que vende',
  'Acesso imediato no celular, tablet ou computador',
  'Garantia incondicional de 7 dias',
]

export function Offer() {
  return (
    <section id="oferta" className="py-20 md:py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-xl mx-auto">
        <SectionTitle kicker="Oferta de lançamento" title="Tudo isso pra você *hoje*" />

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 60, damping: 14 }}
          className="relative mt-12 rounded-[2rem] p-[3px] overflow-hidden shadow-card"
        >
          {/* borda com gradiente girando */}
          <motion.div
            aria-hidden
            className="absolute -inset-[60%]"
            style={{ background: 'conic-gradient(from 0deg, var(--color-gold), var(--color-rose-dark), var(--color-gold-light), var(--color-rose), var(--color-gold))' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          <div className="relative bg-white rounded-[calc(2rem-3px)] overflow-hidden">
            <div className="bg-choco text-cream text-center py-3 text-sm font-semibold uppercase tracking-wider">Acesso completo + bônus</div>
            <div className="p-7 sm:p-10">
              <motion.ul variants={stagger(0.1, 0.3)} {...inViewProps} className="space-y-3 text-choco/90">
                {INCLUDES.map((t, i) => (
                  <motion.li key={i} variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }} className="flex gap-3">
                    <DrawCheck className="w-6 h-6 shrink-0 text-cta" delay={0.4 + i * 0.1} />
                    <span>{t}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-8 text-center border-t border-dashed border-choco/15 pt-8">
                <p className="text-choco/60">De <s>R$ [PREÇO CHEIO]</s> por apenas</p>
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.5 }}
                  className="font-serif font-extrabold text-5xl sm:text-6xl text-choco mt-1"
                >
                  <span className="text-2xl align-top">R$</span> [PREÇO]
                </motion.p>
                <p className="mt-2 text-choco/70">ou <strong>[X]x de R$ [VALOR]</strong> no cartão</p>

                <CTA full className="mt-8 text-lg px-6 py-5">Quero meu ebook agora</CTA>

                <div className="mt-6 flex items-center justify-center gap-4 text-choco/70 text-xs">
                  <span className="flex items-center gap-1.5"><Pix className="w-6 h-6 text-[#32BCAD]" />Pix</span>
                  <span className="flex items-center gap-1.5"><Card className="w-6 h-6" />Cartão de crédito</span>
                  <span className="flex items-center gap-1.5"><Lock className="w-5 h-5" />Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- GARANTIA ---------------- */
export function Guarantee() {
  return (
    <section className="bg-choco text-cream py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 60, damping: 12 }}
          className="shrink-0 relative w-48 h-48"
        >
          <motion.svg className="absolute inset-0 w-full h-full text-gold" viewBox="0 0 200 200" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
            <defs><path id="circlePath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
            <text fontSize="13" fontFamily="Poppins, sans-serif" letterSpacing="4" fill="currentColor" fontWeight="600">
              <textPath href="#circlePath">GARANTIA • SATISFAÇÃO • GARANTIA • SATISFAÇÃO •</textPath>
            </text>
          </motion.svg>
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-7 rounded-full bg-linear-to-br from-gold-light to-gold flex flex-col items-center justify-center text-choco-dark shadow-card border-4 border-cream/30"
          >
            <span className="font-serif text-5xl font-extrabold leading-none">7</span>
            <span className="text-xs font-bold uppercase tracking-widest">dias</span>
          </motion.div>
        </motion.div>
        <div>
          <SplitText text="Seu risco é *zero*" className="font-serif text-3xl md:text-5xl font-bold" />
          <Reveal delay={0.3}>
            <p className="mt-4 text-cream/85 leading-relaxed">
              Você tem <strong>7 dias de garantia incondicional</strong>. Se por qualquer motivo achar que o ebook não é pra você, é só pedir o reembolso dentro desse prazo pela própria plataforma de compra — você recebe 100% do seu dinheiro de volta, sem perguntas e sem burocracia.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
const FAQ = [
  ['Como recebo o ebook?', 'Assim que o pagamento é aprovado, você recebe no seu e-mail o acesso ao ebook e aos bônus. No Pix e no cartão, a liberação é imediata.'],
  ['Preciso ter experiência?', 'Não! O ebook foi feito para quem está começando, com explicações simples e passo a passo. E se você já faz bem-casados, vai aprender técnicas para elevar o nível.'],
  ['Serve para quem quer vender?', 'Sim, esse é um dos focos do material. Você aprende a precificar por unidade e por cento, embalar e divulgar seus bem-casados para casamentos, festas e pelo Instagram e WhatsApp.'],
  ['Por quanto tempo tenho acesso?', 'O acesso é vitalício. Você pode baixar o ebook e consultar sempre que quiser, no celular, tablet ou computador.'],
  ['E se eu não gostar?', 'Você tem 7 dias de garantia incondicional. Basta solicitar o reembolso pela plataforma de compra e devolvemos 100% do valor.'],
  ['Quais formas de pagamento?', 'Você pode pagar via Pix (liberação imediata) ou cartão de crédito, com opção de parcelamento.'],
]

export function Faq() {
  const [active, setActive] = useState(null)
  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Perguntas *frequentes*" />
        <motion.div variants={stagger(0.08)} {...inViewProps} className="mt-12 space-y-3">
          {FAQ.map(([q, a], i) => {
            const open = active === i
            return (
              <motion.div
                key={q}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                className={`bg-white rounded-2xl shadow-soft overflow-hidden border-l-4 transition-colors ${open ? 'border-rose-dark' : 'border-transparent'}`}
              >
                <button onClick={() => setActive(open ? null : i)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold" aria-expanded={open}>
                  <span>{q}</span>
                  <motion.span animate={{ rotate: open ? 135 : 0 }} transition={{ type: 'spring', stiffness: 260, damping: 15 }} className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${open ? 'bg-rose-dark text-white' : 'bg-rose-light text-rose-dark'}`}>
                    <Plus className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }}>
                      <p className="px-6 pb-5 text-choco/80 leading-relaxed">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- CTA FINAL ---------------- */
export function FinalCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  return (
    <section ref={ref} className="relative isolate overflow-hidden py-24 md:py-32 px-4 sm:px-6 text-center text-cream">
      {/* Fonte: Unsplash — mesa de doces e cupcakes  https://images.unsplash.com/photo-1519869325930-281384150729 */}
      <motion.img style={{ y, scale: 1.3 }} src="https://images.unsplash.com/photo-1519869325930-281384150729?w=1600&q=80" alt="Cupcakes com cobertura de chantilly e confeitos coloridos" loading="lazy" className="absolute inset-0 -z-20 w-full h-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-choco-dark/95 via-choco/85 to-rose-dark/75" />
      <Particles count={16} />
      <div className="relative max-w-3xl mx-auto">
        <SplitText text="Sua cozinha pode ser o começo de algo *muito maior*" className="font-serif text-3xl md:text-5xl font-bold leading-tight" accent="text-shimmer-gold italic" />
        <Reveal delay={0.4}>
          <p className="mt-6 text-lg text-cream/85 font-light">Imagine daqui a alguns meses: noivas pedindo seus bem-casados, a agenda de encomendas cheia e o orgulho de ver seu trabalho valorizado. O primeiro passo custa menos que um cento de bem-casados.</p>
        </Reveal>
        <Reveal delay={0.6} className="mt-10">
          <CTA className="text-lg px-10 py-5">Sim, quero começar agora</CTA>
          <p className="mt-4 text-sm text-cream/70">Acesso imediato • Compra segura • Garantia de 7 dias</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- RODAPÉ ---------------- */
export function Footer() {
  return (
    <footer className="bg-choco-dark text-cream/70 py-12 px-4 sm:px-6 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-serif text-2xl text-cream font-bold">{AUTORA}<span className="text-gold">.</span></p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="mt-1 inline-flex items-center gap-1.5 hover:text-gold transition-colors">
            <Instagram className="w-4 h-4" />@{INSTAGRAM}
          </a>
        </div>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
        </nav>
      </div>
      <p className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 text-xs text-center text-cream/50">
        © {new Date().getFullYear()} {AUTORA}. Todos os direitos reservados. Este produto não garante resultados financeiros; os resultados dependem da dedicação de cada pessoa. Fotos ilustrativas: Unsplash.
      </p>
    </footer>
  )
}

/* ---------------- FLUTUANTES ---------------- */
export function WhatsAppButton() {
  if (!WHATSAPP_HREF) return null
  return (
    <motion.a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener"
      aria-label="Fale comigo no WhatsApp"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', delay: 3, stiffness: 160, damping: 12 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 md:bottom-6 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-card"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <WhatsApp className="relative w-8 h-8" />
    </motion.a>
  )
}

export function StickyCTA() {
  const { scrollY, scrollYProgress } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setShow(y > 800 && scrollYProgress.get() < 0.93))
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          exit={{ y: 120 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-cream/95 backdrop-blur border-t border-rose/50 px-4 py-3"
        >
          <CTA full className="py-3.5 text-sm">Quero meu ebook</CTA>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
