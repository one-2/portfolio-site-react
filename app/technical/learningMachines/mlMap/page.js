import ForceDirectedGraph from './_graph/graph.js' // TODO: Add index.js to _graph directory to simplify import

// Some graph visualisation options:
// D3 (https://observablehq.com/@d3/gallery)
// - (padded) treemap (https://observablehq.com/@d3/nested-treemap?intent=fork)
// - tidy tree/hierarchical node-link diagram (https://observablehq.com/@d3/tree/2?intent=fork)
// - force-directed graph (https://observablehq.com/@d3/force-directed-graph/2?intent=fork)

export default function mapOfMl() {
    return (
        <div>
            <h1>Map of ML</h1>
            <ForceDirectedGraph />
        </div>
    )
}