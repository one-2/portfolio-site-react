// DEV TEST REMOVE IN PROD: turn this into an admin-only function
// GET requests should be as specific as possible on client to reduce latency

export default async function getWritingData(stub) {
  let data;
  const route = 'http://localhost:5050/api/writing/users'
  console.log('wowie: ', route)

  try {
    const response = await fetch(route, {
      
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
  console.log('return: ', data)
  return data;
}
