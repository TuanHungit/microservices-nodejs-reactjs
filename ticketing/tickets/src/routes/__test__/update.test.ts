import request from 'supertest';
import { app } from '../../app';

it('returns a 404 error if the provided id does not exists', async () => {
  await request(app)
    .post('/api/tickets/qweuq23wyeqwe')
    .set('Cookie', global.signup())
    .send({ title: 'sdasd', price: 10 })
    .expect(404);
});
it('returns a 401 error if the user is not signed in', async () => {
  await request(app)
    .post('/api/tickets/qweuq23wyeqwe')
    .send({ title: 'sdasd', price: 10 })
    .expect(404);
});
it('returns a 401 if the user does not own the ticket', async () => {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signup())
    .send({
      title: 'ASas',
      price: 20,
    });
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', global.signup())
    .send({
      title: 'asasd',
      price: 11,
    })
    .expect(401);
});

it('return a 400 erros if the provided title or price does not valid!', async () => {
  const cookie = global.signup();
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      title: 'ASas',
      price: 20,
    });
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: '',
      price: 11,
    })
    .expect(400);
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'qweq',
      price: -11,
    })
    .expect(400);
});

it('returns a ticket if the provided inputs is invalid', async () => {
  const cookie = global.signup();
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      title: 'ASas',
      price: 20,
    });
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'wqwe',
      price: 11,
    })
    .expect(200);
});
