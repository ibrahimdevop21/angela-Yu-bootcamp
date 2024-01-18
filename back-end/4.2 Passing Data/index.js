import express from "express";
import bodyParser from "body-parser";
// import path from "path";
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const port = 3333;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
})

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  console.log(numLetters);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
