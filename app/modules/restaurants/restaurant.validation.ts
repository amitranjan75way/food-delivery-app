import { body } from 'express-validator';
import { query } from 'express-validator';

export const addItemValidator = [
    body('name').notEmpty().withMessage('name is required').isString().withMessage('name must be a string'),
    body('description').notEmpty().withMessage('description is required').isString().withMessage('description must be a string'),
    body('price').notEmpty().withMessage('price is required').isNumeric().withMessage('price must be a number'),
]