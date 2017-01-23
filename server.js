const http = require('http');

const port = 3000;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

app.listen(port, () => {
  console.log('server running on port 3000');
});

app.get('/', (req, res) => {
  res.send('index.html');
});
