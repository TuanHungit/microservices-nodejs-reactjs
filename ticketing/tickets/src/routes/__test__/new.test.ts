import request from 'supertest';
import { app } from '../../app';

it('has a route handler listening to /api/tickets/ for post requests', async () => {
  const response = await request(app).post('/api/tickets').send({});
  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  await request(app).post('/api/tickets').send({}).expect(400);
});
it('return a status other than 401 if the user is signed in!', async () => {
  const cookie = global.signup();
  console.log(cookie);
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({});

  console.log(response.status);
  expect(response.status).not.toEqual(400);
});
it('return an error if an invalid title is provided', async () => {});
it('return an error if an invalid prices is provided', async () => {});
it('create a valid ticket with valid inputs', async () => {});
