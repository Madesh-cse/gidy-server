import { config } from "dotenv";
import cors from "cors";

import express from "express";
import appRouter from "./routes";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://gidy-client.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/userProfile", appRouter);

export default app;
