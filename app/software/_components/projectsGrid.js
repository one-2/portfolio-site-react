import Link from 'next/link'
import styles from '../styles/page.module.css'


export default function ProjectsGrid() {
  return (
    <div className={styles.gridcontainer}>
      <div className={styles.description}>
        <h2>Projects</h2>
      </div>
      <div className={styles.grid2}>
        {/* <div className={styles.card}>
          <h3><Link href='mazeSearcher'>Maze Run</Link></h3>
          <p>Use graph theory and search algorithms to find your way out of a maze.</p>
        </div> */}
        <div className={styles.card}>
          <h2><Link href='ticTacToe'>Tic Tac Toe</Link></h2>
          <p>Discover classical AI technology and play a game of nine-board tic tac toe.</p>
        </div>
        <div className={styles.card}>
          <h2><Link href='portfolioSite'>Portfolio Site</Link></h2>
          <p>Learn about the design and engineering of this website.</p>
        </div>
      </div>
    </div>
  )
}
