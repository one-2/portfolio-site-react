import styles from './page.module.css';
import WritingLayout from '../writingLayout.js';

export const metadata = {
  title: 'Technical Essays',
  description: '...',
}

function EssayLayout({ children }) { // NB layouts require children props for dynamic routing to work
  return (
    <div className={styles.main}>
      <WritingLayout collection='essays' styles={styles} />
      {children}
    </div>
  );
}

export default EssayLayout;

