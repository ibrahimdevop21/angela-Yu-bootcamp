// TODO: 1.viewing the post, 2.editing the post 3.deleting the post
//! this is not working im burning everything and starting from the 0
// ! created anew branch named: node-capstone to deal with this blog im gone build it so that it's functional and maintainable
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/boom", (req, res) => {
  const issuValue = req.body.issu;
  const postValue = req.body.post;

  console.log(`Issue: ${issuValue}, Post: ${postValue}`);
  res.render("boom.ejs", { issuValue, postValue });
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
