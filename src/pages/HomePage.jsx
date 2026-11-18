import Header from '../components/Header'
import Footer from '../components/Footer'
import EbookCover from '../components/EbookCover'
import BemCasado from '../components/BemCasado'
import { Instagram, WhatsApp } from '../components/icons'
import { Button, Container, Reveal, SectionHead } from '../components/ui'
import { AUTORA, INSTAGRAM, INSTAGRAM_URL, whatsappHref } from '../config'
import { EBOOKS } from '../data/ebooks'
import { usePageMeta } from '../hooks'

// sem número configurado, os botões de contato levam pro Instagram
const CONTATO_HREF = whatsappHref() ?? INSTAGRAM_URL

const NAV = [
  ['#sobre', 'Sobre'],
  ['#encomendas', 'Encomendas'],
  ['#trabalhos', 'Trabalhos'],
  ['#ebooks', 'Ebooks'],
]

/* ---------------- ABERTURA ---------------- */
function Abertura() {
  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24">
      <Container className="grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 items-end">
        <div className="order-2 md:order-1 md:pb-6">
          <Reveal as="p" className="label text-rose">Confeitaria artesanal · Professora</Reveal>
          <Reveal as="h1" delay={0.05} className="mt-5 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.4rem]">
            Bem-casados, bolos e doces feitos à mão para os seus dias importantes.
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-lg text-lg text-muted">
              Eu sou a {AUTORA}. Produzo para casamentos, aniversários e datas especiais, e ensino outras confeiteiras a fazer da cozinha uma fonte de renda.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button href={CONTATO_HREF}>Fazer uma encomenda</Button>
              <a href="#ebooks" className="font-bold border-b-2 border-rose pb-0.5 hover:text-rose transition-colors">Conheça meus ebooks</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-rose-soft">
              <img src="/foto-autora.png" alt={`${AUTORA} sorrindo, de lenço e blusa rosa`} className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-sm text-muted">
              <span>Daniela Simões, confeiteira</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="hover:text-rose">@{INSTAGRAM}</a>
            </figcaption>
          </figure>
        </Reveal>
      </Container>

      {/* números */}
      <Container className="mt-16 md:mt-20">
        <dl className="grid grid-cols-3 border-y border-line divide-x divide-line">
          {[
            ['8,6 mil', 'seguidores no Instagram'],
            ['100%', 'curso presencial'],
            ['[X] anos', 'de confeitaria'],
          ].map(([n, l]) => (
            <div key={l} className="py-6 px-3 sm:px-6 text-center sm:text-left">
              <dt className="font-serif text-2xl sm:text-4xl">{n}</dt>
              <dd className="mt-1 text-xs sm:text-sm text-muted">{l}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

/* ---------------- SOBRE ---------------- */
function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-paper-2 scroll-mt-16">
      <Container className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-20">
        <SectionHead n="01" label="Sobre mim" title="Comecei na cozinha de casa." />
        {/* [BIO] — complete com a sua história */}
        <Reveal className="space-y-5 text-lg text-ink-2 md:pt-12">
          <p className="font-serif text-2xl leading-snug text-ink">
            Sou a Prof. Daniela Simões, confeiteira e professora de gastronomia.
          </p>
          <p>
            Hoje produzo encomendas para casamentos e festas e dou aulas de confeitaria 100% presenciais, com a mão na massa do começo ao fim.
          </p>
          <p className="text-muted">
            [Conte aqui sua história: há quantos anos trabalha com confeitaria, como começou, o que te move e o que as clientes mais elogiam.]
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

/* ---------------- ENCOMENDAS ---------------- */
const SERVICOS = [
  ['Bem-casados', 'Pão de ló leve, recheio cremoso e embalagem feita à mão, para casamentos e lembrancinhas.'],
  ['Bolos decorados', 'Bolos de festa e de andares, decorados sob medida para o seu evento.'],
  ['Doces finos', 'Mesa de doces para casamentos, aniversários e datas especiais.'],
  ['Aulas presenciais', 'Curso de confeitaria com prática do começo ao fim, em turmas pequenas.'],
]

function Encomendas() {
  return (
    <section id="encomendas" className="py-20 md:py-28 scroll-mt-16">
      <Container>
        <SectionHead n="02" label="O que eu faço" title="Encomendas e aulas" />
        <div className="mt-14 grid sm:grid-cols-2 gap-x-12">
          {SERVICOS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="border-t border-line py-7 grid grid-cols-[3rem_1fr]">
              <span className="font-serif text-rose">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button href={CONTATO_HREF} variant="ink">Pedir um orçamento</Button>
        </Reveal>
      </Container>
    </section>
  )
}

/* ---------------- TRABALHOS ---------------- */
// ⚠️ Fotos ilustrativas do Unsplash. Troque pelas fotos reais dos trabalhos da Dany:
// coloque os arquivos em /public/trabalhos/ e use src: '/trabalhos/nome.jpg'
const TRABALHOS = [
  ['https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=900&q=80', 'Bolo de andares branco com frutas vermelhas'],
  ['https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=700&q=80', 'Caixa de docinhos finos'],
  ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=700&q=80', 'Fatia de bolo com recheio cremoso e framboesas'],
  ['https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&q=80', 'Bolo de camadas com confeitos'],
  ['https://images.unsplash.com/photo-1607478900766-efe13248b125?w=700&q=80', 'Cupcakes com cobertura em espiral'],
]

function Trabalhos() {
  const [first, ...rest] = TRABALHOS
  return (
    <section id="trabalhos" className="py-20 md:py-28 bg-paper-2 scroll-mt-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead n="03" label="Portfólio" title="Alguns trabalhos" />
          <Reveal>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-bold border-b-2 border-rose pb-0.5 hover:text-rose">
              <Instagram className="w-4 h-4" /> Ver mais no Instagram
            </a>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <Reveal className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-sm">
            <img src={first[0]} alt={first[1]} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </Reveal>
          {rest.map(([src, alt], i) => (
            <Reveal key={src} delay={i * 0.05} className="aspect-square overflow-hidden rounded-sm">
              <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------------- EBOOKS ---------------- */
function Ebooks() {
  return (
    <section id="ebooks" className="grain bg-ink text-paper py-20 md:py-28 scroll-mt-16">
      <Container>
        <SectionHead dark n="04" label="Aprenda comigo" title="Ebooks de confeitaria" intro="O que aprendi na prática, organizado para você encurtar o caminho." />
        <div className="mt-14 space-y-16">
          {EBOOKS.map((e) => (
            <Reveal key={e.slug} className="grid md:grid-cols-[minmax(0,300px)_1fr] gap-10 md:gap-16 items-center border-t border-paper/15 pt-12">
              <div className="max-w-[260px] md:max-w-none text-[17px] md:text-[20px]">
                <EbookCover title={e.titulo} subtitle={e.subtitulo} />
              </div>
              <div>
                {e.novo && <p className="label text-rose-soft">Lançamento</p>}
                <h3 className="mt-3 text-4xl sm:text-5xl">{e.titulo}</h3>
                <p className="mt-5 max-w-xl text-lg text-paper/75">{e.chamada}</p>
                <Button to={e.path} variant="paper" className="mt-8">Conhecer o ebook</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------------- CONTATO ---------------- */
function Contato() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <Container size="max-w-4xl" className="text-center">
        <Reveal><BemCasado className="w-20 mx-auto text-ink" /></Reveal>
        <Reveal as="h2" delay={0.05} className="mt-8 text-4xl sm:text-6xl leading-[1.05]">
          Vamos conversar sobre a sua encomenda?
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-muted">Orçamentos para casamentos, festas e informações sobre as aulas.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={CONTATO_HREF} variant={whatsappHref() ? 'zap' : 'primary'} arrow={false}>
              <WhatsApp className="w-5 h-5" /> Chamar no WhatsApp
            </Button>
            <Button href={INSTAGRAM_URL} variant="outline" arrow={false}>
              <Instagram className="w-5 h-5" /> @{INSTAGRAM}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default function HomePage() {
  usePageMeta(
    `${AUTORA} · Confeitaria artesanal`,
    `${AUTORA}: confeiteira e professora de confeitaria. Bem-casados, bolos e doces para casamentos e festas, aulas presenciais e ebooks.`,
  )
  return (
    <>
      <Header links={NAV} cta={{ href: CONTATO_HREF, label: 'Encomendar' }} />
      <main>
        <Abertura />
        <Sobre />
        <Encomendas />
        <Trabalhos />
        <Ebooks />
        <Contato />
      </main>
      <Footer note="Fotos de trabalhos meramente ilustrativas." />
    </>
  )
}
