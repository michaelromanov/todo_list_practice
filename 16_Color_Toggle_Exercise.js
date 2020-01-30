// alert("Connected!")

var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;


// button.addEventListener("click", function(){
//   //alert("clicked");

//   //if white
//     //make it purple
//   // else make it white

//   if(isPurple){
//     document.body.style.background = "white";
//     isPurple = false;
//   } else {
//     document.body.style.background = "purple";
//     isPurple = true;
//   }  

//   //isPurple = !isPurple;

//   //document.body.style.background = "purple";
   
// });

button.addEventListener("click", function(){
  document.body.classList.toggle("purple"); 
})