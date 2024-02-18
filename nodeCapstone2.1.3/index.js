import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const cfg = {
  port: process.env.PORT || 4000,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

let posts = [];

app.get('/', (req, res) => {
  res.render('index.ejs', { posts });
});

app.get('/submit', (req, res) => {
  res.render('submit.ejs', { posts });
});


function handleFormSubmission(req, res) {
  const ptitle = req.body.postTitle;
  const pbody = req.body.postBody;
  const postId = createNewId();

  const post = {
    id: postId,
    title: ptitle,
    body: pbody,
  };

  function createNewId() {
    return Math.floor(Math.random() * 10000 + 1);
  }

  posts.push(post); // Adding the post to the posts array
  console.log(post);
}

app.post('/submit', (req, res) => {
  handleFormSubmission(req, res);
  // Redirect to '/submit' after handling the form submission
  res.redirect('/submit');
});

app.listen(cfg.port, () => {
  console.log(`server is running on http://localhost:${cfg.port}`);
});
