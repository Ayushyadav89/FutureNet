import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express()

dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.mongoDBURI;

// connect to mongoDB
try {
  mongoose.connect(URI);
  console.log("Connected To MongoDB");
}
catch (error) {
  console.log("Error:", error);
  process.exit(1);
}

app.listen(port, () => {
  console.log(`server listning on https://localhost:${port}`)
})