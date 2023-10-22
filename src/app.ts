import express, { Request, Response } from 'express';

// Replace this
// import express = require('express');

// with this
// import * as express from 'express';

const app = express();
const port = 3000;

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

