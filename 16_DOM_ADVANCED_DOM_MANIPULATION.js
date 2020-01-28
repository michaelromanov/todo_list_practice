// alert("CONNECTED!!!!!")

//element.addEventListener(type, functionToCall);
// var button = document.querySelector("button");
// button.addEventListener("click", function(){
//   console.log("Someone clicked the button!");
// })

//Select The Element
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//Add Event Listener
button.addEventListener("click", function(){
  paragraph.textContent = "Someone clicked the button!";
});

var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
  //alert("h1 was clicked");
  h1.style.background = "orange";
});

var ul = document.querySelector("ul");
ul.addEventListener("click", function(){
  ul.style.background = "yellow";
});

