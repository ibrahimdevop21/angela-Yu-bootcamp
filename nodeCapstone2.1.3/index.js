import express from "express";
import bodyParser from "body-parser";
import { randomBytes } from "crypto";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

function generateId() {
  const randomBytesStr = randomBytes(4).toString("hex");
  const base36Id = parseInt(randomBytesStr, 16).toString(36);
  return base36Id.padEnd(9, "0").substr(0, 9);
}

//!submit page and creating the post function
app.post("/submit", (req, res) => {
  const issTitle = req.body.issueTitle;
  const issPost = req.body.issuePost;
  const postId = generateId();

  const newPost = {
    id: postId,
    issue: issTitle,
    post: issPost,
  };

  posts.push(newPost);

  console.log(
    `New Post created with ID ${postId}, title: ${issTitle}, post: ${issPost}`
  );

  res.render("submit", { posts });
});

//start the server
app.listen(port, () => {
  console.log(`server is up and running on port: ${port}`);
});
