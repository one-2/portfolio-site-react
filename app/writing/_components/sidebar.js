import Link from 'next/link'
import styles from './sidebar.module.css';

const Sidebar = ({ rootDataObject }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>{rootDataObject[0].section.title}</h1>
        <h3>{rootDataObject[0].section.subtitle}</h3>  
      </div>
      <div className={styles.body}>
        {buildSection(rootDataObject)}
      </div>
    </div>
  )
}

function buildSection(section) {
  return (
    <div className={styles.listContainer}>
      {/* <h2>{sectionData.title}</h2> */}
      <ul>
        {section.map((item, index) => (
          <li key ={index}>
            <Link href={buildLinkHref(item)}>
            <span><p className={styles.title}>Title: </p><h3>{item.post.header.title}</h3></span>
            <p>Info: {item.post.header.description}</p>
            <p>Date: {item.post.metadata.date}</p>
            </Link>
            <p>-</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const buildLinkHref = (item) => {
  const href = item.section.metadata.href + item.post.metadata.slug;
  return href;
}

export default Sidebar;
