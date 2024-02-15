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

//setting rout
app.all('/', (req, res, next) => {
  if (req.method === 'GET' || req.method === 'POST') {
    res.render('index.ejs');
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
