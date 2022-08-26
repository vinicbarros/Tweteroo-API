import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const tweets = [];
const users = [];

app.listen(5000);
