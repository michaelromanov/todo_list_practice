//console.log("razzmataz");
//
var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do? (new / list / quit)");

while(input !== "quit"){
  //handle input
  if(input === "list") {
    console.log(todos);
  } else if(input === "new"){
    //ask for new todo
    var newTodo = prompt("Enter New Todo");
    //add to todos array
    todos.push(newTodo);
  }
  //ask for new input
  input = prompt("What would you like to do? (new / list / quit)")
}

console.log("Ok, you quit the app!  Come back soon!");

