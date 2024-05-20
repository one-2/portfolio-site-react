import Link from 'next/link'
import styles from './nav.module.css'

export default function MainNavGrid() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.card}>
          <h2><Link href='technical'>TECH</Link></h2>
        </div>
        <div className={styles.card}>
          <h2><Link href='resume'>CV</Link></h2>
        </div>
        <div className={styles.card}>
          <h2><Link href='writing'>WRITING</Link></h2>
        </div>
        <div className={styles.card}>
          <h2><Link href='art'>ART</Link></h2>
        </div>
      </div>
    </div>
  )
}
