"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/styles/index.css'; // 使用正确的相对路径
document.head.appendChild(link);
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Define a simple route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, TypeScript and Express!' });
});
// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
