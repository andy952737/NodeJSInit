const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type for the response
  res.setHeader('Content-Type', 'text/html');

  // Read the HTML file
  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error 500 Internal Server Error');
      return;
    }

    // Send the HTML content as the response
    res.statusCode = 200;
    res.end(data);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

