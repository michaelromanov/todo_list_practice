// alert("Connected to the html!");

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
//var h1 = document.querySelector("h1"); 
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
// var numInput = documnet.querySelector("input[type='number']");
var p1Score = 0;
var p2Score = 0; 
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1Display.classList.add("winner");
      gameOver = true; 
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
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

  //alert("Michael clicked the P2 button!");
  // p2Score++;
  // p2Display.textContent = p2Score;
});

resetButton.addEventListener("click", function(){
  reset();
  // //alert("Michael clicked the reset button!");
  // //Reset all pScores
  // p1Score = 0;
  // p2Score = 0;
  // p1Display.textContent = p1Score;
  // p2Display.textContent = p2Score;
  // p1Display.classList.remove("winner");
  // p2Display.classList.remove("winner");
  // gameOver = false;
  // //alert("Reset Activated!");
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
  
  //alert("Reset Activated!");
}

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();
})

 