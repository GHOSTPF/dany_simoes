import { Link } from 'react-router'
import BemCasado from './BemCasado'
import { AUTORA, INSTAGRAM, INSTAGRAM_URL } from '../config'

export default function Footer({ note }) {
  return (
    <footer className="bg-ink text-paper/70 text-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BemCasado className="w-14 text-paper" />
          <p className="mt-4 font-serif text-2xl text-paper">{AUTORA}</p>
          <p className="mt-1">Confeitaria artesanal e aulas de confeitaria.</p>
        </div>
        <div>
          <p className="label text-paper/40">Site</p>
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className="hover:text-paper">Início</Link></li>
            <li><Link to="/ebook/bem-casado" className="hover:text-paper">Ebook Venda de Bem-Casados</Link></li>
            <li><Link to="/links" className="hover:text-paper">Links</Link></li>
          </ul>
        </div>
        <div>
          <p className="label text-paper/40">Contato</p>
          <ul className="mt-3 space-y-2">
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="hover:text-paper">@{INSTAGRAM}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="max-w-6xl mx-auto px-5 sm:px-8 py-6 text-xs text-paper/45">
          © {new Date().getFullYear()} {AUTORA}. Todos os direitos reservados.{note ? ` ${note}` : ''}
        </p>
      </div>
    </footer>
  )
}
