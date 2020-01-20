// //console.log("razzmataz");
// //
// var todos = ["Buy New Turtle"];

// var input = prompt("What would you like to do? (new / list / quit)");

// while(input !== "quit"){
//   //handle input
//   if(input === "list") {
//     console.log(todos);
//   } else if(input === "new"){
//     //ask for new todo
//     var newTodo = prompt("Enter New Todo");
//     //add to todos array
//     todos.push(newTodo);
//   }
//   //ask for new input
//   input = prompt("What would you like to do? (new / list / quit)")
// }

// console.log("Ok, you quit the app!  Come back soon!");

// var movies = [
//   {title: "In Bruges", 
//    hasWatched: true, 
//    rating: 5
//   }, 
//   {title: "Frozen", 
//    hasWatched: false, 
//    rating: 4.5
//   },
//   {title: "Les Mis", 
//    hasWatched: false, 
//    rating: 3.5
//   }
// ]

// movies.forEach(function(movie){
//   var result = "You have ";
//   if(movie.hasWatched){
//     result += "watched "
//   } else {
//     result += "not seen "
//   }
//     result += "\"" + movie.title + "\" -"
//     result += movie.rating + " stars";
//   console.log(result);
// })


var movies = [
  {title: "In Bruges", 
   hasWatched: true, 
   rating: 5
  }, 
  {title: "Frozen", 
   hasWatched: false, 
   rating: 4.5
  },
  {title: "Les Mis", 
   hasWatched: false, 
   rating: 3.5
  }
]

function buildString(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched "
  } else {
    result += "not seen "
  }
    result += "\"" + movie.title + "\" -"
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
})
//
//
 