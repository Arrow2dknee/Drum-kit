alert("Sound On!");
for (let i = 0; i < document.querySelectorAll(".drum-set").length; ++i) {
  // adding an event listener to each of the buttons
  document.querySelectorAll(".drum-set")[i].addEventListener("click", evt => {
    // console.log(i);
    getSound(evt.target.innerHTML.toLowerCase());
    buttonAnimation(evt.target.innerHTML.toLowerCase());
  });
}

// adding an event listener to listen to keystrokes
// also notice how we are adding/attaching an event listener to the entire document
// instead of individual elements
document.addEventListener("keydown", evt => {
  getSound(evt.key.toLowerCase());
  buttonAnimation(evt.key.toLowerCase());
});
// new Howl({
//   src: ['sounds/tom-1.mp3']
// });
const getSound = function(key) {
  // let errorSound = new Audio("sounds/wrong.mp3");
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log("Error");
  }
};

const buttonAnimation = function(key) {
  let activeElement = document.querySelector("." + key);
  activeElement.classList.add("pressed");
  setTimeout(function() {
    activeElement.classList.remove("pressed");
  }, 100);
};
