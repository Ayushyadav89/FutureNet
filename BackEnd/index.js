import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import courseRoute from "./route/course.route.js"

const app = express()

app.use(cors())
app.use(express.json())

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

// defining Routes
app.use("/course", courseRoute)

app.listen(port, () => {
  console.log(`server listning on http://localhost:${port}`)
})