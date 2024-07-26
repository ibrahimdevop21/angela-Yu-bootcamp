import express from 'express';

const app = express();
const cfg = {
  port: process.env.PORT || 3000,
};

let posts = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.render('index.ejs', { posts });
});

app.get('/submit', (req, res) => {
  res.render('submit.ejs', { posts });
});

app.post('/submit', (req, res, next) => {

  const postTitle = req.body.postTitle;
  const postBody = req.body.postBody;
  const post = {
    id: newId(),
    title: postTitle,
    artic: postBody,
  };

  function newId() {
    const alhp = ['a', 'b', 'c', 'd', 'e', 'A', 'B', 'C', 'D', 'E'];
    const numeric = Math.floor(Math.random() * 1000 + 1);
    return `${numeric}${alhp[Math.floor(Math.random() * alhp.length)]}`;
  }

  console.log(
    `post ID: ${post.id}/ post title: ${post.title}/ post body: ${post.artic}`
  );
  posts.push(post);

  res.render('submit.ejs', { posts });
});

// Handle edit request
app.get('/edit/:id', (req, res) => {
  const postId = req.params.id;
  const postToEdit = posts.find(post => post.id === postId);
  res.render('edit.ejs', { post: postToEdit });
});

// Handle update after edit
app.post('/edit/:id', (req, res) => {
  const postId = req.params.id;
  const postToEditIndex = posts.findIndex(post => post.id === postId);

  if (postToEditIndex !== -1) {
    posts[postToEditIndex].title = req.body.updatedTitle;
    posts[postToEditIndex].artic = req.body.updatedBody;
  }

  res.redirect('/');
});

// Handle delete request
app.get('/delete/:id', (req, res) => {
  const postId = req.params.id;
  posts = posts.filter(post => post.id !== postId);
  res.redirect('/');
});

app.listen(cfg.port, () => {
  console.log(`Server is running on http://localhost:${cfg.port}`);
});
