// alert("CONNECTED!!!!!")

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
