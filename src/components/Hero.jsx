import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import BemCasado from './BemCasado'
import { Bolt, Heart, Lock, Shield, Sparkle } from './icons'
import { CTA, SplitText, ease } from './ui'
import { AUTORA, EBOOK } from '../config'

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  left: (i * 37 + 7) % 100,
  size: 6 + ((i * 7) % 10),
  delay: (i * 0.73) % 7,
  dur: 8 + ((i * 3) % 7),
  kind: i % 3, // 0 = brilho, 1 = coração, 2 = ponto de açúcar
}))

export function Particles({ count = 24, className = '' }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {PARTICLES.slice(0, count).map((p, i) => (
        <motion.span
          key={i}
          className="absolute -bottom-6"
          style={{ left: `${p.left}%` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -900, opacity: [0, 0.9, 0.9, 0], x: [0, 18, -14, 8], rotate: [0, 90, 180] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        >
          {p.kind === 0 && <Sparkle className="text-gold-light" style={{ width: p.size + 4, height: p.size + 4 }} />}
          {p.kind === 1 && <Heart className="text-rose" style={{ width: p.size, height: p.size }} />}
          {p.kind === 2 && <span className="block rounded-full bg-white/70" style={{ width: p.size / 2, height: p.size / 2 }} />}
        </motion.span>
      ))}
    </div>
  )
}

const CHIPS = [
  { text: 'Receitas testadas', cls: '-left-6 md:-left-14 top-10', d: 0 },
  { text: '+ 3 bônus', cls: '-right-4 md:-right-10 top-1/3', d: 0.8 },
  { text: 'Precificação por cento', cls: '-left-2 md:-left-10 bottom-12', d: 1.6 },
]

export default function Hero({ ready }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.25])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-38, -4]), { stiffness: 110, damping: 14 })
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [12, -8]), { stiffness: 110, damping: 14 })

  const show = ready ? 'show' : 'hidden'

  return (
    <header
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      className="relative isolate overflow-hidden min-h-[100svh] flex items-center"
    >
      {/* Fonte: Unsplash — bolo de chocolate decorado  https://images.unsplash.com/photo-1578985545062-69928b1d9587 */}
      <motion.img
        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=80"
        alt="Bolo de chocolate decorado com ganache escorrendo e rosetas de brigadeiro"
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-choco-dark/95 via-choco/85 to-rose-dark/75" />
      {/* bolhas de luz */}
      <motion.div aria-hidden className="absolute -z-10 w-[32rem] h-[32rem] rounded-full bg-rose-dark/30 blur-3xl -top-40 -left-40"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div aria-hidden className="absolute -z-10 w-[26rem] h-[26rem] rounded-full bg-gold/25 blur-3xl bottom-0 right-0"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <Particles />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-36 pb-32 md:pt-40 md:pb-44 grid md:grid-cols-2 gap-14 items-center">
        <div className="text-cream text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 bg-rose/20 border border-rose/40 text-rose-light text-xs uppercase tracking-[.2em] px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkle className="w-3.5 h-3.5 text-gold" /> Ebook de bem-casados
          </motion.span>

          <SplitText
            as="h1"
            trigger={ready}
            delay={0.15}
            text="Aprenda a fazer *bem-casados* que *vendem* e transforme sua cozinha em uma fonte de renda"
            className="font-serif text-3xl sm:text-4xl lg:text-[3.4rem] font-bold leading-[1.15]"
            accent="text-shimmer-gold italic"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="mt-6 text-base sm:text-lg text-cream/85 max-w-xl mx-auto md:mx-0 font-light"
          >
            No <strong className="font-semibold text-cream">{EBOOK}</strong> eu te entrego o pão de ló perfeito, o ponto do recheio e da calda, a embalagem que encanta e o passo a passo para precificar e vender — para casamentos, festas e o dia a dia.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 1.35, ease }} className="mt-9">
            <CTA className="text-base sm:text-lg px-8 py-5">Quero meu ebook agora</CTA>
            <motion.ul
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 1.6 } } }}
              initial="hidden" animate={show}
              className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-cream/90"
            >
              {[[Bolt, 'Acesso imediato'], [Lock, 'Compra segura'], [Shield, 'Garantia de 7 dias']].map(([I, t]) => (
                <motion.li key={t} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="flex items-center gap-1.5">
                  <I className="w-4 h-4 text-gold" />{t}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Ebook 3D */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotate: 8 }}
          animate={ready ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.5 }}
          className="book-wrap relative flex justify-center"
        >
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative">
            <motion.div className="book" style={{ rotateY: rotY, rotateX: rotX }}>
              <div className="book-cover flex flex-col justify-between p-6 pl-8 text-choco">
                <div className="relative z-10">
                  <BemCasado className="w-14 h-14 drop-shadow" />
                  <p className="mt-3 text-[10px] uppercase tracking-[.3em] text-choco/70">Ebook</p>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight mt-1">{EBOOK}</h2>
                  <div className="w-12 h-0.5 bg-gold mt-3" />
                  <p className="mt-3 text-xs text-choco/80 leading-relaxed">Receitas, embalagem e o caminho para vender seus bem-casados</p>
                </div>
                <p className="relative z-10 font-serif italic text-sm text-white">por {AUTORA}</p>
              </div>
              <div className="book-pages" />
            </motion.div>

            {CHIPS.map((c) => (
              <motion.span
                key={c.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={ready ? { opacity: 1, scale: 1, y: [0, -10, 0] } : {}}
                transition={{ opacity: { delay: 1.4 + c.d / 2 }, scale: { type: 'spring', delay: 1.4 + c.d / 2 }, y: { duration: 3.5, repeat: Infinity, delay: c.d, ease: 'easeInOut' } }}
                className={`absolute ${c.cls} bg-white/95 text-choco text-xs font-semibold px-3 py-2 rounded-full shadow-card flex items-center gap-1.5 whitespace-nowrap`}
              >
                <Heart className="w-3.5 h-3.5 text-rose-dark" />{c.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* indicador de rolagem */}
      <motion.a
        href="#dores"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        className="hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 w-7 h-11 rounded-full border-2 border-cream/60 justify-center pt-2"
      >
        <motion.span className="w-1.5 h-2.5 rounded-full bg-cream" animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
      </motion.a>

      {/* divisor ondulado animado */}
      <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-cream" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          fill="currentColor"
          animate={{
            d: [
              'M0,64 C240,110 480,10 720,40 C960,70 1200,100 1440,50 L1440,100 L0,100 Z',
              'M0,50 C240,20 480,100 720,60 C960,20 1200,60 1440,70 L1440,100 L0,100 Z',
              'M0,64 C240,110 480,10 720,40 C960,70 1200,100 1440,50 L1440,100 L0,100 Z',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </header>
  )
}
