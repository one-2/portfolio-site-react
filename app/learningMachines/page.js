// TODO: Add a page for each project.
//  - 3411 project.
//  - NN map.
//      - Main viz: force-directed graph (https://observablehq.com/@d3/force-directed-graph/2?intent=fork)
//      - Alternative viz:
//          - (padded) treemap (https://observablehq.com/@d3/nested-treemap?intent=fork)
//          - tidy tree/hierarchical node-link diagram (https://observablehq.com/@d3/tree/2?intent=fork)
//  - Extension: 
//      - Pong RL player.
//      - Essays.
//
// TODO: pull out the page generation to a separate file. Unify frontend for 
//       software and learning machines 'projects' pages.


import styles from './page.module.css';
import ProjectsGrid from './_components/projectsGrid';

export default function LearningMachines() {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <h1>Learning Machines.</h1>
      </div>
      <ProjectsGrid />
    </div>
  )
}
