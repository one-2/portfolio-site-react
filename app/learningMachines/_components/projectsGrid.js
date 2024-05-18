import Link from 'next/link'
import styles from '../styles/page.module.css'

export default function ProjectsGrid() {
  return (
    <div className={styles.gridcontainer}>
      <div className={styles.description}>
        <h2>Projects</h2>
      </div>
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h2><Link href='mlMap'>Map of ML</Link></h2>
          <p>Explore machine learning with an interactive graph.</p>
        </div>
        <div className={styles.card}>
          <h2><Link href='ticTacToe'>Tic Tac Toe</Link></h2>
          <p>Discover classical AI technology and play a game of nine-board tic tac toe.</p>
        </div>
      </div>
    </div>
  )
}