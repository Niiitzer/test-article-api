import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

import router from "./router";
import sequelize from "../config/db";

const app = express();
const port = process.env.PORT || 3000;

// Basic middlewares
app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(router);

app.listen(port, async (err: Error) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`App listening on port ${port}`);

  // Connecting to database
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
});
