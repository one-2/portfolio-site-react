// TODO: Add a page for each project.
//  - 3411 project.
//  - NN map.
//      - Main viz: force-directed graph (https://observablehq.com/@d3/force-directed-graph/2?intent=fork)
//      - Alternative viz:
//          - (padded) treemap (https://observablehq.com/@d3/nested-treemap?intent=fork)
//          - tidy tree/hierarchical node-link diagram (https://observablehq.com/@d3/tree/2?intent=fork)
//  - Extension: Pong RL player.

import styles from './page.module.css';

import ForceDirectedGraph from './_graph/graph.js' // TODO: Add index.js to _graph directory to simplify import

export default function LearningMachines() {
    return (
        <div className={styles.main}>
            <div className={styles.description}>
                <h1>Learning Machines.</h1>
            </div>
            <div className={styles.description}>
                <p>How can we teach a machine by example?</p>
                <p>How can we use machines to find useful information in overwhelming, confusing, or contradictory environments?</p>
                <p>How can we design machines which learn to succeed at new tasks without human guidance?</p>
                <p>What sort of tasks can learning machines do well?</p>
                <p>How can we use mathematical constructs to store behavioural information, and recount these behaviours when the moment is right?</p>
                <p>How can we design new mathematical methods to improve machines' learning capabilities and reduce costs?</p>
            </div>
            <div className={styles.description}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>Map of ML</h2>
                        <p>A graph representing contemporary topics in machine learning, including theoretical, mathematical and philosphical topics.</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Tic Tac Toe</h2>
                        <p>Play a game of 9-board against an artifical intelligence and discover its design.</p>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.description}>
                    <div>
                        <ForceDirectedGraph />
                    </div>
                </div>
            </div>
        </div >
    )
}
