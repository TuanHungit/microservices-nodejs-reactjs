import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@thticket/common';

import { Ticket } from '../models/tickets';

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
  async (req: Request, res: Response) => {
    const { title, price } = req.body;
    const ticketCreated = Ticket.build({
      title,
      price,
      userId: req.currentUser!.id,
    });
    await ticketCreated.save();
    res.status(200).send({});
  }
);
router.get('/api/tickets', (req: Request, res: Response) => {
  res.status(200).send('Hi!');
});

export { router as createTicketRouter };
