import styles from './page.module.css';

import Link from 'next/link';

export default function writing() {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <Link href='writing/technicalEssays'>
          <div className={styles.card}>
            <h2>Technical Essays</h2>
            <p><span>Learning From Machines</span></p>
            <p><span>Achilles' Spear</span></p>
            <p><span>Mathematical Recall</span></p>
            <p><span>Is Machine Learning Science?</span></p>
            <p><span>... more</span></p>
          </div>
        </Link>
        <Link href='writing/blogs'>
          <div className={styles.card}>
            <h2>Blogs</h2>
            <p><span>Shannon, Neumann, Yeager</span></p>
            <p><span>Going Over The Falls</span></p>
            <p><span>A Road Cut From Silicon</span></p>
            <p><span>MMXXIV</span></p>
          </div>
        </Link>
      </div>
    </div>
  );
}
