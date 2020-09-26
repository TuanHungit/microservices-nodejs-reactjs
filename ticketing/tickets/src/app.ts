import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';


import { errorHandler, NotFoundError } from '@thticket/common';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false, // disabled encryte
    secure: process.env.NODE_ENV !== 'test', // only https connection
  })
);


app.all('*', async () => {
  throw new NotFoundError();
});

//global error
app.use(errorHandler);

export { app };
