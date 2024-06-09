// Validation middleware
import { check } from 'express-validator';

// Helper
const checkEmail = () => {
  return ([
    check('email')
      .trim()
      .escape()
      .isEmail().withMessage('Please provide a valid email')
      .normalizeEmail(),
  ])
}

// Validators
const validateContactForm = [
  ...checkEmail(),
  check('name')
    .trim()
    .escape(),
  check('message')
    .not().isEmpty().withMessage('Message cannot be empty')
    .trim()
    .escape()
    .isLength({ min: 1 }).withMessage('Message must be at least 1 character long'),
];

const validateMailingListSignup = [
  ...checkEmail()
]

export { validateContactForm, validateMailingListSignup };
