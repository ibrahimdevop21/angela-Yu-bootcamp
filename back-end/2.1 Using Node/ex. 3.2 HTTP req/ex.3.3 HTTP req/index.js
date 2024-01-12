import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
  console.log(res);
})

app.get("/about", (req, res) => {
  res.send("I'm Ibrahim a 36 years old sudanise guy how just mead the leap from jordan to egypt");
})

app.get("/contact", (req, res) => {
  res.send("here is my contact");
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})