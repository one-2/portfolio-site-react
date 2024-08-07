import styles from '../page.module.css';

const blogData = require('../blogData.json');

export default function BlogPage({ params }) {
  const post = blogData.data[0].data.find(item => item.slug === params.slug);
  return (
    <div className={styles.entry}>
      <h1>{post.title}</h1>
      <h4>{post.date}</h4>
      <h4>{post.description}</h4>
      <p>{post.data.text}</p>
    </div>
  )
}
