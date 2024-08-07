// TODO: 
// 2. tictactoe
// 3. portfolioSite
// Extension:
// - mazeSearcher

import NavPageBuilder from "../../_components/_navPageBuilder/navPageBuilder"

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
          title: 'This Site',
          summaryText: '(coming soon) Learn about the design and engineering of this website.'
        },
      }
    ]
  };

  return <NavPageBuilder data={data} />
}
