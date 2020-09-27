import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/tickets';
it('has a route handler listening to /api/tickets/ for post requests', async () => {
  const response = await request(app).post('/api/tickets').send({});
  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  await request(app).post('/api/tickets').send({}).expect(401);
});
it('return a status other than 401 if the user is signed in!', async () => {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({});
  expect(response.status).not.toEqual(401);
});
it('return an error if an invalid title is provided', async () => {
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({
      title: '',
      price: 10,
    })
    .expect(400);
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({
      price: 10,
    })
    .expect(400);
});
it('return an error if an invalid prices is provided', async () => {
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({
      title: 'qweqw',
      price: -10,
    })
    .expect(400);
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({
      title: 'qweqw',
    })
    .expect(400);
});
it('create a valid ticket with valid inputs', async () => {
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);

  const title = 'asdasd';
  const price = 20;
  const res = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({ title: title, price: price })
    .expect(200);
  tickets = await Ticket.find({});
  // expect(tickets.length).toEqual(1);
  // expect(tickets[0].title).toEqual(title);
  // expect(tickets[0].price).toEqual(price);
});
