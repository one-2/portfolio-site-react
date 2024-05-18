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
          <h2><Link href='exxonMobil'>Exxon Mobil Security Returns</Link></h2>
          <p>...</p>
        </div>
        {/* <div className={styles.card}>
          <h2><Link href='cellularAutomata'>Cellular Automata</Link></h2>
          <p>...</p>
        </div>
        <div className={styles.card}>
          <h2><Link href='agentBasedModels'>ABMs</Link></h2>
          <p>...</p>
        </div>
        <div className={styles.card}>
          <h2><Link href='naturalSimulations'>Natural Systems Simulations</Link></h2>
          <p>...</p>
        </div>
        <div className={styles.card}>
          <h2><Link href='pureStatistics'>Visualising Pure Statistics</Link></h2>
          <p>...</p>
        </div> */}
      </div>
    </div>
  )
}
