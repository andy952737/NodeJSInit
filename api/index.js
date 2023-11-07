const express = require('express');
const app = express();
const port = 3000;

app.get('/api/posts/', (req, res) => {
  res.send('Hello, NodeJS API World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
