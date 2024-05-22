// TODO: 
// 2. tictactoe
// 3. portfolioSite
// Extension:
// - mazeSearcher

import NavPageBuilder from "../../_components/navPageBuilder"

export default function software() {
  const data = {
    header: {
      title: 'Software'
    },
    grid: [
      {
        title: 'Lost In The Hedges',
        href: '/technical/software',
        data: [
          '(coming soon) Use graph theory and search algorithms to find your way out of a maze.'
        ]
      },
      {
        title: 'Tic Tac Toe',
        href: '/technical/software',
        data: [
          '(coming soon) Discover classical AI technology and play a game of nine-board tic tac toe.'
        ]
      },
      {
        title: 'My Portfolio Site',
        href: '/technical/software',
        data: [
          '(coming soon) Learn about the design and engineering of this website.'
        ]
      }
    ]
  }
  return <NavPageBuilder data={data} />
}
