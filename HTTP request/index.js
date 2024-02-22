import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
	res.send("<h1>Home</h1>");
  console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
  res.send("<h1>About ME");
})

app.get("/games", (req, res) => {
  res.send("<ul><li>ibrahim</li><li>moahmed</li></ul>");
})
app.listen(port, () => {
	console.log("it's working just fine @"+ port+ ".");
})