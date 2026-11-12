import { useEffect } from 'react'
import { motion } from 'motion/react'
import BemCasado from './BemCasado'
import { ease } from './ui'
import { AUTORA } from '../config'

export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2100)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
      initial={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ clipPath: 'circle(0% at 50% 50%)' }}
      transition={{ duration: 0.9, ease }}
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1, y: [0, -8, 0] }}
        transition={{ type: 'spring', stiffness: 120, damping: 12, y: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <BemCasado className="w-28 h-28" draw />
      </motion.div>
      <motion.p
        className="mt-4 font-serif text-3xl font-bold"
        initial={{ opacity: 0, y: 16, letterSpacing: '0.3em' }}
        animate={{ opacity: 1, y: 0, letterSpacing: '0.02em' }}
        transition={{ duration: 1, delay: 0.4, ease }}
      >
        {AUTORA}<span className="text-gold">.</span>
      </motion.p>
      <div className="mt-5 h-1 w-44 bg-rose-light rounded-full overflow-hidden">
        <motion.div className="h-full bg-rose-dark origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, ease }} />
      </div>
    </motion.div>
  )
}
