import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react'
import { CHECKOUT_HREF } from '../config'
import { Arrow } from './icons'

export const ease = [0.22, 1, 0.36, 1]

/* Container que anima os filhos em cascata ao entrar na tela */
export const stagger = (gap = 0.12, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}
export const inViewProps = { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-80px' } }

/* Fade + slide simples ao rolar */
export function Reveal({ children, delay = 0, y = 32, x = 0, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* Texto que sobe palavra por palavra. Palavras entre *asteriscos* ganham destaque. */
export function SplitText({ text, as = 'h2', className = '', accent = 'text-gold italic', trigger, delay = 0.1 }) {
  const C = motion[as]
  let on = false
  const words = text.split(' ').map((w) => {
    const start = w.startsWith('*')
    if (start) on = true
    const acc = on
    if (w.endsWith('*')) on = false
    return { w: w.replace(/\*/g, ''), acc }
  })
  const play = trigger === undefined
    ? { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-80px' } }
    : { initial: 'hidden', animate: trigger ? 'show' : 'hidden' }

  return (
    <C className={className} variants={stagger(0.06, delay)} {...play}>
      {words.map(({ w, acc }, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
            <motion.span
              className={`inline-block ${acc ? accent : ''}`}
              variants={{ hidden: { y: '115%', rotate: 8 }, show: { y: 0, rotate: 0, transition: { duration: 0.85, ease } } }}
            >
              {w}
            </motion.span>
          </span>{' '}
        </span>
      ))}
    </C>
  )
}

export function SectionTitle({ kicker, title, subtitle, dark = false, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      {kicker && (
        <Reveal y={16}>
          <p className={`${dark ? 'text-gold' : 'text-rose-dark'} uppercase tracking-[.25em] text-xs font-semibold`}>{kicker}</p>
        </Reveal>
      )}
      <SplitText text={title} className="font-serif text-3xl md:text-5xl font-bold mt-3 leading-tight" accent={dark ? 'text-gold italic' : 'text-rose-dark italic'} />
      {subtitle && (
        <Reveal delay={0.3} y={16}>
          <p className={`mt-4 max-w-2xl mx-auto ${dark ? 'text-cream/75' : 'text-choco/70'}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}

/* Botão de compra: magnético, com pulso e brilho */
export function CTA({ children, className = '', full = false, href = CHECKOUT_HREF }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 14 })
  const sy = useSpring(y, { stiffness: 220, damping: 14 })

  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.2)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className={`btn-cta group relative overflow-hidden inline-flex items-center justify-center gap-3 ${full ? 'w-full' : 'w-full sm:w-auto'} bg-cta hover:bg-cta-dark text-white font-bold uppercase tracking-wide rounded-full transition-colors ${className}`}
    >
      <span className="shine" />
      <span className="relative">{children}</span>
      <Arrow className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
    </motion.a>
  )
}

/* Card com inclinação 3D seguindo o mouse */
export function Tilt({ children, className = '', max = 10, ...rest }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 180, damping: 18 })
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 180, damping: 18 })
  const glare = useTransform([mx, my], ([gx, gy]) => `radial-gradient(circle at ${gx * 100}% ${gy * 100}%, rgba(255,255,255,.35), transparent 55%)`)
  const [hover, setHover] = useState(false)

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width)
        my.set((e.clientY - r.top) / r.height)
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); setHover(false) }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`relative ${className}`}
      {...rest}
    >
      {children}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background: glare }} animate={{ opacity: hover ? 1 : 0 }} />
    </motion.div>
  )
}

/* Número que conta até o valor ao aparecer */
export function Counter({ to, duration = 2, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: (v) => setVal(Math.round(v)) })
    return () => c.stop()
  }, [inView, to, duration])
  return <span ref={ref} className={className}>{val.toLocaleString('pt-BR')}</span>
}

/* Ícone de check que se desenha */
export function DrawCheck({ className = '', delay = 0 }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <motion.path
        d="M5 13l4 4L19 7"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease }}
      />
    </svg>
  )
}
