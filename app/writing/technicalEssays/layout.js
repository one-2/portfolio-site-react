import styles from './page.module.css';
import Sidebar from '../_components/sidebar';

export const metadata = {
  title: 'Technical Essays',
  description: '...',
}

const EssaysLayout = ({ children }) => {
  return (  
    <div className={styles.main}>
      <Sidebar rootDataObject={undefined} />
      {children}
    </div>
  )
}

export default EssaysLayout;
