import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = '/styles/index.css'; // 使用正确的相对路径
// document.head.appendChild(link);

// Serve the HTML file
// app.get('/', (req, res) => {
//   const htmlPath = path.join(__dirname, 'index.html');
//   res.sendFile(htmlPath);
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});