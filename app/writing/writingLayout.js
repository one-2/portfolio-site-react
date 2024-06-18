import Sidebar from './_components/sidebar.js';
import getWritingData from './fetchAllWritingData.js';

const WritingLayout = async ({ collection, styles }) => {
  let data = await getWritingData(collection);
  if (collection === 'essays') data = data[0]; // hack fix to weird double-listing bug in essays case
  return (
    <div className={styles.main}>
      <Sidebar rootDataObject={data} />
    </div>
  );
}

export default WritingLayout