import {config} from "dotenv"
import cors from "cors"

import express from "express"
import appRouter from "./routes";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://gidy-client.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"))

app.use("/userProfile", appRouter)

export default app;
