"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
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
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
