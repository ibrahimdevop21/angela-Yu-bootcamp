//! finally it toke me 3 week's and 4attempt to do this simple project i had to read the novice to ninja node js book *first 100 pages to understand how this work i wasted no time on styling the page

//Express application
import express from 'express';

//initate express
const app = express();
const cfg = {
  port: process.env.PORT || 3000,
};

//public pathway
app.use(express.static('public'));

// setting body parser
app.use(express.urlencoded({ extended: true }));

// initalize an array to store posts
const posts = [];

//setting rout
app.all('/', (req, res, next) => {
  if (req.method === 'GET' || req.method === 'POST') {
    const postTitle = req.body['post-title'];
    const postBody = req.body['post-body'];

    const post = { title: postTitle, body: postBody };
    //adding new post
    posts.push(post);
    // rendering the ejs file and the posts
    res.render('index.ejs', { posts });
  } else {
    next();
  }
});

//Server starter
try {
  app.listen(cfg.port, () => {
    console.log(`Server is up and running on http://localhost:${cfg.port}`);
  });
} catch (error) {
  console.error('Error starting the server:', error.message);
}
