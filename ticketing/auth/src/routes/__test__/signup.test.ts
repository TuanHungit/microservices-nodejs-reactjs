import request from 'supertest'; //fake request in express
import { app } from '../../app';

it('return a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@gmail.com',
      password: '12345',
    })
    .expect(201);
});
it('return a 400 with an valid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'testgmail.com',
      password: '12345',
    })
    .expect(400);
});
it('return a 400 with an valid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'testgmail.com',
      password: '1',
    })
    .expect(400);
});
it('return a 400 with missing email and password', async () => {
  return request(app).post('/api/users/signup').send({}).expect(400);
});
it('diallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@gmail.com',
      password: '12345',
    })
    .expect(201);
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@gmail.com',
      password: '12345',
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test1@gmail.com',
      password: '12345',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
