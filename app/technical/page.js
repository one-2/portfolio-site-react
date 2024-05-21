import styles from './page.module.css';

import Link from 'next/link';

export default function technical() {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <Link href='technical/software'>
          <div className={styles.card}>
            <h2>Software</h2>
            <p><span>Maze Search</span></p>
            <p><span>Portfolio Site</span></p>
          </div>
        </Link>
        <Link href='technical/learningMachines'>
          <div className={styles.card}>
            <h2>Learning Machines</h2>
            <p><span>Tic Tac Toe vs AI</span></p>
            <p><span>Musical Genre Classification</span></p>
          </div>
        </Link>
        <Link href='technical/modeling'>
          <div className={styles.card}>
            <h2>Modeling</h2>
            <p><span>Exxon Mobil Security Returns</span></p>
            <p><span>Cellular Automata</span></p>
          </div>
        </Link>
      </div>
    </div>
  );
}
