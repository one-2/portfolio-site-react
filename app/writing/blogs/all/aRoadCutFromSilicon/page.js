import BlogPage from "../blogPage";
import BlogSidebar from "../../blogSidebar";
import styles from '../blogPage.module.css';


// TODO: fix duplicate data records by fetching it all from the same place, in 
// both the sidebar and the blog page itself.

// TODO: Fix styling so content is not occluded by sidebar.
export default function Page() {
  const data = {
    title: 'A Road Cut From Silicon',
    description: 'Paths to industrialism.',
    date: 'T+54',
    href: '/writing/blogs/all/aRoadCutFromSilicon',
    data: {
      text: 'A road cut from silicon stretches to the horizon.',
    }
  }

  return (
    <div className={styles.main} >
      {/* <BlogSidebar /> */}
      <BlogPage post={data} />
    </div >
  );
}
