const numberOfButton = document.querySelectorAll(".drum").length;
// TODO: it would be nice if i could merge both the clicking and the keydown press in the same function
for (let i = 0; i < numberOfButton; i++) {

  document.querySelec'
  torAll(".drum")[i].addEventListener("click", function(){

    let thisButton = this.innerHTML;

    makeSound(thisButton);

    buttonAnimation(thisButton);
  })
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key); // * :this could be used with the console.log(event) to capture event data like type or so on

  buttonAnimation(event.key);
}) 

function makeSound(key) {

  switch(key) {
    case ("w"):
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case ("a"):
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case("s"):
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case("d"):
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case("j"):
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case("k"):
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case("l"):
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default: console.log(thisButton);
  }
}

function buttonAnimation(curentKey) {

  let activeButton = document.querySelector("."+curentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}

/*!Your code is functional and achieves the desired drum kit functionality! Merging the click and keydown events into the same function is definitely a good idea for code readability and efficiency.

Here's a way to combine the click and keydown events into a single function:

```javascript
const numberOfButtons = document.querySelectorAll(".drum").length;

function playDrumSound(key) {
  makeSound(key);
  buttonAnimation(key);
}

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonKey = this.innerHTML;
    playDrumSound(buttonKey);
  });
}

document.addEventListener("keydown", function(event) {
  playDrumSound(event.key);
});
```

This change creates a `playDrumSound` function that is called both on click and keydown events, reducing repetition and improving maintainability.

Great job on using `switch` statements for the sound logic and adding a button animation effect! If you have any further questions or need more assistance, feel free to ask. */