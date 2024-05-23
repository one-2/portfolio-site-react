import Link from 'next/link'
import styles from './sidebar.module.css';

const Sidebar = ({ data }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <div className={styles.body}>
        {data.map((section) => buildSection(section))}
      </div>
    </div>
  )
}

function buildSection(data) {
  return (
    <div className={styles.listContainer}>
      <h2>{data.title}</h2>
      <ul>
        {data.data.map((post) => (
          <li>
            <span><p className={styles.title}>Title: </p><Link href={post.href}><h3>{post.title}</h3></Link></span>
            <p>Info: {post.description}</p>
            <p>Date: {post.date}</p>
            <p>-</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;
