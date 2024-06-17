import Link from 'next/link'
import styles from './sidebar.module.css';

const Sidebar = ({ rootDataObject }) => {
   // Unclear why this is double-nested when it comes in?
   // -> To allow buildSection to map
  // console.log(rootDataObject[0])
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>{rootDataObject[0][0].section.title}</h1>
        <h3>{rootDataObject[0][0].section.subtitle}</h3>  
      </div>
      <div className={styles.body}>
        {rootDataObject.map((postlist) => buildSection(postlist))}
      </div>
    </div>
  )
}

// Shape: 
// {
//   _id: '6663144262fd49b849158c32',
//   section: {
//     data: { title: 'Blogs', subtitle: '(coming soon)' },
//     metadata: { href: '/writing/blogs/' }
//   },
//   post: {
//     metadata: { slug: 'goingOverTheFalls', date: 'T+54', tags: [Array] },
//     header: {
//       title: 'Going Over The Falls',
//       description: 'Courage, meditation, foolishness, obsession.'
//     },
//     body: {
//       text: 'Courage is the first of human qualities because it is the quality which guarantees the others. - Aristotle\n' +
//         '\n' +
//         'Going over the falls is a solemn and frantic experience.'
//     }
//   }
// }



function buildSection(section) {
  console.log(section)
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
