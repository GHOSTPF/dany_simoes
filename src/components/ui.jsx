import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Arrow } from './icons'

export const ease = [0.22, 1, 0.36, 1]

/* Entrada discreta ao rolar */
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const C = motion[as]
  return (
    <C
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </C>
  )
}

export function Container({ children, className = '', size = 'max-w-6xl' }) {
  return <div className={`${size} mx-auto px-5 sm:px-8 ${className}`}>{children}</div>
}

const VARIANTS = {
  primary: 'bg-rose text-paper hover:bg-rose-2',
  ink: 'bg-ink text-paper hover:bg-ink-2',
  paper: 'bg-paper text-ink hover:bg-paper-2',
  outline: 'border border-current hover:bg-ink hover:text-paper hover:border-ink',
  zap: 'bg-zap text-white hover:brightness-110',
}

/* Botão: interno (to), externo (href) ou âncora (#) */
export function Button({ to, href, variant = 'primary', arrow = true, className = '', children, ...rest }) {
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-sm px-6 py-3.5 text-[15px] font-bold tracking-wide transition-colors duration-200 ${VARIANTS[variant]} ${className}`
  const inner = (
    <>
      {children}
      {arrow && <Arrow className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  const external = /^https?:/.test(href)
  return <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener' } : {})} {...rest}>{inner}</a>
}

/* Cabeçalho de seção: número + rótulo + título */
export function SectionHead({ n, label, title, intro, dark = false, center = false, className = '' }) {
  return (
    <Reveal className={`${center ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      <p className={`label flex items-center gap-3 ${center ? 'justify-center' : ''} ${dark ? 'text-rose-soft' : 'text-rose'}`}>
        {n && <span className="font-serif text-sm tracking-normal">{n}</span>}
        {n && <span className={`h-px w-8 ${dark ? 'bg-paper/30' : 'bg-line'}`} />}
        {label}
      </p>
      <h2 className="mt-4 text-[2rem] leading-[1.1] sm:text-5xl">{title}</h2>
      {intro && <p className={`mt-5 text-lg ${dark ? 'text-paper/75' : 'text-muted'}`}>{intro}</p>}
    </Reveal>
  )
}
