// TODO: 
// 2. tictactoe
// 3. portfolioSite
// Extension:
// - mazeSearcher

import NavPageBuilder from "../../_components/navPageBuilder"

export default function software() {
  const data = {
    title: 'Software',
    sections: [
      {
        metadata: {
          href: '/technical/software/',
        },
        data: {
          title: 'Lost In The Hedges',
          summaryText: '(coming soon) Use graph theory and search algorithms to find your way out of a maze.'
        },
      },
      {
        metadata: {
          href: '/technical/software/',
        },
        data: {
          title: 'Tic Tac Toe',
          summaryText: '(coming soon) Discover classical AI technology and play a game of nine-board tic tac toe.'
        },
      },
      {
        metadata: {
          href: '/technical/software/',
        },
        data: {
          title: 'My Portfolio Site',
          summaryText: '(coming soon) Learn about the design and engineering of this website.'
        },
      }
    ]
  };

  return <NavPageBuilder data={data} />
}
