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
