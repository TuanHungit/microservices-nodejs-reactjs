import { Ticket } from '../../models/tickets';
import request from 'supertest';
import { app } from '../../app';
it('returns a 404 if the ticket not found', async () => {
  await request(app).post('/api/tickets/asdasd').send({}).expect(404);
});

it('returns the ticket if the ticket is found', async () => {
  const response = await request(app)
    .post('api/tickets')
    .set('Cookie', global.signup())
    .send({
      title: 'asdasd',
      price: 20,
    })
    .expect(200);
  await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send({})
    .expect(200);
});
