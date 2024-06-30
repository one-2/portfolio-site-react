import styles from './page.module.css';
import WritingLayout from '../writingLayout';

export const metadata = {
  title: 'Blogs',
  description: '...',
}

function BlogLayout({ children }) { // NB layouts require children props for dynamic routing to work
  return (
    <div className={styles.main}>
      <WritingLayout collection='blogs' styles={styles} />
      {children}
    </div>
  );
}

export default BlogLayout;

