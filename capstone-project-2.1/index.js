import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Array to store posts
const posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.post("/index", (req, res) => {
  const issueValue = req.body.issue;
  const postValue = req.body.post;

  // Generate a unique ID for the new post
  const postId = generateUniqueId();

  // Create a new post object
  const newPost = {
    id: postId,
    issue: issueValue,
    post: postValue,
  };

  // Add the new post to the array
  posts.push(newPost);

  console.log(
    `New Post created with ID ${postId}: ${issueValue}, ${postValue}`
  );

  // Render the index page with the updated posts array
  res.render("index.ejs", { posts });
});

// Implement the generateUniqueId function
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// ... (existing code)

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
