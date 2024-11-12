import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(224).send("Welcome to MERN Stack Development");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
