import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';
console.clear();
const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connect to NATS');

  const supscription = stan.subscribe(
    'ticket:created',
    'orders-service-queue-group'
  );

  supscription.on('message', (msg: Message) => {
    console.log('Message recieved');
    const data = msg.getData();
    if (typeof data === 'string') {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }
  });
});
