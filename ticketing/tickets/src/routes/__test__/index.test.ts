import request from 'supertest';
import { app } from '../../app';

const createTicket = () => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({ title: 'asasd', price: 12 });
};
it('get all tickets if the user is signed in!', async () => {
  await createTicket();
  await createTicket();
  await createTicket();
  await request(app)
    .get('/api/tickets')
    .set('Cookie', global.signup())
    .send({})
    .expect(200);
});
