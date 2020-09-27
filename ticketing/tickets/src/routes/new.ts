import express, { Request, Response } from 'express';
import { requireAuth } from '@thticket/common';
const router = express.Router();

router.post('/api/tickets', requireAuth, (req: Request, res: Response) => {
  res.status(200).send({});
});
router.get('/api/tickets', (req: Request, res: Response) => {
  res.status(200).send('Hi!');
});

export { router as createTicketRouter };
