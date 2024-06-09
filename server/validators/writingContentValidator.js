// Validation and sanitisation middleware for the writing collection routes.
import { body } from 'express-validator';

const validateWriting = [
  // Section object
  body('section.data.title').not().isEmpty().withMessage('Title is required'),
  body('section.data.subtitle').not().isEmpty().withMessage('Subtitle is required'),
  body('section.metadata.href').not().isEmpty().withMessage('Href is required'),

  // Header object
  // TODO

  // Post object
  body('post.metadata.slug').not().isEmpty().withMessage('Slug is required'),
  body('post.header.title').not().isEmpty().withMessage('Header title is required'),
  body('post.header.description').not().isEmpty().withMessage('Header description is required'),
];

export { validateWriting };
