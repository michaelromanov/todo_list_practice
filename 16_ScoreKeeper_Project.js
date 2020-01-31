//alert("Connected to the html!");

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
//var h1 = document.querySelector("h1"); 
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0; 
var gameOver = false;
var winngingScore = 5;

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      gameOver = true; 
      alert("GAME OVER!")
    }
    p1Display.textContent = p1Score;
  }
  //alert("Michael clicked the P1 button!");
  //p1Score++;
  //console.log(p1Score);
  //h1.textContent = p1Score;
  //p1Display.textContent = p1Score;
});
 
p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      gameOver = true;
      alert("GAME OVER");
    }
    p2Display.textContent = p2Score;
  }

  //alert("Michael clicked the P2 button!");
  // p2Score++;
  // p2Display.textContent = p2Score;
});

resetButton.addEventListener("click", function(){
  //alert("Michael clicked the reset button!");
  //Reset all pScores
  p1Score = 0;
  p2Score = 0;

});

