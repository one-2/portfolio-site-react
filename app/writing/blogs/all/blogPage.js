const BlogPage = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <h4>{post.date}</h4>
      <h4>{post.description}</h4>
      <p>{post.data.text}</p>
    </div>
  )
}

export default BlogPage;
