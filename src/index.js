import { server } from './mocks/node.js';

server.listen();

async function app() {
  const response = await fetch('https://example.com/user');
  const user = await response.json();
  console.log(user);
}

app();
