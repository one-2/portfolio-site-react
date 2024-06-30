// const PORT = process.env.EXPRESS_PORT;

// export default async function postUserMessage(email, message) {
//   let data;
//   try {
//     const response = await fetch('http://localhost:' + PORT + '/user/messages', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'email': email,
//         'message': message
//       })
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const contentType = response.headers.get('content-type');
//     if (!contentType || !contentType.includes('application/json')) {
//       throw new TypeError("Oops, we haven't got JSON!");
//     }
//     data = await response.json()
//   } catch (error) {
//     console.error('Fetch error: ', error);
//   }
//   return data;
// }
