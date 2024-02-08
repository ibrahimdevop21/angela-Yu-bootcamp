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
  res.render("index.ejs", { posts });
});

// ...

app.get("/edit-post/:postId", (req, res) => {
  const postIdToEdit = req.params.postId;
  const postToEdit = posts.find((post) => post.id === postIdToEdit);

  if (postToEdit) {
    res.render("edit.ejs", { postToEdit });
  } else {
    console.log(`Post with ID ${postIdToEdit} not found.`);
    res.redirect("/submit");
  }
});

// ...

function generateId() {
  const randomBytesStr = randomBytes(4).toString("hex");
  const base36Id = parseInt(randomBytesStr, 16).toString(36);
  return base36Id.padEnd(9, "0").substr(0, 9);
}

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

  res.redirect("/submit");
});

app.post("/delete-post/:postId", (req, res) => {
  const postIdToDelete = req.params.postId;
  const postIndex = posts.findIndex((post) => post.id === postIdToDelete);

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    console.log(`Post with ID ${postIdToDelete} deleted.`);
  } else {
    console.log(`Post with ID ${postIdToDelete} not found.`);
  }

  res.redirect("/submit");
});

app.get("/submit", (req, res) => {
  res.render("submit.ejs", { posts });
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
