// TODO:
//  - 3411 project.

//  - Extension: 
//  - NN map.
//      - Main viz: force-directed graph (https://observablehq.com/@d3/force-directed-graph/2?intent=fork)
//      - Alternative viz:
//          - (padded) treemap (https://observablehq.com/@d3/nested-treemap?intent=fork)
//          - tidy tree/hierarchical node-link diagram (https://observablehq.com/@d3/tree/2?intent=fork)
//      - Pong RL player.
//      - Essays.
//
// TODO: pull out the page generation to a separate file. Unify frontend for 
//       software and learning machines 'projects' pages.

import NavPageBuilder from "../../_components/navPageBuilder";

export default function learningMachines() {
  const data = {
    header: {
      title: 'Learning Machines'
    },
    grid: [
      {
        title: 'Tic Tac Toe',
        href: 'ticTacToe',
        data: [
          'Discover classical AI technology and play a game of nine-board tic tac toe.'
        ]
      },
      {
        title: 'Musical Genre Classification',
        href: 'musicGenre',
        data: [
          'Read our music genre classification project report, from my introductory neural networks course.'
        ]
      }
    ]
  }
  return <NavPageBuilder data={data} />;
}
