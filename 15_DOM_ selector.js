var tag = document.getElementById("highlight");
var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);
var tagsli = document.getElementsByTagName("li");
console.log(tagsli[0]);
var body = document.getElementsByTagName("body")[0];


//Query Selector - only returns just one element
var tag = document.querySelector('#highlight');
var tag = document.querySelector(".bolded");
var tag = document.querySelector("h1");
var li = document.querySelector("li a.special");

//Query SelectorAll - returns all matching elements;
var tags = document.querySelectorAll('h1');
var tags = documnet.querySelectorAll(".bolded");

// DOM Selector Style - Style property one way to manipulate an element's style
//Select:
var tag = document.getElementById("highlight");
//Manipulate:
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
// The above code is repetitive and not DRY aka Do Not Repeat Yourself
//Programming is based on separation of concerns and while Structure, Behavior and Presentation
//can overlap they are indeed separate concerns.  
//So rather than selecting a tag and changing it in JS, we create a class in CSS and add the 
//class to the selecte element.
var tag = document.getElementsById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";

//do the below instead
//define a class in CSS:
// .some-class {
//   color: blue;
//   border: 10px, solid, red;
// }

var tag = document.getElementById("highlight");
//Add the new class to the selected Element
tag.classList.add("some-class");
//classList is a read only list that contains the classes for a given element.  It is not an array.
//classList:
// .another-class {
//   color: purple;
//   fontSize: 76px;
// }

var tag = document.querySelector("h1");
//Add a class to the selected element
tag.classList.add("another-class");
//Remove a class 
tag.classList.remove("another-class");
//Toggle a class
tag.classList.toggle("another-class");

// So the JS turns on or off a specific part of the CSS rather than manually manipulating individual properties.

//textContent - returns a string of all the text contained in a given element
// <p>This is an <strong>awesome</strong> paragraph</p>
//Select the <p> tag: 
var tag = document.querySelector("p");
//Retrieve the textContent:
tag.textContent //"This is an awesome paragraph"
//alter the textContent: 
tag.textContent = "blah blah blah";

//innerHTML - similar to textContent, except it returns a string of all the HTML contained in a given element
// <p>This is an <strong>awesome</strong> paragraph</p>
//Select the <p> tag: 
var tag = document.querySelector("p");
tag.innerHTML
//This is an <strong>awesome</strong> paragraph
var ul = document.querySelector("ul");
document.querySelector("h1").textContent = "End of this lesson";
document.body.textContent = "<h1>Goodbye</h1>";
document.body.innerHTML = "<h1>Goodbye</h1>";

//







 