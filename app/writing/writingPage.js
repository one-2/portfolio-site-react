import getWritingData from './fetchAllWritingData';

const WritingPage = async ({ siteSection, slug, styles }) => {
  let data = await getWritingData(siteSection); 
  // TODO save data to context for reduced latency
  if (data.length === 1) data = data[0]; // Hack fix for weird bug where the data is doubly listed on the return, while the Blogs data is singly
    data = data.find(item => item.post.metadata.slug === slug);

  return (
    <div className={styles.entry}>
      <h1>{data.post.header.title}</h1>
      <h4>{data.post.metadata.date}</h4>
      <h4>{data.post.header.description}</h4>
      <p>{data.post.body.text}</p>
    </div>
  );
};

export default WritingPage;
