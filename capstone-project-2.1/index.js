import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 8000;

app.use(express.static("public"));

// Use import.meta.url to get the current file's URL and extract the directory
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
