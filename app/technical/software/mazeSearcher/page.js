export const metadata = {
  title: 'Maze Searcher',
  description: '...',
}

export default function mazeSearcher() {
  return (
    <div>
      <h1>Maze Searcher</h1>
      <p>Find your way through a maze with the help of search algorithms.</p>
      {/*
       * ****GAME mode****
       * User can see only part of the maze. Fog of war around it.
       * User can place intermediate goals to help the search algorithm.
       * Search path removes fog of war as the algorithm works.
       * User can use different search algorithms in different conditions:
       * - Informed or uninformed searches to reach intermediate goals.
       * - Uninformed searches only to reach the end goal.
       * - Encourages user to think about how the choice of search algorithm
       *    affects the search performance - complexity and behaviour optimality.
       * - User can also turn on a 'storage limit' to increase difficulty and
       *    encourage thinking about space complexity.
       * Add cyclic mazes to elucidate extra graph properties. (May be too much info).
       * 
       * ****SANDBOX mode****
       * User can construct their own mazes.
       * User can use all algorithm types.
       * 
       * ****COST mode****
       * User can see toy problems.
       * User selects different search algorithms.
       * User sees extrapolated cost of search for larger (real-world) graph
       * problems.
       */}

       {/* IMPLEMENTATION
       * ****Backend:****
       * **Maze generation algorithms:
       * Algos (https://en.wikipedia.org/wiki/Maze_generation_algorithm)
       * Algos (https://en.wikipedia.org/wiki/Graph_theory)
       * Randomized depth-first search / recursive backtracker
       * Iterative randomized Prim's algorithm
       * Wilson's algorithm
       * Analysis of statistical properties of these searches
       * 
       * **Search algorithms:
       * Breadth-first search
       * Greedy best-first search
       * A* search
       * 
       * ****Frontend:****
       * CSS (https://medium.com/swlh/how-to-create-a-maze-with-javascript-36f3ad8eebc1)
       * CSS (https://uipencil.com/2023/04/12/how-to-build-a-mini-maze-game-using-html-css-and-javascript/#3-1-javascript-html)
       * Black and white maze
       * Grey outside the visible circle
       */}
    </div>
  )
}