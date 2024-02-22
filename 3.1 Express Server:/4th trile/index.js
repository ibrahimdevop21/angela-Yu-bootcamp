import express from "express";
const app = express();
const port = 2000;

app.get("/home", (req, res) => {
  res.send("<h1>HOME</h1>");
});

app.get("/", (req, res) => {
  res.send("DRTFM");
});

app.listen(port, ()=> {
  console.log("server is running on port"+ port);
});

app.get("/game", (req, res) => {
  res.send("simon game is runining");
});

app.get("/rudy", (req, res) => {
  res.send("<h1>rudy</h1> <p> I love rudynq</p>")
});