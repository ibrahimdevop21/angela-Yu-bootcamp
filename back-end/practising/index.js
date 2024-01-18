import express from "express";

const app = express();
const port = 2000;

let bowl = ["apples", "oranges", "Pears"];

app.get("/", (req, res) =>{
  res.render("index.ejs"); 
// { fruits: bowl});
});

app.listen(port, ()=> {
  console.log(`server is running on port ${port}`);
});