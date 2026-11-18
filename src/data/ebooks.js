/* =========================================================
   CATÁLOGO DE EBOOKS
   Cada item aparece na página /links e na seção de ebooks do portfólio.
   Para lançar um ebook novo:
     1. crie a página em src/pages/ebooks/
     2. registre a rota em src/App.jsx
     3. adicione o item aqui
   ========================================================= */

export const EBOOKS = [
  {
    slug: 'bem-casado',
    path: '/ebook/bem-casado',
    titulo: 'Venda de Bem-Casados',
    chamada: 'Do pão de ló ao laço: aprenda a fazer e vender bem-casados',
    // Fonte: Unsplash — troque pela capa real do ebook
    capa: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    capaAlt: 'Bolo de chocolate decorado com ganache',
    destaque: true,
  },
  // { slug: 'proximo', path: '/ebook/proximo', titulo: '...', chamada: '...', capa: '...', capaAlt: '...' },
]
