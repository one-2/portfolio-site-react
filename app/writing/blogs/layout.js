import styles from './page.module.css';
import WritingLayout from '../writingLayout';

export const metadata = {
  title: 'Blogs',
  description: '...',
}

async function BlogLayout() {
  return <WritingLayout collection='blogs' styles={styles} />;
}

export default BlogLayout;

