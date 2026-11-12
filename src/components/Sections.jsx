import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { Box, Cake, Clock, Coin, Drop, Instagram, Rings, Sheet, Sparkle } from './icons'
import BemCasado from './BemCasado'
import { CTA, DrawCheck, Reveal, SectionTitle, Tilt, ease, fadeUp, inViewProps, stagger } from './ui'
import { EBOOK } from '../config'

/* ---------------- FAIXA ROLANDO ---------------- */
export function Marquee({ items, reverse = false, className = 'bg-rose-dark text-white -rotate-2' }) {
  const list = [...items, ...items]
  return (
    <div className={`relative overflow-hidden py-4 md:py-5 scale-105 ${className}`}>
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {list.map((t, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-serif text-xl md:text-2xl italic whitespace-nowrap">
            {t}<Sparkle className="w-5 h-5 text-gold-light" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ---------------- DORES ---------------- */
const DORES = [
  [Cake, <>Seu pão de ló <strong>fica pesado, murcha ou racha</strong> na hora de montar o bem-casado.</>],
  [Drop, <>A calda <strong>fica grudenta, escorre ou não seca</strong> — e o acabamento não fica bonito.</>],
  [Coin, <><strong>Não sabe quanto cobrar</strong> por unidade ou pelo cento e sente que trabalha muito para lucrar pouco.</>],
  [Clock, <>Embalar um a um <strong>leva horas</strong> e o laço nunca fica com cara de profissional.</>],
  [Rings, <>Quer pegar encomendas de <strong>casamentos e festas</strong>, mas não sabe como conquistar essas clientes.</>],
]

export function Pain() {
  return (
    <section id="dores" className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle kicker="Seja sincera" title="Você se *identifica* com isso?" />
        <motion.div variants={stagger(0.1)} {...inViewProps} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DORES.map(([Icon, text], i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 50, rotate: i % 2 ? 3 : -3 }, show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease } } }}
              whileHover={{ y: -8, rotate: i % 2 ? 1 : -1, transition: { type: 'spring', stiffness: 300 } }}
              className="group bg-white rounded-3xl p-6 shadow-soft hover:shadow-card transition-shadow flex gap-4 items-start"
            >
              <motion.span
                whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                className="shrink-0 w-12 h-12 rounded-2xl bg-rose-light group-hover:bg-rose-dark group-hover:text-white transition-colors flex items-center justify-center text-rose-dark"
              >
                <Icon className="w-6 h-6" />
              </motion.span>
              <p>{text}</p>
            </motion.div>
          ))}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 12 } } }}
            className="relative overflow-hidden rounded-3xl p-6 bg-choco text-cream flex items-center"
          >
            <motion.div aria-hidden className="absolute -right-6 -bottom-6 opacity-20" animate={{ rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
              <BemCasado className="w-32 h-32" />
            </motion.div>
            <p className="relative font-serif text-xl leading-snug">Se você disse “sim” para pelo menos um… <span className="text-gold">esse ebook foi feito pra você.</span></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- SOLUÇÃO ---------------- */
export function Solution() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [-30, 30])

  const items = [
    'Pão de ló leve, macio e que não murcha',
    'Recheio e calda no ponto certo, que aguentam a entrega',
    'Embalagem caprichada que valoriza cada unidade',
    'Precificação simples por unidade e por cento',
  ]

  return (
    <section ref={ref} className="relative bg-rose-light/60 py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <Reveal y={16}><p className="text-rose-dark uppercase tracking-[.25em] text-xs font-semibold">A solução</p></Reveal>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-3 leading-tight">
            <motion.span className="block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
              Apresento o
            </motion.span>
            <motion.span
              className="block italic text-rose-dark"
              initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
            >
              {EBOOK}
            </motion.span>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-5 text-choco/85 leading-relaxed">
              Um guia completo, escrito com carinho e linguagem simples, para você sair do “acho que dá certo” para o <strong>“sei exatamente o que estou fazendo”</strong>.
            </p>
            <p className="mt-4 text-choco/85 leading-relaxed">
              Receitas testadas inúmeras vezes, com medidas precisas, fotos de referência e dicas de quem já errou muito — para que você não precise errar.
            </p>
          </Reveal>
          <motion.ul variants={stagger(0.15, 0.2)} {...inViewProps} className="mt-6 space-y-3">
            {items.map((t, i) => (
              <motion.li key={t} variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }} className="flex gap-3 items-center">
                <span className="shrink-0 w-7 h-7 rounded-full bg-gold text-white flex items-center justify-center">
                  <DrawCheck className="w-4 h-4" delay={0.4 + i * 0.15} />
                </span>
                {t}
              </motion.li>
            ))}
          </motion.ul>
          <Reveal delay={0.4} className="mt-9"><CTA className="px-8 py-4">Quero começar hoje</CTA></Reveal>
        </div>

        <div className="order-1 md:order-2 relative">
          <motion.div aria-hidden className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-gold/40" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div aria-hidden className="absolute -bottom-6 -right-4 w-20 h-20 rounded-full bg-rose-dark/30" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
          <motion.div
            className="relative rounded-[2rem] overflow-hidden shadow-card aspect-[4/5]"
            initial={{ clipPath: 'inset(100% 0% 0% 0% round 2rem)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 2rem)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease }}
          >
            {/* Fonte: Unsplash — bolo de chocolate com cerejas  https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62 */}
            <motion.img
              src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=1000&q=80"
              alt="Bolo de chocolate em camadas com chantilly e cerejas por cima"
              loading="lazy"
              style={{ y: imgY, scale: 1.2 }}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ rotate: badgeRotate }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.8 }}
            className="absolute -bottom-8 left-6 md:-left-8 w-28 h-28 rounded-full bg-choco text-cream flex flex-col items-center justify-center text-center shadow-card border-4 border-cream"
          >
            <span className="font-serif text-2xl font-bold text-gold leading-none">100%</span>
            <span className="text-[10px] uppercase tracking-widest mt-1">testado</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- O QUE VAI APRENDER ---------------- */
const LEARN = [
  ['Pão de ló perfeito', 'Massa leve e úmida, ponto da clara, forno certo e discos sempre do mesmo tamanho.',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80', 'Fatia de bolo em camadas com recheio cremoso e framboesas'],
  ['Recheios clássicos e gourmet', 'Doce de leite, brigadeiro, frutas e versões especiais que fazem sucesso nas festas.',
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80', 'Sobremesas cremosas servidas em potinhos com morangos frescos'],
  ['Calda e acabamento', 'O ponto da calda, como banhar sem desperdício e a secagem que deixa tudo lisinho.',
    'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80', 'Mãos decorando um bolo com saco e bico de confeitar'],
  ['Embalagem e laços', 'Papel crepom, celofane, fitas e tags: embrulhe rápido e com cara de profissional.',
    'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80', 'Caixa com docinhos e bombons de chocolate gourmet'],
  ['Precificação por cento', 'Calcule custos, mão de obra e lucro sem complicação — e pare de pagar para trabalhar.',
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80', 'Cupcakes decorados com cobertura rosa enfileirados'],
  ['Vendas para casamentos e festas', 'Como apresentar seu trabalho para noivas, fechar encomendas grandes e vender o ano todo.',
    'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80', 'Bolo de andares branco decorado com frutas vermelhas'],
]

export function Learn() {
  return (
    <section id="aprender" className="py-20 md:py-28 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex justify-center">
          <motion.div animate={{ rotate: [0, -8, 8, 0], y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <BemCasado className="w-16 h-16" />
          </motion.div>
        </Reveal>
        <SectionTitle
          title="O que você vai *aprender*"
          subtitle="Da massa ao laço: tudo o que você precisa para produzir com segurança e vender com orgulho."
        />
        <motion.div variants={stagger(0.12)} {...inViewProps} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {LEARN.map(([title, desc, src, alt], i) => (
            <motion.div key={title} variants={fadeUp}>
              <Tilt className="group h-full bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                <div className="relative overflow-hidden h-52">
                  <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <div className="absolute inset-0 bg-linear-to-t from-choco/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  <span className="absolute top-4 left-4 w-10 h-10 rounded-full bg-cream/95 font-serif font-bold text-rose-dark flex items-center justify-center shadow-soft">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold group-hover:text-rose-dark transition-colors">{title}</h3>
                  <p className="mt-2 text-sm text-choco/75">{desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- CAPÍTULOS (timeline) ---------------- */
// edite títulos e descrições à vontade
const CHAPTERS = [
  ['Primeiros passos', 'Utensílios essenciais, ingredientes certos e organização da cozinha para produzir em quantidade.'],
  ['Pão de ló de bem-casado', 'A massa, o ponto, o tempo de forno e como cortar discos uniformes.'],
  ['Recheios', 'Doce de leite, brigadeiro, frutas e versões gourmet que combinam e conservam bem.'],
  ['Calda e secagem', 'Ponto da calda, técnica de banhar e secagem perfeita, sem grudar.'],
  ['Embalagem', 'Papel crepom, celofane, fitas, tags e montagem rápida em série.'],
  ['Precificação', 'Planilha de custos, mão de obra, preço por unidade e por cento.'],
  ['Vendas', 'Casamentos, festas, datas comemorativas, Instagram e WhatsApp.'],
]

export function Chapters() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <section id="conteudo" className="relative bg-choco text-cream py-20 md:py-28 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      <svg className="absolute -top-px left-0 w-full h-12 md:h-16 text-cream rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,40 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100 Z" />
      </svg>
      <motion.div aria-hidden className="absolute w-96 h-96 rounded-full bg-rose-dark/20 blur-3xl top-1/3 -right-40" animate={{ y: [0, 80, 0] }} transition={{ duration: 10, repeat: Infinity }} />

      <div className="relative max-w-4xl mx-auto pt-6">
        <SectionTitle dark kicker="Por dentro do ebook" title="O que tem em cada *capítulo*" />

        <ol ref={ref} className="relative mt-14 space-y-6 pl-16 md:pl-20">
          <div aria-hidden className="absolute left-6 md:left-8 top-2 bottom-2 w-0.5 bg-white/10" />
          <motion.div aria-hidden style={{ scaleY }} className="absolute left-6 md:left-8 top-2 bottom-2 w-0.5 bg-linear-to-b from-gold to-rose-dark origin-top" />
          {CHAPTERS.map(([title, desc], i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}
              whileHover={{ x: 8 }}
              className="relative bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-colors rounded-2xl p-5 md:p-6"
            >
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 0.15 }}
                className="absolute -left-[3.6rem] md:-left-[4.1rem] top-5 w-11 h-11 rounded-full bg-gold text-choco-dark font-serif font-bold flex items-center justify-center ring-4 ring-choco"
              >
                {String(i + 1).padStart(2, '0')}
              </motion.span>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-cream/70 text-sm mt-1">{desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------- BÔNUS ---------------- */
// edite nomes, descrições e valores
const BONUS = [
  [Sheet, 'Planilha de precificação', 'É só colocar seus custos para saber o preço certo da unidade e do cento.'],
  [Box, 'Guia de embalagens', 'Onde comprar, quais papéis e fitas usar e como embrulhar rápido e bonito.'],
  [Instagram, 'Instagram que vende', 'Fotos com o celular, legendas prontas e mensagens de atendimento no WhatsApp.'],
]

export function Bonus() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle kicker="Só para quem garantir agora" title="Bônus *exclusivos*" />
        <motion.div variants={stagger(0.18)} {...inViewProps} className="mt-14 grid md:grid-cols-3 gap-7" style={{ perspective: 1200 }}>
          {BONUS.map(([Icon, title, desc], i) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, rotateX: -70, y: 60 }, show: { opacity: 1, rotateX: 0, y: 0, transition: { type: 'spring', stiffness: 70, damping: 14 } } }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-7 shadow-soft hover:shadow-card transition-shadow border-2 border-dashed border-gold/60 origin-top"
            >
              <motion.span
                className="absolute -top-3.5 left-6 bg-gold text-choco-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                Bônus {i + 1}
              </motion.span>
              <motion.div
                className="w-16 h-16 rounded-2xl bg-rose-light text-rose-dark flex items-center justify-center"
                whileHover={{ rotate: [0, -15, 15, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-9 h-9" />
              </motion.div>
              <h3 className="font-serif text-xl font-bold mt-5">{title}</h3>
              <p className="text-sm text-choco/75 mt-2">{desc}</p>
              <p className="mt-5 text-sm text-choco/60">Valor: <s>R$ [XX]</s></p>
              <p className="text-shimmer font-extrabold text-xl">HOJE: GRÁTIS</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- GALERIA (rola de lado com o scroll) ---------------- */
const GALLERY = [
  ['https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&q=80', 'Bolo colorido de camadas coberto com confeitos sobre boleira azul'],
  ['https://images.unsplash.com/photo-1607478900766-efe13248b125?w=700&q=80', 'Cupcakes com cobertura em espiral rosa e azul'],
  ['https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=700&q=80', 'Bolo de andares branco decorado com frutas vermelhas'],
  ['https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=700&q=80', 'Bolo rosa decorado com casquinha de sorvete e calda escorrendo'],
  ['https://images.unsplash.com/photo-1602351447937-745cb720612f?w=700&q=80', 'Torta mousse de chocolate com cobertura brilhante e confeitos'],
  ['https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=700&q=80', 'Tortinhas de frutas vermelhas com massa trançada em mesa clara'],
  ['https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700&q=80', 'Fatias de bolo em camadas com chocolate sobre tábua de madeira'],
  ['https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=700&q=80', 'Cupcake red velvet com chantilly e frutas vermelhas'],
]

function GalleryRow({ items, x }) {
  return (
    <motion.div style={{ x }} className="flex gap-4 md:gap-6 w-max">
      {items.map(([src, alt], i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, rotate: i % 2 ? 2 : -2, zIndex: 2 }}
          className="relative w-60 h-60 md:w-80 md:h-72 rounded-3xl overflow-hidden shadow-soft"
        >
          <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </motion.div>
  )
}

export function Gallery() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])

  return (
    <section ref={ref} className="bg-rose-light/50 py-20 md:py-28 overflow-hidden">
      <div className="px-4 sm:px-6">
        <SectionTitle title="Doces que dão *água na boca*" subtitle="Inspiração para o que você vai ser capaz de criar." />
      </div>
      <div className="mt-14 space-y-4 md:space-y-6">
        <GalleryRow items={GALLERY} x={x1} />
        <GalleryRow items={[...GALLERY].reverse()} x={x2} />
      </div>
    </section>
  )
}
