import express from "express";
const app = express();
const port = 2222;

app.get("/", (req, res) => {
  res.send("Hello, error404")
})

app.listen(port, () => {
  console.log(`server is running on server ${port}.`)
})