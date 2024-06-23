// Validation and sanitisation middleware for the writing collection routes.
import { body } from 'express-validator';

const validateWriting = [
  // Section object
  body('section.data.title').not().isEmpty().withMessage('Title is required'),
  body('section.data.subtitle').not().isEmpty().withMessage('Subtitle is required'),
  body('section.metadata.href').not().isEmpty().withMessage('Href is required'),

  // Post object
  body('post.metadata.slug').not().isEmpty().withMessage('Slug is required'),
  body('post.metadata.date').not().isEmpty().withMessage('Date is required'),
  body('post.metadata.tags').not().isEmpty().withMessage('Tags are required'),
  body('post.header.title').not().isEmpty().withMessage('Header title is required'),
  body('post.header.description').not().isEmpty().withMessage('Header description is required'),
  body('post.body').not().isEmpty().withMessage('Body is required'),
];

export { validateWriting };
