
import express from "express";
import { Request, Response, NextFunction } from 'express';
const app = express();
const port = 5500;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        request: "get",
        message: "you made a get request"
    });
});

app.post("/", (req: Request, res: Response) => {
    return res.status(200).json({
        request: "post",
        message: "you made a get request"
    });
});

app.listen(port, () => {
    console.log("The API is running on localhost:" + port);
});

