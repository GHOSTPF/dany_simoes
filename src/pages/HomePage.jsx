import { useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import BemCasado from '../components/BemCasado'
import { Particles } from '../components/Hero'
import { Marquee } from '../components/Sections'
import { Arrow, Cake, CakeTiers, Cap, Close, Heart, Instagram, Menu, Rings, Sparkle, WhatsApp } from '../components/icons'
import { Counter, Reveal, SectionTitle, SplitText, Tilt, ease, fadeUp, inViewProps, stagger } from '../components/ui'
import { AUTORA, INSTAGRAM, INSTAGRAM_URL, whatsappHref } from '../config'
import { EBOOKS } from '../data/ebooks'
import { usePageMeta } from '../hooks'

// sem número configurado, os botões de contato levam pro Instagram
const CONTATO_HREF = whatsappHref() ?? INSTAGRAM_URL

const NAV = [
  ['#sobre', 'Sobre'],
  ['#especialidades', 'Especialidades'],
  ['#trabalhos', 'Trabalhos'],
  ['#ebooks', 'Ebooks'],
]

/* ---------------- NAV ---------------- */
function SiteNav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className={`transition-all duration-500 ${scrolled || open ? 'bg-cream/90 backdrop-blur-md shadow-soft text-choco' : 'text-cream'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
            {AUTORA}<span className="text-gold">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map(([href, label]) => (
              <a key={href} href={href} className="relative group py-1">
                {label}
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-gold origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
            <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} href="#contato" className="bg-gold text-choco-dark font-semibold px-5 py-2 rounded-full hover:bg-gold-light transition-colors">
              Encomendar
            </motion.a>
          </div>
          <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 -mr-2" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
            {open ? <Close className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-4 mt-2 rounded-3xl bg-cream text-choco shadow-card p-6 flex flex-col gap-4 text-lg"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease }}
          >
            {NAV.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a href="#contato" onClick={() => setOpen(false)} className="bg-choco text-cream text-center font-semibold py-3 rounded-full">Encomendar</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------------- HERO ---------------- */
function PortfolioHero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[100svh] flex items-center bg-choco-dark">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-choco-dark via-choco to-rose-dark/70" />
      <motion.div aria-hidden className="absolute -z-10 w-[32rem] h-[32rem] rounded-full bg-rose-dark/30 blur-3xl -top-40 -left-40"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
      <Particles count={18} />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24 grid md:grid-cols-2 gap-14 items-center">
        <div className="text-cream text-center md:text-left order-2 md:order-1">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 bg-rose/20 border border-rose/40 text-rose-light text-xs uppercase tracking-[.2em] px-4 py-1.5 rounded-full mb-6">
            <Sparkle className="w-3.5 h-3.5 text-gold" /> Confeiteira &amp; professora
          </motion.span>
          <SplitText
            as="h1"
            trigger
            text="Doces feitos com *afeto*, do pão de ló ao *laço*"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]"
            accent="text-shimmer-gold italic"
          />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8, ease }}
            className="mt-6 text-base sm:text-lg text-cream/85 max-w-xl mx-auto md:mx-0 font-light">
            Eu sou a <strong className="font-semibold text-cream">{AUTORA}</strong>. Faço bem-casados, bolos e doces para casamentos e festas — e ensino outras confeiteiras a transformar a cozinha em renda.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1, ease }}
            className="mt-9 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href={CONTATO_HREF} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-gold text-choco-dark font-semibold px-7 py-4 rounded-full hover:bg-gold-light transition-colors">
              <WhatsApp className="w-5 h-5" /> Fazer uma encomenda
            </a>
            <a href="#ebooks" className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream font-semibold px-7 py-4 rounded-full hover:bg-cream hover:text-choco transition-colors">
              Conhecer meus ebooks <Arrow className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* foto com anel girando */}
        <motion.div initial={{ opacity: 0, scale: 0.7, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 70, damping: 14, delay: 0.3 }}
          className="relative w-full max-w-[18rem] md:max-w-sm mx-auto aspect-square order-1 md:order-2">
          <motion.div aria-hidden className="absolute inset-0 rounded-full"
            style={{ background: 'conic-gradient(from 0deg, var(--color-gold), var(--color-rose-dark), var(--color-rose), var(--color-gold-light), var(--color-gold))' }}
            animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: 'linear' }} />
          <div className="absolute inset-[6px] rounded-full bg-choco-dark" />
          <img src="/foto-autora.png" alt={`Foto da ${AUTORA}`} className="absolute inset-[14px] w-[calc(100%-28px)] h-[calc(100%-28px)] rounded-full object-cover object-top" />
          <motion.div aria-hidden className="absolute -bottom-2 -left-4" animate={{ rotate: [0, -8, 8, 0], y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <BemCasado className="w-20 h-20 drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- SOBRE ---------------- */
function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal y={16}><p className="text-rose-dark uppercase tracking-[.25em] text-xs font-semibold">Prazer</p></Reveal>
        <SplitText text="Uma cozinha, muito *carinho* e anos de prática" className="font-serif text-3xl md:text-5xl font-bold mt-3 leading-tight" accent="text-rose-dark italic" />
        {/* [BIO] — complete com a sua história */}
        <Reveal delay={0.2}>
          <p className="mt-6 text-choco/85 leading-relaxed text-lg">
            Sou a <strong>Prof. Daniela Simões</strong>, confeiteira e professora de gastronomia. Comecei na cozinha de casa e hoje produzo para casamentos e festas, além de dar aulas de confeitaria <strong>100% presenciais</strong>.
            [Conte aqui sua história — há quantos anos trabalha com confeitaria, o que te move.]
          </p>
        </Reveal>
        <motion.div variants={stagger(0.12, 0.2)} {...inViewProps} className="mt-10 grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl mx-auto">
          {[
            [<Counter key="a" to={8638} />, 'seguidores'],
            [<Counter key="b" to={6964} />, 'publicações'],
            ['[X]+', 'anos de experiência'],
          ].map(([n, l]) => (
            <motion.div key={l} variants={fadeUp} whileHover={{ y: -4 }} className="bg-white shadow-soft rounded-2xl p-4 sm:p-6">
              <p className="font-serif text-2xl md:text-4xl font-bold text-rose-dark">{n}</p>
              <p className="text-xs sm:text-sm text-choco/70 mt-1">{l}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- ESPECIALIDADES ---------------- */
const ESPECIALIDADES = [
  [Heart, 'Bem-casados', 'Pão de ló leve, recheio cremoso e embalagem caprichada para casamentos e lembrancinhas.'],
  [CakeTiers, 'Bolos decorados', 'Bolos de andares e de festa, decorados sob medida para o seu evento.'],
  [Rings, 'Doces para eventos', 'Mesa de doces finos para casamentos, aniversários e datas especiais.'],
  [Cap, 'Aulas presenciais', 'Curso de confeitaria 100% presencial, com prática do começo ao fim.'],
]

function Especialidades() {
  return (
    <section id="especialidades" className="bg-rose-light/50 py-20 md:py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="O que eu faço" title="Minhas *especialidades*" />
        <motion.div variants={stagger(0.12)} {...inViewProps} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ESPECIALIDADES.map(([Icon, title, desc]) => (
            <motion.div key={title} variants={fadeUp}>
              <Tilt className="h-full bg-white rounded-3xl p-7 shadow-soft hover:shadow-card transition-shadow">
                <span className="w-14 h-14 rounded-2xl bg-rose-light text-rose-dark flex items-center justify-center"><Icon className="w-8 h-8" /></span>
                <h3 className="font-serif text-xl font-bold mt-5">{title}</h3>
                <p className="text-sm text-choco/75 mt-2">{desc}</p>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- TRABALHOS ---------------- */
// ⚠️ Fotos ilustrativas do Unsplash — troque pelas fotos reais dos trabalhos da Dany (coloque em /public)
const TRABALHOS = [
  ['https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80', 'Bolo de andares branco decorado com frutas vermelhas'],
  ['https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&q=80', 'Cupcakes com cobertura em espiral rosa e azul'],
  ['https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80', 'Caixa com docinhos e bombons de chocolate gourmet'],
  ['https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80', 'Bolo colorido de camadas coberto com confeitos'],
  ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80', 'Fatia de bolo em camadas com recheio cremoso e framboesas'],
  ['https://images.unsplash.com/photo-1602351447937-745cb720612f?w=800&q=80', 'Torta mousse de chocolate com cobertura brilhante'],
]

function Trabalhos() {
  return (
    <section id="trabalhos" className="py-20 md:py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Portfólio" title="Alguns *trabalhos*" subtitle="Cada encomenda é pensada para o momento de quem vai receber." />
        <motion.div variants={stagger(0.08)} {...inViewProps} className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {TRABALHOS.map(([src, alt], i) => (
            <motion.div key={src} variants={fadeUp} whileHover={{ scale: 1.03, rotate: i % 2 ? 1 : -1 }}
              className={`relative overflow-hidden rounded-3xl shadow-soft ${i === 0 ? 'md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`}>
              <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
        <Reveal className="mt-10 text-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-choco text-cream font-semibold px-6 py-3 rounded-full hover:bg-rose-dark transition-colors">
            <Instagram className="w-5 h-5" /> Veja mais no @{INSTAGRAM}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- EBOOKS ---------------- */
function Ebooks() {
  return (
    <section id="ebooks" className="relative bg-choco text-cream py-20 md:py-28 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      <motion.div aria-hidden className="absolute w-96 h-96 rounded-full bg-rose-dark/20 blur-3xl top-1/3 -right-40" animate={{ y: [0, 80, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      <div className="relative max-w-6xl mx-auto">
        <SectionTitle dark kicker="Aprenda comigo" title="Meus *ebooks*" subtitle="Tudo o que aprendi na prática, organizado para você encurtar o caminho." />
        <motion.div variants={stagger(0.15)} {...inViewProps} className="mt-14 flex flex-wrap gap-7 justify-center">
          {EBOOKS.map((e) => (
            <motion.div key={e.slug} variants={fadeUp} className="w-full sm:w-[22rem]">
              <Link to={e.path} className="group block h-full bg-cream text-choco rounded-3xl overflow-hidden shadow-card">
                <div className="relative h-56 overflow-hidden">
                  <img src={e.capa} alt={e.capaAlt} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                  {e.destaque && <span className="absolute top-4 left-4 bg-gold text-choco-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Novo</span>}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold group-hover:text-rose-dark transition-colors">{e.titulo}</h3>
                  <p className="mt-2 text-sm text-choco/75">{e.chamada}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-rose-dark font-semibold text-sm">
                    Ver ebook <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- CONTATO ---------------- */
function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal className="flex justify-center">
          <motion.div animate={{ rotate: [0, -8, 8, 0], y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Cake className="w-14 h-14 text-rose-dark" />
          </motion.div>
        </Reveal>
        <SectionTitle title="Vamos adoçar o seu *evento*?" subtitle="Me chama para encomendas, orçamentos de casamento ou informações sobre as aulas." />
        <Reveal delay={0.3} className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={CONTATO_HREF} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:brightness-95 transition">
            <WhatsApp className="w-5 h-5" /> Chamar no WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 bg-choco text-cream font-semibold px-8 py-4 rounded-full hover:bg-rose-dark transition-colors">
            <Instagram className="w-5 h-5" /> @{INSTAGRAM}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

const MARQUEE = ['Bem-casados', 'Bolos decorados', 'Doces finos', 'Casamentos', 'Aulas presenciais', 'Feito com afeto']

export default function HomePage() {
  usePageMeta(
    `${AUTORA} — Confeitaria artesanal`,
    `${AUTORA}: confeiteira e professora de confeitaria. Bem-casados, bolos e doces para casamentos e festas, aulas presenciais e ebooks.`,
  )
  return (
    <>
      <SiteNav />
      <PortfolioHero />
      <main>
        <Sobre />
        <Marquee items={MARQUEE} />
        <Especialidades />
        <Trabalhos />
        <Ebooks />
        <Contato />
      </main>
      <footer className="bg-choco-dark text-cream/60 py-10 px-4 sm:px-6 text-sm text-center">
        <p className="font-serif text-2xl text-cream font-bold">{AUTORA}<span className="text-gold">.</span></p>
        <nav className="mt-3 flex justify-center gap-6">
          <Link to="/links" className="hover:text-gold transition-colors">Links</Link>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="hover:text-gold transition-colors">Instagram</a>
        </nav>
        <p className="mt-6 text-xs text-cream/40">© {new Date().getFullYear()} {AUTORA}. Todos os direitos reservados. Fotos ilustrativas: Unsplash.</p>
      </footer>
    </>
  )
}
