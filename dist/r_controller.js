"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const railsServerURL = 'http://localhost:3000'; // Update with your Rails server URL
const controller = 'groups'; // Replace with your Rails controller name
// Make an HTTP GET request to your Rails API endpoint
function fetchDataFromRails() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${railsServerURL}/${controller}.json`);
            return response.data;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    });
}
// Usage
(() => __awaiter(void 0, void 0, void 0, function* () {
    const jsonData = yield fetchDataFromRails();
    if (jsonData) {
        console.log('Data from Rails API:', jsonData);
    }
}))();
