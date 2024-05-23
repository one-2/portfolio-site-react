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
  const data = [
    {
      id: 0,
      title: 'Learning Machines',
      data: [
        {
          title: 'Musical Genre Classification',
          description: 'Read our music genre classification project report, from my introductory neural networks course..',
          date: '23T3',
          href: '/technical/learningMachines/musicGenreClassification',
          data: {
              text: 'We trained a neural network to classify music genres. The network achieved an accuracy of 80% on the test set.',
          }
        },
        {
          title: 'Tic Tac Toe',
          description: 'Play tic tac toe against a classic artificial intelligence.',
          date: '24T1',
          href: '/technical/learningMachines/ticTacToe',
        }
      ]
    }
  ]
  
  return <NavPageBuilder data={data} />;
}
