var noOfDrums, i, buttonText, keyText, currentButton;

noOfDrums = document.querySelectorAll(".drum").length;

//MOUSE EVENT

for (i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    buttonText = this.innerHTML;
    sound(buttonText);
    animate(buttonText);
  });
}

//KEYBOARD EVENT
document.addEventListener("keydown", function (event) {
  keyText = event.key;
  sound(keyText);
  animate(keyText);
});

function sound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(key);
  }
}

function animate(key) {
    currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");
    setTimeout(function(){
      currentButton.classList.remove("pressed");
    },100);
}
