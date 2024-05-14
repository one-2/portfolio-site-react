// TODO: Add a page for each project.
//  - 3411 project.
//  - 9444 project.
//  - Pong RL player.
//  - TicTacToe player.
//  - NN map.
//      - Main viz: force-directed graph (https://observablehq.com/@d3/force-directed-graph/2?intent=fork)
//      - Alternative viz:
//          - (padded) treemap (https://observablehq.com/@d3/nested-treemap?intent=fork)
//          - tidy tree/hierarchical node-link diagram (https://observablehq.com/@d3/tree/2?intent=fork)

import ForceDirectedGraph from './_graph/graph.js' // TODO: Add index.js to _graph directory to simplify import

export default function LearningMachines() {
    return (
        <div>
            <h1>LearningMachines</h1>
            <ForceDirectedGraph />
        </div>
    )
}
