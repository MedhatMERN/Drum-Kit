//Detecting Button Pressed

var numOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function handelCLick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
  });
}

//Detecting Pressed Key

document.addEventListener("keypress" , function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(Key){
  switch (Key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

      default:console.log(buttonInnerHTML);
  }
}


function buttonAnimation(currentKey){
 var actionButton = document.querySelector("." + currentKey);
 actionButton.classList.add("pressed");
 setTimeout(function(){
   actionButton.classList.remove("pressed");
 } , 100);
}
