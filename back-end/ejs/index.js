import express from "express";

const app = express();
const port = 2000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";
  
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to enjoy and have some fun";
  } else {
    type = "a weekday";
    adv = "it's time to work hard"
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});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
//! how we pass data from our server to template file , using ejs 

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});