import mongoose from 'mongoose';

//const result = require('dotenv').config({ path: '.env' });

//console.log(result.error);
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT must be defined!');
  }
  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL must be defined!');
  }
  // const DB = process.env.DATABASE.replace(
  //   '<PASSWORD>',
  //   process.env.DATABASE_PASSWORD!
  // );
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
  app.listen(3001, () => {
    console.log('[auth-service]: listening on port 3001!');
  });
};
start();
