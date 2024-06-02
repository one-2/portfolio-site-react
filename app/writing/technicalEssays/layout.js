
import styles from './page.module.css';
import Sidebar from '../_components/sidebar';

const essayData = require('./essayData.json');

export const metadata = {
  title: 'Technical Essays',
  description: '...',
}

const EssaysLayout = ({ children }) => {
  return (  
    <div className={styles.main}>
      <Sidebar rootDataObject={essayData} />
      {children}
    </div>
  )
}

export default EssaysLayout;
