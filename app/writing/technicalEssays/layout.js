import styles from './page.module.css';
import Sidebar from '../_components/sidebar';

export const metadata = {
  title: 'Technical Essays',
  description: '...',
}

async function EssaysLayout({ children }) { // TODO: refactor this and layout in Blogs to one function
  let data;
  try {
    const response = await fetch('http://localhost:5050/writing/essays', {
      method: 'GET', // Default option, stated for practice
      headers: {
        'Content-Type': 'application/json' // Default option, stated for practice
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    data = await response.json();
  } catch (error) {
    console.error('Fetch error: ', error);
  }

  console.log(data)
  return (  
    <div className={styles.main}>
      <Sidebar rootDataObject={data} />
      {children}
    </div>
  )
}

export default EssaysLayout;
