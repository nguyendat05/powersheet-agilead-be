import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";

import githubWebhook from "./src/middleware/githubWebhook.js";
import { connection } from "./src/postgres/postgres.js";
import authRoutes from "./src/routes/authRoutes.js";
import {allRouter} from "./src/routes/allRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: process.env.URL_CLIENT,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 10),
    },
  })
);
app.use(authRoutes);
allRouter(app)

app.post("/git/update", githubWebhook, (req, res) => {
  return res.status(200).send("Webhook received");
});

app.listen(PORT, async () => {
  try {
    await connection();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});