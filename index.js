//
// document.querySelector("button").addEventListener("click", handleClick)
// //this finds the first button, and adds an event listener to hear clicks on
//that button, then it runs the code in the function handleClick.
//
// function handleClick() {
//   alert("I got clicked!");
// }
//--we want to avoid putting () in the first line after handleClick b/c it
//automatically makes the alert run immediately before you even click on
//the first drum.




// document.querySelectorAll("button")[].addEventListener("click",)function() {
//  alert("I got clicked!");
//});
//dont do this with the tag as "button" bc if you add another button in html
//later, ex) in the footer or another div, js will run this code to those
//buttons as well, when we only want these buttons to click.
//instead of [number], do .length that way the loop encompasses all the class
//in that element.


// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i<numberOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//     alert("I got clicked!");
//   });
// }






//below, putting the string inside the for element makes it more direct and simple
// for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//
// var buttonInnerHTML = this.innerHTML;
//
// switch (buttonInnerHTML) {
//   case "w":
//   var tom1 = new Audio('sounds/tom-1.mp3');
//   tom1.play();
//   break;
//
//   case "a":
//   var tom2 = new Audio("sounds/tom-2.mp3");
//   tom2.play();
//   break;
//
//   case "s":
//   var tom3 = new Audio("sounds/tom-3.mp3");
//   tom3.play();
//   break;
//
//   case "d":
//   var tom4 = new Audio("sounds/tom-4.mp3");
//   tom4.play();
//   break;
//
//   case "j":
//   var crash = new Audio("sounds/crash.mp3");
//   crash.play();
//   break;
//
//   case "k":
//   var kicks = new Audio("sounds/kick-bass.mp3");
//   kicks.play();
//   break;
//
//   case "l":
//   var snare = new Audio("sounds/snare.mp3");
//   snare.play();
//   break;
//
//   default: console.log(buttonInnerHTML);
// }
//
//   });
// }
//
// document.addEventListener("keydown", playSound);
//
// function playSound(event){
//     var keyVal;
//     if(event.type=="click"){
//         keyVal = this.innerHTML;
//     }
//     if(event.type=="keydown"){
//         keyVal = event.key;
//     }
//     switch(keyVal){
//
//   case "w":
//   var tom1 = new Audio('sounds/tom-1.mp3');
//   tom1.play();
//   break;
//
//   case "a":
//   var tom2 = new Audio("sounds/tom-2.mp3");
//   tom2.play();
//   break;
//
//   case "s":
//   var tom3 = new Audio("sounds/tom-3.mp3");
//   tom3.play();
//   break;
//
//   case "d":
//   var tom4 = new Audio("sounds/tom-4.mp3");
//   tom4.play();
//   break;
//
//   case "j":
//   var crash = new Audio("sounds/crash.mp3");
//   crash.play();
//   break;
//
//   case "k":
//   var kicks = new Audio("sounds/kick-bass.mp3");
//   kicks.play();
//   break;
//
//   case "l":
//   var snare = new Audio("sounds/snare.mp3");
//   snare.play();
//   break;
//
//   default: console.log(keyVal);
//     }
// }






//when an eventlistener is added to an element, then once th event happens,
//the element will trigger a function that's in the second parameter
//(curly bracket)
//theres an option to add a paramter in the function ().

// this.style.color="white";



// ---

//click press
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var buttonInnerHTML = this.innerHTML;
// buttonInnerHTML is our made up name we gave it, referring to
// what happens when the button.drum is clicked, which is each
// is identified by a letter (the inner HTML)
//

makeSound(buttonInnerHTML);

buttonAnimation (buttonInnerHTML);

});
}


//key press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation (event.key);
});


function makeSound(key) {
    switch(key){
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "k":
    var kicks = new Audio("sounds/kick-bass.mp3");
    kicks.play();
    break;

    case "l":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    default: console.log(key);
      }
}


function buttonAnimation (currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100 );

}
