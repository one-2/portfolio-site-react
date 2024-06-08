import { body } from 'express-validator';

// Validation middleware
const validateWriting = [
  body('section.data.title').not().isEmpty().withMessage('Title is required'),
  body('section.data.subtitle').not().isEmpty().withMessage('Subtitle is required'),
  body('section.metadata.href').not().isEmpty().withMessage('Href is required'),
  body('post.metadata.slug').not().isEmpty().withMessage('Slug is required'),
  // body('post.metadata.date').not().isEmpty().withMessage('Date is required'),
  body('post.header.title').not().isEmpty().withMessage('Header title is required'),
  body('post.header.description').not().isEmpty().withMessage('Header description is required'),
  // body('post.body.text').not().isEmpty().withMessage('Body text is required'),
];

export { validateWriting };