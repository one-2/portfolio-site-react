// TODO:
// - Add blog posts to page
// - Make the blog posts generate from data. Save data as json and then import
//    it to a generating function to build the component at build time. (Will
//    this build at build time as desired? Don't want it building at runtime.)
// - Turn this page into a nextjs template and have the blog posts pop out into
//    it from the rhs.
// Extension:
// - RAG search

import BlogSidebar from './blogSidebar';

export const metadata = {
  title: 'Blogs',
  description: '...',
}

export default function Blog() {
  // Import the data
  const blogData = require('./blogData.json');

  return (
    <BlogSidebar data={blogData} />
  )
}
