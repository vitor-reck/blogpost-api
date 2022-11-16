import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/UserRouter";

mongoose.connect("mongodb://localhost:27017").then(() => {
  const app = express();
  dotenv.config();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(userRouter);

  app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running in port 8080");
  });
});
