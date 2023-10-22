import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve the HTML file
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'index.html');
  res.sendFile(htmlPath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

