export default function validateRequest(request) {
  const errors = {};

  // Validate content
  if (!request.content || request.content.trim() === '') {
    errors.content = 'Content is required';
  }

  // Validate email
  if (!request.email || request.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!validateEmail(request.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}

function validateEmail(email) {
  const emailRegex = /.+\@.+\..+/;
  return emailRegex.test(email);
}
