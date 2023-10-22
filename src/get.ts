import express, { Request, Response } from 'express';

const app = express();
const port = 3002;

// Sample data (replace with your data source)
const apiData = { message: 'Hello from the API' };

app.get('localhost:3000/groups', (req: Request, res: Response) => {
  res.json(apiData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

