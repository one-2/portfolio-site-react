import BlogPage from "../blogPage";
import BlogSidebar from "../../blogSidebar";
import styles from '../blogPage.module.css';


// TODO: fix duplicate data records by fetching it all from the same place, in 
// both the sidebar and the blog page itself.

// TODO: Fix styling so content is not occluded by sidebar.
export default function Page() {
  const data = {}
//     title: 'Going Over The Falls',
//     description: 'Courage, meditation, foolishness, obsession.',
//     date: 'T+54',
//     href: '/writing/blogs/all/goingOverTheFalls',
//     data: {
//       text: 'Courage is the first of human qualities because it is the quality which guarantees the others. - Aristotle\n\nGoing over the falls is a solemn and frantic experience.',
//     }
//   }

  return (
    <div className={styles.main} >
      {/* <BlogSidebar /> */}
      <BlogPage post={data} />
    </div >
  );
}
