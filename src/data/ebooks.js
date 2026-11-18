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
    subtitulo: 'Receitas, embalagem e o caminho para vender',
    chamada: 'Do pão de ló ao laço: o passo a passo para produzir bem-casados com acabamento profissional, precificar certo e vender para casamentos e festas.',
    novo: true,
  },
  // { slug: 'proximo', path: '/ebook/proximo', titulo: '...', subtitulo: '...', chamada: '...' },
]
