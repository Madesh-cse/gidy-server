import {config} from "dotenv"
import cors from "cors"

import express from "express"
import appRouter from "./routes";

const app = express();

app.use(cors({
  origin:"http://localhost:5173",
  credentials: true
}))
app.use(express.json());
app.use("/uploads", express.static("uploads"))

app.use("/userProfile", appRouter)

export default app;
