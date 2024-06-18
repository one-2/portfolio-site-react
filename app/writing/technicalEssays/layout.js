import styles from './page.module.css';
import WritingLayout from '../writingLayout';

export const metadata = {
  title: 'Technical Essays',
  description: '...',
}

async function BlogLayout() {
  return <WritingLayout collection='essays' styles={styles} />;
}

export default BlogLayout;

