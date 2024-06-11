// Validation and sanitisation middleware for the user collection routes.
import { check } from 'express-validator';

// Helper array to validate and sanitise email addresses.
const checkEmail = () => {
  return ([
    check('email')
      .trim()
      .escape()
      .isEmail().withMessage('Email must be valid')
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
