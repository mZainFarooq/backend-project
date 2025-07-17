import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const limit = "16kb";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: limit }));
app.use(
  express.urlencoded({
    extended: true,
    limit: limit,
  })
);
app.use(express.static("public"));
app.use(cookieParser());

///routes import
import userRouter from "./routes/user.routes.js";
//route declaration
app.use("/api/v1/users", userRouter);

export { app };
