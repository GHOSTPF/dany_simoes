import { motion } from 'motion/react'
import { ease } from './ui'

/* Ilustração de um bem-casado embrulhado com laço. draw=true desenha o traço. */
export default function BemCasado({ className = '', draw = false }) {
  const d = (i) => draw
    ? {
        initial: { pathLength: 0, fillOpacity: 0 },
        animate: { pathLength: 1, fillOpacity: 1 },
        transition: {
          pathLength: { duration: 0.9, delay: i * 0.15, ease },
          fillOpacity: { duration: 0.5, delay: 0.8 + i * 0.1 },
        },
      }
    : {}

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      {/* pontas do papel */}
      <motion.path {...d(0)} d="M23 62 L6 47 L11 62 L6 77 Z" fill="var(--color-rose)" stroke="var(--color-rose-dark)" />
      <motion.path {...d(0)} d="M97 62 L114 47 L109 62 L114 77 Z" fill="var(--color-rose)" stroke="var(--color-rose-dark)" />
      {/* corpo */}
      <motion.path {...d(1)} d="M22 62 C22 36 98 36 98 62 C98 88 22 88 22 62 Z" fill="var(--color-rose-light)" stroke="var(--color-rose-dark)" />
      <motion.path {...d(1)} d="M34 56 C44 50 56 49 66 50" fill="none" stroke="#fff" strokeOpacity=".8" />
      {/* fita */}
      <motion.path {...d(2)} d="M55 43 L65 43 L65 81 L55 81 Z" fill="var(--color-gold)" stroke="var(--color-gold-dark)" />
      {/* laço */}
      <motion.path {...d(3)} d="M60 43 C46 24 33 42 60 46 Z" fill="var(--color-gold)" stroke="var(--color-gold-dark)" />
      <motion.path {...d(3)} d="M60 43 C74 24 87 42 60 46 Z" fill="var(--color-gold)" stroke="var(--color-gold-dark)" />
      <motion.path {...d(4)} d="M58 46 L50 60 M62 46 L70 60" fill="none" stroke="var(--color-gold-dark)" />
      <motion.circle {...d(4)} cx="60" cy="44" r="4.5" fill="var(--color-gold-light)" stroke="var(--color-gold-dark)" />
    </svg>
  )
}
