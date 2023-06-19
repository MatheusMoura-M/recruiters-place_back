import "express-async-errors";
import express from "express";
import { handleError } from "./error/appError.error";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(handleError);

export default app;
