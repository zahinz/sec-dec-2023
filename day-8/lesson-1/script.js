// querySelector for the button
let buttonLeft = document.querySelector("#btnLeft");
let buttonRight = document.querySelector("#btnRight");
let pacman = document.querySelector("#pacman");

// pacman value
let pacmanTop = pacman.style.top;
let pacmanLeft = pacman.style.left;

console.log(pacmanTop);

//  detect mouse click

// 1. onclick event
// declare a function
// call the function when the button is clicked at the HTML

function buttonUpClick() {
  console.log("button up");
}

function buttonDownClick() {
  console.log("button down");
  pacman.style.top = "100px";
}

// 2. addEventListener
// set id for the button

// declare a function
function buttonLeftClick() {
  console.log("button left");
}
function buttonRightClick() {
  console.log("button right");
  pacman.style.left = "100px";
}

// addEventListener
buttonLeft.addEventListener("click", buttonLeftClick);
buttonRight.addEventListener("click", buttonRightClick);
