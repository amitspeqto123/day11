import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import session from "express-session";

const app = express();
const port = 8080;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// SESSION CONFIG
// app.use(session({
//   secret: process.env.SESSION_SECRET || "mysecretkey",
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 1000 * 60 * 60 * 24}
// }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecretkey",
    resave: false,
    saveUninitialized: false, 
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, 
      httpOnly: true, 
      sameSite: "lax", 
      secure: false, 
    },
  }),
);

// api import
import authRoute from "./route/authRoute.js";
import productRoute from "./route/productRoute.js";
import { database } from "./config/db.js";

database();
// api ends point
app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
