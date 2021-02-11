"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = express_1.default();
const port = 8000;
app.get("/");
// route for GET method to return all users in the database
app.get("/Users");
//# sourceMappingURL=index.js.map