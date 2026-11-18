/* Bem-casado embrulhado, em traço — marca gráfica da Dany */
export default function BemCasado({ className = '', accent = 'var(--color-rose)' }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      {/* pontas do papel */}
      <path d="M20 42 L4 30 L9 42 L4 54 Z" />
      <path d="M100 42 L116 30 L111 42 L116 54 Z" />
      {/* corpo */}
      <path d="M20 42 C20 18 100 18 100 42 C100 66 20 66 20 42 Z" />
      <path d="M32 36 C42 30 52 29 60 30" strokeOpacity=".45" />
      {/* fita */}
      <path d="M57 23 L63 23 L63 61 L57 61 Z" fill={accent} stroke={accent} />
      {/* laço */}
      <path d="M60 23 C47 6 34 22 60 26 Z" fill={accent} stroke={accent} />
      <path d="M60 23 C73 6 86 22 60 26 Z" fill={accent} stroke={accent} />
      <circle cx="60" cy="24.5" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
