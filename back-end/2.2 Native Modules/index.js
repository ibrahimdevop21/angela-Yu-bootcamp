const fs = require("fs");

fs.readFile("./note.txt", "utf-8",(err,data) => {
  if (err) {
    console.error(err);
    return;
  } 
  console.log(data);
})

// fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
//   if (err) throw err;
//   console.log("THe file has been saved!");
// });
