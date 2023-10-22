import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/styles/index.css'; // 使用正确的相对路径
document.head.appendChild(link);

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, TypeScript and Express!' });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

