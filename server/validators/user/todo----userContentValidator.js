import { check } from 'express-validator';

// Validation middleware
const validateMessage = [
  check('content').not().isEmpty().withMessage('Content cannot be empty'),
  check('content').isLength({ min: 1 }).withMessage('Content must be at least 1 character long'),
];

const validateMailingList = [
  check('email').isEmail().withMessage('Please provide a valid email'),
];

export { validateMessage, validateMailingList };
