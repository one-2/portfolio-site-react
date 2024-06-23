
function main() {
  console.log('Running delete script')
  // deleteAllBlogs();
  // deleteAllEssays();
}

// Delete all functions
function deleteAllBlogs() {
  console.log('Deleting all blogs')
  const url = 'http://localhost:5050/writing/blogs'
  deleteAllOf(url)
}

function deleteAllEssays() {
  console.log('Deleting all essays')
  const url = 'http://localhost:5050/writing/essays'
  deleteAllOf(url)
}

function deleteAllOf(url) {
  fetch(url, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => console.log(text))
    .catch(e => console.log('There was an error: ' + e.message));
}

main();
