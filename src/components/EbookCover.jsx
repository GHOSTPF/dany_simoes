import BemCasado from './BemCasado'
import { AUTORA } from '../config'

/* Capa do ebook desenhada em CSS — parece um livro impresso, sem imagem de banco.
   Quando tiver a capa real, troque este componente por <img src="/capa.jpg" />. */
export default function EbookCover({ title, subtitle, className = '' }) {
  return (
    <div className={`relative aspect-[3/4.1] w-full ${className}`}>
      {/* sombra e lombada */}
      <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-[2px] bg-ink/25 blur-md" aria-hidden />
      <div className="relative h-full rounded-[2px] bg-[#FBF7F1] overflow-hidden flex flex-col shadow-[inset_6px_0_0_rgb(42_30_26/.08),inset_7px_0_0_rgb(255_255_255/.6)]">
        <div className="h-[38%] bg-rose flex items-end justify-center pb-5">
          <BemCasado className="w-[46%] text-[#FBF7F1]" accent="#2A1E1A" />
        </div>
        <div className="flex-1 flex flex-col px-[9%] pt-[8%] pb-[7%]">
          <p className="label text-[0.55em] text-rose">Ebook</p>
          <p className="font-serif text-[1.55em] leading-[1.05] text-ink mt-[0.3em]">{title}</p>
          {subtitle && <p className="mt-[0.7em] text-[0.62em] leading-snug text-muted">{subtitle}</p>}
          <p className="mt-auto pt-[0.6em] border-t border-line text-[0.6em] tracking-wide text-ink-2">{AUTORA}</p>
        </div>
      </div>
    </div>
  )
}
