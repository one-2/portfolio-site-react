
// Example usage
const request = {
  content: 'Hello, world!',
  email: 'test@example.com',
};

const errors = validateRequest(request);
if (Object.keys(errors).length === 0) {
  // Request is valid, proceed with further processing
} else {
  // Request is invalid, handle errors
  console.log(errors);
}
