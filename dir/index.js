"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5500;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.status(200).json({
        request: "get",
        message: "you made a get request"
    });
});
app.post("/", (req, res) => {
    return res.status(200).json({
        request: "post",
        message: "you made a get request"
    });
});
app.listen(port, () => {
    console.log("The API is running on localhost:" + port);
});
