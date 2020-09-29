import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@thticket/common';
import { currentUser } from '@thticket/common';

import { createTicketRouter } from './routes/new';
import { showNewRouter } from './routes/show';
import { showAllTicketRouter } from './routes/index';
import { updateTicketRouter } from './routes/update';
const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false, // disabled encryte
    secure: process.env.NODE_ENV !== 'test', // only https connection
  })
);
app.use(currentUser);
app.use(createTicketRouter);
app.use(showNewRouter);
app.use(showAllTicketRouter);
app.use(updateTicketRouter);
app.all('*', async () => {
  throw new NotFoundError();
});

//global error
app.use(errorHandler);

export { app };
