const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Muse Bot Health Check - OK\n');
});
server.listen(8000, () => {
  console.log('Health check server running on port 8000');
});
