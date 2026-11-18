import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EbookCover from '../../components/EbookCover'
import BemCasado from '../../components/BemCasado'
import { Card, Check, Close, Lock, Pix, Plus, WhatsApp } from '../../components/icons'
import { Button, Container, Reveal, SectionHead } from '../../components/ui'
import { AUTORA, CHECKOUT_HREF, EBOOK, INSTAGRAM, INSTAGRAM_URL, WHATSAPP_HREF } from '../../config'
import { usePageMeta } from '../../hooks'

/* =========================================================
   TEXTOS — edite à vontade
   ========================================================= */

const PRECO = 'R$ [PREÇO]'
const PRECO_CHEIO = 'R$ [PREÇO CHEIO]'
const PARCELAS = '[X]x de R$ [VALOR]'

const DORES = [
  'O pão de ló fica pesado, murcha ou racha na hora de montar.',
  'A calda fica grudenta, escorre ou não seca, e o acabamento não fica bonito.',
  'Você não sabe quanto cobrar pela unidade ou pelo cento, e trabalha muito para lucrar pouco.',
  'Embalar um a um leva horas e o laço nunca fica com cara de profissional.',
  'Você quer pegar encomendas de casamento, mas não sabe como chegar até as noivas.',
]

const APRENDE = [
  ['Pão de ló', 'Massa leve e úmida, o ponto da clara, o forno certo e discos sempre do mesmo tamanho.'],
  ['Recheios', 'Doce de leite, brigadeiro, frutas e versões gourmet que conservam bem.'],
  ['Calda e secagem', 'O ponto da calda, como banhar sem desperdício e a secagem que deixa tudo lisinho.'],
  ['Embalagem', 'Papel crepom, celofane, fitas e tags: embrulhar rápido e com acabamento profissional.'],
  ['Preço', 'Custos, mão de obra e lucro, por unidade e por cento, sem complicação.'],
  ['Vendas', 'Como apresentar seu trabalho para noivas e fechar encomendas grandes o ano todo.'],
]

const CAPITULOS = [
  ['Primeiros passos', 'Utensílios, ingredientes e organização para produzir em quantidade'],
  ['O pão de ló do bem-casado', 'Massa, ponto, forno e corte dos discos'],
  ['Recheios', 'Clássicos e gourmet que combinam e conservam'],
  ['Calda e secagem', 'Ponto, banho e secagem sem grudar'],
  ['Embalagem', 'Papéis, fitas, tags e montagem em série'],
  ['Precificação', 'Planilha de custos, preço por unidade e por cento'],
  ['Vendas', 'Casamentos, festas, datas comemorativas, Instagram e WhatsApp'],
]

const BONUS = [
  ['Planilha de precificação', 'Coloque seus custos e descubra o preço certo da unidade e do cento.', 'R$ [XX]'],
  ['Guia de embalagens', 'Onde comprar, quais papéis e fitas usar e como embrulhar rápido.', 'R$ [XX]'],
  ['Instagram que vende', 'Fotos com o celular, legendas prontas e mensagens de atendimento.', 'R$ [XX]'],
]

/* ⚠️ Use só depoimentos REAIS, com autorização. Itens entre [colchetes] não aparecem no site publicado. */
const DEPOIMENTOS = [
  ['[Nome da aluna]', '[Depoimento real aqui]'],
  ['[Nome da aluna]', '[Depoimento real aqui]'],
  ['[Nome da aluna]', '[Depoimento real aqui]'],
]

const INCLUSO = [
  `Ebook ${EBOOK} completo (7 capítulos)`,
  'Bônus 1: Planilha de precificação',
  'Bônus 2: Guia de embalagens',
  'Bônus 3: Instagram que vende',
  'Acesso imediato no celular, tablet ou computador',
  'Garantia incondicional de 7 dias',
]

const FAQ = [
  ['Como recebo o ebook?', 'Assim que o pagamento é aprovado, você recebe no seu e-mail o acesso ao ebook e aos bônus. No Pix e no cartão, a liberação é imediata.'],
  ['Preciso ter experiência?', 'Não. O ebook foi feito para quem está começando, com explicações simples e passo a passo. Se você já faz bem-casados, vai aprender técnicas para melhorar o acabamento e o preço.'],
  ['Serve para quem quer vender?', 'Sim, esse é um dos focos do material: precificar por unidade e por cento, embalar e divulgar seus bem-casados para casamentos, festas, Instagram e WhatsApp.'],
  ['Por quanto tempo tenho acesso?', 'O acesso é vitalício. Você pode baixar o ebook e consultar quando quiser.'],
  ['E se eu não gostar?', 'Você tem 7 dias de garantia incondicional. É só pedir o reembolso pela plataforma de compra e você recebe 100% do valor.'],
  ['Quais as formas de pagamento?', 'Pix (liberação imediata) ou cartão de crédito, com opção de parcelamento.'],
]

const NAV = [
  ['#aprender', 'O que você aprende'],
  ['#sumario', 'Sumário'],
  ['#autora', 'A autora'],
  ['#duvidas', 'Dúvidas'],
]

/* =========================================================
   SEÇÕES
   ========================================================= */

function Hero() {
  return (
    <section className="pt-10 pb-20 md:pt-16 md:pb-28">
      <Container className="grid md:grid-cols-[1.2fr_1fr] gap-14 md:gap-16 items-center">
        <div>
          <Reveal as="p" className="label text-rose">Ebook · por {AUTORA}</Reveal>
          <Reveal as="h1" delay={0.05} className="mt-5 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem]">
            Bem-casados que vendem, da massa ao laço.
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-lg text-muted">
              No <strong className="text-ink">{EBOOK}</strong> eu ensino o pão de ló, o ponto do recheio e da calda, a embalagem e, principalmente, como precificar e vender para casamentos, festas e o dia a dia.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href={CHECKOUT_HREF}>Quero o ebook</Button>
              <p className="text-sm text-muted">Acesso imediato · Garantia de 7 dias</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="bg-rose-soft rounded-sm px-[14%] py-[12%]">
            <div className="text-[16px] sm:text-[20px] md:text-[18px] lg:text-[21px] max-w-[320px] mx-auto -rotate-2">
              <EbookCover title={EBOOK} subtitle="Receitas, embalagem e o caminho para vender" />
            </div>
          </div>
          <p className="absolute -bottom-4 left-5 bg-ink text-paper text-sm px-4 py-2 rounded-sm">
            7 capítulos + 3 bônus
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

function Dores() {
  return (
    <section className="py-20 md:py-28 bg-paper-2">
      <Container className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20">
        <SectionHead n="01" label="Seja sincera" title="Alguma dessas situações acontece com você?" />
        <div>
          <ul>
            {DORES.map((d, i) => (
              <Reveal as="li" key={i} delay={i * 0.04} className="flex gap-4 py-5 border-b border-line first:border-t text-lg">
                <Close className="w-5 h-5 mt-1 shrink-0 text-rose" />
                {d}
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" className="mt-8 font-serif text-2xl leading-snug">
            Se você respondeu sim para pelo menos uma, este ebook foi escrito para você.
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Aprende() {
  return (
    <section id="aprender" className="py-20 md:py-28 scroll-mt-16">
      <Container>
        <SectionHead n="02" label="O que você aprende" title="Tudo o que separa um bem-casado caseiro de um profissional"
          intro="Receitas testadas, medidas precisas e as dicas de quem já errou muito, para você não precisar errar." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {APRENDE.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.05} className="border-t-2 border-ink pt-5 pb-10">
              <p className="font-serif text-rose">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-2xl">{t}</h3>
              <p className="mt-2 text-muted">{d}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Sumario() {
  return (
    <section id="sumario" className="grain bg-ink text-paper py-20 md:py-28 scroll-mt-16">
      <Container size="max-w-4xl">
        <SectionHead dark n="03" label="Por dentro do ebook" title="Sumário" />
        <ol className="mt-12">
          {CAPITULOS.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 0.03} className="py-5 border-b border-paper/15">
              <div className="flex items-baseline text-xl sm:text-2xl font-serif">
                <span className="text-rose-soft w-10 sm:w-14 shrink-0 text-base">{String(i + 1).padStart(2, '0')}</span>
                <span>{t}</span>
                <span className="leader" style={{ borderColor: "rgb(246 240 231 / .3)" }} />
                <span className="text-paper/50 text-sm font-sans">cap. {i + 1}</span>
              </div>
              <p className="mt-1 pl-10 sm:pl-14 text-paper/65">{d}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function Bonus() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHead n="04" label="Junto com o ebook" title="Três bônus para colocar em prática" />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {BONUS.map(([t, d, v], i) => (
            <Reveal key={t} delay={i * 0.06} className="border border-line rounded-sm p-7 bg-[#FBF7F1] flex flex-col">
              <p className="label text-rose">Bônus {i + 1}</p>
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-muted flex-1">{d}</p>
              <p className="mt-6 pt-4 border-t border-line text-sm flex justify-between">
                <span className="text-muted">Valor <s>{v}</s></span>
                <strong className="text-rose">Incluso</strong>
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Autora() {
  return (
    <section id="autora" className="py-20 md:py-28 bg-paper-2 scroll-mt-16">
      <Container className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-center">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-rose-soft max-w-md">
            <img src="/foto-autora.png" alt={`${AUTORA} sorrindo, de lenço e blusa rosa`} loading="lazy" className="w-full h-full object-cover object-top" />
          </div>
        </Reveal>
        <div>
          <SectionHead n="05" label="Quem escreveu" title={`Prazer, eu sou a ${AUTORA}.`} />
          {/* [BIO] — complete com a sua história */}
          <Reveal className="mt-6 space-y-4 text-lg text-ink-2">
            <p>Sou confeiteira e professora de gastronomia, com curso de confeitaria 100% presencial. Comecei exatamente onde você está agora: na cozinha de casa, com muita vontade e muitas dúvidas.</p>
            <p className="text-muted">[Conte aqui sua história: há quantos anos faz bem-casados, quantos já vendeu, o que te move.]</p>
            <p>Reuni neste ebook o que aprendi na prática para que você encurte o caminho, evite desperdício e comece a vender com confiança.</p>
          </Reveal>
          <Reveal>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="mt-8 inline-block font-bold border-b-2 border-rose pb-0.5 hover:text-rose">
              @{INSTAGRAM}
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Depoimentos() {
  const lista = import.meta.env.DEV ? DEPOIMENTOS : DEPOIMENTOS.filter(([n, t]) => !n.startsWith('[') && !t.startsWith('['))
  if (!lista.length) return null
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHead n="06" label="Quem já leu" title="O que dizem as alunas" />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {lista.map(([n, t], i) => (
            <Reveal as="figure" key={i} delay={i * 0.06} className="border-t-2 border-ink pt-6">
              <blockquote className="font-serif text-xl leading-snug">“{t}”</blockquote>
              <figcaption className="mt-5 text-sm text-muted">{n}</figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Oferta() {
  return (
    <section id="oferta" className="py-20 md:py-28 bg-rose-soft scroll-mt-16">
      <Container size="max-w-5xl" className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-center">
        <div>
          <SectionHead n="07" label="Oferta de lançamento" title="Tudo o que você recebe" />
          <ul className="mt-8 space-y-3">
            {INCLUSO.map((t) => (
              <li key={t} className="flex gap-3 text-lg">
                <Check className="w-5 h-5 mt-1 shrink-0 text-rose" />{t}
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="bg-paper rounded-sm p-8 sm:p-10 shadow-[0_1px_0_rgb(42_30_26/.08),0_24px_50px_-24px_rgb(42_30_26/.35)]">
          <p className="text-muted">De <s>{PRECO_CHEIO}</s> por</p>
          <p className="mt-1 font-serif text-6xl sm:text-7xl leading-none">{PRECO}</p>
          <p className="mt-3 text-muted">ou {PARCELAS} no cartão</p>
          <Button href={CHECKOUT_HREF} className="mt-8 w-full py-4 text-base">Quero o ebook agora</Button>
          <div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5"><Pix className="w-4 h-4" />Pix</span>
            <span className="flex items-center gap-1.5"><Card className="w-4 h-4" />Cartão</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" />Compra segura</span>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function Garantia() {
  return (
    <section className="py-16 md:py-20 border-b border-line">
      <Container size="max-w-4xl" className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:items-start text-center sm:text-left">
        <Reveal className="shrink-0 w-32 h-32 rounded-full border-2 border-ink flex flex-col items-center justify-center outline outline-1 outline-offset-4 outline-ink/30">
          <span className="font-serif text-5xl leading-none">7</span>
          <span className="label mt-1">dias</span>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">Garantia incondicional</h2>
          <p className="mt-4 text-lg text-muted">
            Se por qualquer motivo achar que o ebook não é para você, peça o reembolso em até 7 dias pela própria plataforma de compra e receba 100% do valor de volta, sem perguntas.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

function Duvidas() {
  return (
    <section id="duvidas" className="py-20 md:py-28 scroll-mt-16">
      <Container className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-20">
        <SectionHead n="08" label="Dúvidas" title="Perguntas frequentes" />
        <div className="border-t border-line">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-5 text-lg font-bold hover:text-rose transition-colors">
                {q}
                <Plus className="faq-plus w-5 h-5 shrink-0 transition-transform duration-300" />
              </summary>
              <p className="pb-6 -mt-1 text-muted max-w-2xl">{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Final() {
  return (
    <section className="grain bg-ink text-paper py-24 md:py-32">
      <Container size="max-w-3xl" className="text-center">
        <Reveal><BemCasado className="w-20 mx-auto text-paper" accent="var(--color-rose-soft)" /></Reveal>
        <Reveal as="h2" delay={0.05} className="mt-8 text-4xl sm:text-6xl leading-[1.05]">
          O primeiro cento vendido já paga o ebook.
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-paper/70">Comece hoje, com acesso imediato e 7 dias para decidir sem risco.</p>
          <Button href={CHECKOUT_HREF} variant="paper" className="mt-10">Quero começar agora</Button>
        </Reveal>
      </Container>
    </section>
  )
}

/* Barra de compra fixa no celular */
function BarraCompra() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => {
      const y = window.scrollY
      const fim = document.documentElement.scrollHeight - window.innerHeight
      setShow(y > 700 && y < fim - 900)
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.25 }}
          className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-paper border-t border-line px-4 py-3 flex items-center gap-4">
          <div className="leading-tight">
            <p className="text-xs text-muted">Ebook + 3 bônus</p>
            <p className="font-serif text-xl">{PRECO}</p>
          </div>
          <Button href={CHECKOUT_HREF} className="flex-1 py-3">Comprar</Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function BemCasadoPage() {
  usePageMeta(
    `${EBOOK} · ebook de ${AUTORA}`,
    'Aprenda a fazer bem-casados com acabamento profissional, precificar certo e vender para casamentos, festas e no dia a dia. Acesso imediato e garantia de 7 dias.',
  )
  return (
    <>
      <div className="bg-ink text-paper text-center text-sm py-2 px-4">
        Oferta de lançamento · garantia de 7 dias
      </div>
      <Header links={NAV} cta={{ href: '#oferta', label: 'Comprar' }} />
      <main>
        <Hero />
        <Dores />
        <Aprende />
        <Sumario />
        <Bonus />
        <Autora />
        <Depoimentos />
        <Oferta />
        <Garantia />
        <Duvidas />
        <Final />
      </main>
      <Footer note="Este produto não garante resultados financeiros; os resultados dependem da dedicação de cada pessoa." />
      {WHATSAPP_HREF && (
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener" aria-label="Tirar dúvidas no WhatsApp"
          className="fixed right-4 bottom-20 md:bottom-6 z-40 w-12 h-12 rounded-full bg-zap text-white flex items-center justify-center shadow-lg hover:brightness-110">
          <WhatsApp className="w-6 h-6" />
        </a>
      )}
      <BarraCompra />
    </>
  )
}
