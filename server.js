const http = require('http');
const port = process.env.PORT || '9015';
const host = process.env.HOST || 'localhost';
const apiChuck = 'https://api.chucknorris.io/jokes/random';

const server = http.createServer(async (request, response) => {
  let joke;
  try {
    const apiResponse = await fetch(apiChuck);
    const jsonResponse = await apiResponse.json();
    joke = jsonResponse.value;
  } catch (error) {
    console.error(error);
  }
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.end(joke);
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
