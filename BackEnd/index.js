import express from "express";
import dotenv from "dotenv";

const app = express()

dotenv.config();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})