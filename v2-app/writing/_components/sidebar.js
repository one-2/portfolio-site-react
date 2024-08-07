import Link from 'next/link'
import styles from './sidebar.module.css';

const Sidebar = ({ rootDataObject }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>{rootDataObject.title}</h1>
      </div>
      <div className={styles.body}>
        {rootDataObject.data.map((section) => buildSection(section))}
      </div>
    </div>
  )
}

function buildSection(sectionData) {
  return (
    <div className={styles.listContainer}>
      <h2>{sectionData.title}</h2>
      <ul>
        {sectionData.data.map((post, index) => (
          <li key ={index}>
            <Link href={post.href}>
            <span><p className={styles.title}>Title: </p><h3>{post.title}</h3></span>
            <p>Info: {post.description}</p>
            <p>Date: {post.date}</p>
            </Link>
            <p>-</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;
