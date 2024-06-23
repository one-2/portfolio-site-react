import Sidebar from './_components/sidebar.js';
import getWritingData from './fetchAllWritingData.js';

const WritingLayout = async ({ collection, styles }) => {
  let data = await getWritingData(collection); // TODO Pass into children as param to reduce the number of calls and latency
  return (
      <Sidebar rootDataObject={data} />
  );
}

export default WritingLayout