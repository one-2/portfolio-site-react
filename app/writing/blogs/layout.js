import Sidebar from '../_components/sidebar.js';
import styles from './page.module.css';

export const metadata = {
  title: 'Blogs',
  description: '...',
}

const BlogLayout = ({ children }) => {
  return (  
    <div className={styles.main}>
      <Sidebar rootDataObject={undefined} />
      {children}
    </div>
  )
}

export default BlogLayout;
