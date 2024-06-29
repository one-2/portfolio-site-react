// TODO: implement as context to reduce latency

const PORT = process.env.EXPRESS_PORT;

export default async function getWritingData(stub) {
  let data;
  try {
    const response = await fetch('http://localhost:' + PORT + '/writing/' + stub, {
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
  if (data) {
    console.log('SERVER: Server fetched the data')
  }
  return data;
}
