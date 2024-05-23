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
import { metadata } from "../../layout";

export default function learningMachines() {
  const data = {
    title: 'Learning Machines',
    sections: [
      {
        metadata: {
          href: '/technical/learningMachines/musicGenreClassification',
        },
        data: {
          title: 'Music Genre Classification',
          date: '23T3',
          summaryText: '(coming soon) Read about the unique challenges of processing and interpreting audio data.',
          fullText: '...',
        }
      },
      {
        metadata: {
          href: '/technical/learningMachines/ticTacToe',
        },
        data: {
          title: 'Tic Tac Toe',
          date: '23T3',
          summaryText: '(coming soon) Play tic tac toe against a classic artificial intelligence.',
          fullText: '.',
        }
      },
      {
        metadata: {
          href: '/technical/software',
        },
        data: {
          title: 'My Portfolio Site',
          date: '23T3',
          summaryText: '(coming soon) Learn about the design and engineering of this website.',
          fullText: '...',
        }
      }
    ]
  };
  return <NavPageBuilder data={data} />;
}
