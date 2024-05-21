// TODO:
// - Write blog posts
// - Add blog posts to page
// - Make the blog posts generate from data. Save data as json and then import
//    it to a generating function to build the component at build time. (Will
//    this build at build time as desired? Don't want it building at runtime.)
// - Turn this page into a nextjs template and have the blog posts pop out into
//    it from the rhs.
// Extension:
// - RAG search

import Link from 'next/link';
import styles from './page.module.css';

export default function Blog() {
  return (
    <div className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h1>Blog</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.listContainer}>
            <ul>
              <li><Link href=''>Going Over the Falls</Link></li>
              {/* ^Commitment, courage, meditation, foolishness, obsession */}
              <li><Link href=''>Shannon, Neumann, Yeager</Link></li>
              {/* ^Characteristics of the greats */}
              <li><Link href=''>A Road Cut from Silicon</Link></li>
              {/* ^The path of a young industrialist */}
              <li><Link href=''>MMXXIV</Link></li>
              {/* ^Our recent progress in information technology and artificial intelligence against a historical backdrop. */}
              {/* Alt title: 'Unix Time' */}
              <h3>T+54</h3>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
