// TODO:
// - Write blog posts
// - Add blog posts to page
// - Make the blog posts generate from data. Save data as json and then import
//    it to a generating function to build the component at build time. (Will
//    this build at build time as desired? Don't want it building at runtime.)
// - Turn this page into a nextjs template and have the blog posts pop out into
//    it from the rhs.
// Extension:
// - RAG search

export default function Blog() {
  return (
    <div>
      <div>
        <h1>Blog</h1>
      </div>
      <div style={{ alignContent: end }}>
        <div>
          <ul>
            <li><Link href=''>Going Over the Falls.</Link></li> 
            {/* ^Commitment, courage, meditation, foolishness, obsession. */}
            <li><Link href=''>Shannon, Neumann, Yeager.</Link></li>
            {/* ^Characteristics of the greats. */}
            <li><Link href=''>A Road Cut from Silicon.</Link></li>
            {/* ^The path of a young industrialist. */}
            <li><h3>MMXXIV</h3></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
