import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// middlewear for Parsing JSON
app.use(express.json());

// middlewear for handling routes from booksRoute
app.use("/books", booksRoute);

// Middlewear for handling cors policy
// Option 1: Allow All origins with default of cors
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(224).send("Welcome to MERN Stack Development");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Mongo Db Connection Was Successful");
    app.listen(PORT, () => {
      console.log(`Server is listening at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
