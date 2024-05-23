// TODO Fix styling - in the single-element case, the element isn't centered.

import Link from 'next/link'
import styles from './mainNavGrid.module.css'

export default function MainNavGrid() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <Link href='technical'>
          <div className={styles.card}>
            <h2>TECH</h2>
          </div>
        </Link>
        <Link href='cv'>
          <div className={styles.card}>
            <h2>CV</h2>
          </div>
        </Link>
        <Link href='writing'>
          <div className={styles.card}>
            <h2>WRITING</h2>
          </div>
        </Link>
        <Link href='art'>
          <div className={styles.card}>
            <h2>ART</h2>
          </div>
        </Link>
      </div >
    </div >
  )
}
