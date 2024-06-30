
function main() {
  console.log('Running push script')
  // pushAllBlogs();
  // pushAllEssays();
}

function pushAllBlogs() {
  console.log('Pushing all blogs')
  const data = require('./initialData/initialBlogData.json').collection
  // console.log(data)
  console.log('pushing blog data to server')
  for (const blog of data) {
    pushBlog(blog);
  }
}

function pushBlog(blog) {
  pushIt('http://localhost:' + PORT + '/writing/blogs', blog)
}

function pushAllEssays() {
  console.log('Pushing all essays')
  const data = require('./initialData/initialEssayData.json').collection
  console.log('pushing essay data to server')
  for (const essay of data) {
    pushEssay(essay);
  }
}

function pushEssay(essay) {
  pushIt('http://localhost:' + PORT + '/writing/essays', essay)
}

function pushIt(url, data) {
  console.log('Pushing', data.header.title, 'to', url)
  const jsonString = JSON.stringify(data);
    fetch(url, {
      method: 'POST',
      body: jsonString,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      // Check if the response is ok
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      // Displaying results to console 
      .then(text => console.log('\t', text))
      .catch(e => console.log('There was an error: ' + e.message));
}

main();
