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
