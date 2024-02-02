import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const title = req.body.issueTitle;
  const post = req.body.issuePost

  const postId = generateId();
  
  const newPost = {
    id: postId,
    issue: title,
    post: post,
  }

  posts.push(newPost);

  console.log(`New Post created with ID ${postId}, title: ${title}, post: ${post}`);

  res.render("submit", {posts}); 
})

function generateId() {
  return Math.floor(Math.random() * 1000000).toString(36).substr(2, 9);
}

app.listen(port, () => {
  console.log(`server is up and running on port: ${port}`);
});
