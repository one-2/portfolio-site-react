
import Sidebar from '../_components/sidebar.js';
import styles from '../sidebar.module.css';

const BlogSidebar = ({ data }) => {
  return (
    <div className={styles.main}>
      <Sidebar rootDataObject={data} />
    </div>
  )
}

export default BlogSidebar;
