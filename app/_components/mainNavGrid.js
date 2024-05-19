import Link from 'next/link'
import styles from '../page.module.css'

export default function MainNavGrid() {
  return (
    <div className={styles.gridcontainer}>
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h2><Link href='technical'>Technical</Link></h2>
        </div>
        {/* <div className={styles.card}>
          <h2><Link href='resume'>Resume</Link></h2>
        </div>
        <div className={styles.card}>
          <h2><Link href='writing'>Writing</Link></h2>
        </div>
        <div className={styles.card}>
          <h2><Link href='art'>Art</Link></h2>
        </div> */}
      </div>
    </div>
  )
}
