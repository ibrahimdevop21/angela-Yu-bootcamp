/* 
!1. Use the inquirer npm package to get user input. // to get user input
!2. Use the qr-image npm package to turn the user entered URL into a QR code image. // use the input to generate qr image and 
!3. Create a txt file to save the user input using the native fs node module.// we will creat a text file along with the img file that get saved in inindex.js file
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
  message: "Type in your URL", 
  name: "URL"
}  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_img.png"));
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// comand + b toggle explorer-88
// comand + shift + p command palet
// comand + p to open a file 
// comand + <= or => to move word by word
// comand + p to open a file 
// document.addEventListener()
// emmet ! div.container
// div.container#coolid
// li*4
// input:text type of text
//immit snipet

for (i = 0; i==)