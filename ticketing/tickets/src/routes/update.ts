import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  requireAuth,
  NotAuthorizedError,
  NotFoundError,
  validateRequest,
} from '@thticket/common';

import { Ticket } from '../models/tickets';
const router = express.Router();
router.put(
  '/api/tickets/:id',
  requireAuth,
  [
    body('title').not().isEmpty().withMessage('Title must be defined!'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be valid!'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      throw new NotFoundError();
    }
    if (ticket.userId !== req.currentUser?.id) {
      throw new NotAuthorizedError();
    }
    ticket.set({
      title: req.body.title,
      price: req.body.price,
    });
    res.status(200).send(ticket);
  }
);
export { router as updateTicketRouter };
