"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3002;
// Sample data (replace with your data source)
const apiData = { message: 'Hello from the API' };
app.get('localhost:3000/groups', (req, res) => {
    res.json(apiData);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
