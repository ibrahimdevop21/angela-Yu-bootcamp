window.onload = function () {
  let diceNum1 = Math.floor(Math.random() * 6) + 1;
  let diceNum2 = Math.floor(Math.random() * 6) + 1;

  let image1Path = "./images/dice" + diceNum1 + ".png";
  let image2Path = "./images/dice" + diceNum2 + ".png";

  document.querySelector(".img1").setAttribute("src", image1Path);
  document.querySelector(".img2").setAttribute("src", image2Path);

  if (diceNum1 > diceNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
  } else if (diceNum1 < diceNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw, Roll Again";
  }
}
