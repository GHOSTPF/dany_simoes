import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Cap, CakeTiers, Family, Feedback, Instagram, Star } from './icons'
import { Counter, Reveal, SectionTitle, SplitText, ease, inViewProps, stagger } from './ui'
import { AUTORA, INSTAGRAM, INSTAGRAM_URL } from '../config'

const HIGHLIGHTS = [
  [Cap, 'Cursos'],
  [CakeTiers, 'Trabalhos'],
  [Family, 'Família'],
  [Feedback, 'Feedback'],
]

export function About() {
  return (
    <section id="autora" className="relative py-20 md:py-28 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Foto com anel girando, estilo stories */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 70, damping: 14 }}
          className="relative w-full max-w-sm mx-auto aspect-square"
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{ background: 'conic-gradient(from 0deg, var(--color-gold), var(--color-rose-dark), var(--color-rose), var(--color-gold-light), var(--color-gold))' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-[6px] rounded-full bg-cream" />
          <img src="/foto-autora.png" alt={`Foto da ${AUTORA}`} className="absolute inset-[14px] w-[calc(100%-28px)] h-[calc(100%-28px)] rounded-full object-cover object-top" />
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.6 }}
            className="absolute bottom-6 -right-2 md:right-0 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2"
          >
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}>👩‍🍳</motion.span>
            <span className="text-sm font-semibold leading-tight">Prof. de<br />confeitaria</span>
          </motion.span>
        </motion.div>

        <div>
          <Reveal y={16}><p className="text-rose-dark uppercase tracking-[.25em] text-xs font-semibold">Prazer, eu sou a</p></Reveal>
          <SplitText text={`*${AUTORA}*`} className="font-serif text-4xl md:text-6xl font-bold mt-2" accent="text-rose-dark italic" />
          {/* [BIO] — complete com a sua história */}
          <Reveal delay={0.15}>
            <p className="mt-5 text-choco/85 leading-relaxed">
              Sou a <strong>Prof. Daniela Simões</strong>, confeiteira e professora de gastronomia, com curso de confeitaria <strong>100% presencial</strong>.
              Comecei exatamente onde você está agora: na cozinha de casa, com muita vontade e várias dúvidas. [Conte aqui sua história — há quantos anos faz bem-casados, quantos já vendeu, o que te move.]
            </p>
            <p className="mt-4 text-choco/85 leading-relaxed">
              Reuni neste ebook tudo o que aprendi na prática para que você encurte o caminho, evite desperdício e comece a vender com confiança.
            </p>
          </Reveal>

          <motion.div variants={stagger(0.12, 0.2)} {...inViewProps} className="mt-7 grid grid-cols-3 gap-3">
            {[
              [<Counter key="a" to={8638} />, 'seguidores'],
              [<Counter key="b" to={6964} />, 'publicações'],
              ['[X]+', 'anos de experiência'],
            ].map(([n, l]) => (
              <motion.div key={l} variants={{ hidden: { opacity: 0, y: 30, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } }} whileHover={{ y: -4 }} className="bg-white shadow-soft rounded-2xl p-4 text-center">
                <p className="font-serif text-2xl md:text-3xl font-bold text-rose-dark">{n}</p>
                <p className="text-xs text-choco/70 mt-1">{l}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* destaques do Instagram */}
          <motion.div variants={stagger(0.1, 0.3)} {...inViewProps} className="mt-8 flex gap-4 sm:gap-6">
            {HIGHLIGHTS.map(([Icon, label]) => (
              <motion.a
                key={label}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                variants={{ hidden: { opacity: 0, scale: 0 }, show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 12 } } }}
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 text-xs font-semibold"
              >
                <span className="w-16 h-16 rounded-full p-[3px] bg-linear-to-tr from-gold via-rose-dark to-rose">
                  <span className="w-full h-full rounded-full bg-rose-light border-2 border-white flex items-center justify-center text-choco">
                    <Icon className="w-7 h-7" />
                  </span>
                </span>
                {label}
              </motion.a>
            ))}
          </motion.div>

          <Reveal delay={0.4}>
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex items-center gap-2 bg-choco text-cream font-semibold px-6 py-3 rounded-full hover:bg-rose-dark transition-colors"
            >
              <Instagram className="w-5 h-5" /> @{INSTAGRAM}
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ⚠️ Depoimentos: substitua por depoimentos REAIS de clientes (com autorização).
   Nunca publique depoimentos inventados. */
const TESTIMONIALS = [
  ['Juliana Ribeiro', '[Depoimento real aqui]'],
  ['Patrícia Almeida', '[Depoimento real aqui]'],
  ['Camila Ferreira', '[Depoimento real aqui]'],
]

export function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(t)
  }, [paused])
  const [name, text] = TESTIMONIALS[i]

  return (
    <section className="bg-rose-light/50 py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <SectionTitle title="O que dizem as *alunas*" />
        <div className="relative mt-12 min-h-[260px]">
          <span aria-hidden className="absolute -top-10 left-2 font-serif text-[10rem] leading-none text-rose/60 select-none">“</span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, x: 80, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -80, rotate: -3 }}
              transition={{ duration: 0.5, ease }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) setI((v) => (v + 1) % TESTIMONIALS.length)
                if (info.offset.x > 60) setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }}
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-card cursor-grab active:cursor-grabbing"
            >
              <div className="flex gap-1 text-gold" aria-label="5 estrelas">
                {[0, 1, 2, 3, 4].map((s) => (
                  <motion.span key={s} initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2 + s * 0.08, type: 'spring' }}>
                    <Star className="w-5 h-5" />
                  </motion.span>
                ))}
              </div>
              <blockquote className="mt-5 text-lg md:text-xl text-choco/85 italic font-serif">“{text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-linear-to-br from-rose to-rose-dark text-white font-bold flex items-center justify-center">{name[0]}</span>
                <span className="font-semibold">{name}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Depoimento ${k + 1}`} className="h-2.5 rounded-full bg-rose overflow-hidden" style={{ width: k === i ? 36 : 10, transition: 'width .4s' }}>
              {k === i && !paused && (
                <motion.span className="block h-full bg-rose-dark origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5, ease: 'linear' }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
