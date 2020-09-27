import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT must be defined!');
  }
  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL must be required!');
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error(err);
  }
  app.listen(3002, () => {
    console.log('[tickets-service]: listening on port 3002!');
  });
};
start();
