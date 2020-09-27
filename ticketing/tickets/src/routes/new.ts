import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import { requireAuth, validateRequest } from '@thticket/common';
const router = express.Router();

router.post(
  '/api/tickets',
  requireAuth,
  [
    body('title').not().isEmpty().withMessage('Title must be defined!'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be greater than 0!'),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.status(200).send({});
  }
);
router.get('/api/tickets', (req: Request, res: Response) => {
  res.status(200).send('Hi!');
});

export { router as createTicketRouter };
