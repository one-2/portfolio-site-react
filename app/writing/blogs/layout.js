
import Sidebar from '../_components/sidebar.js';
import styles from './page.module.css';

const blogData = require('./blogData.json');

export const metadata = {
  title: 'Blogs',
  description: '...',
}

const BlogSidebar = ({ children }) => {
  return (  
    <div className={styles.main}>
      <Sidebar rootDataObject={blogData} />
      {children}
    </div>
  )
}

export default BlogSidebar;
