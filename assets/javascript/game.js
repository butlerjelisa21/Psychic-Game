// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var comptuerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 10;


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("loses");
var guessesLeftText = document.getElementById("guesses-left");
var comptuerGuess


function gameStart(){
    guessesLeft = 10;
    winsText.innerText = wins;
    lossesText.innerText = losses;
    comptuerGuess = comptuerGuess[Math.floor(Math.random() * comptuerGuess.length)];
    guessesLeftText.innerText = guessesLeft;
   
}

document.addEventListener("DOMContentLoaded", function(){
    gameStart();
});


document.onkeyup = function(event){
    
    var userGuess = event.key;

    if(userGuess!== comptuerGuess && guessesLeft > 0){
        guessesLeft--;
        guessesLeftText.innerText = guessesLeft;
    }

    else if(userGuess === comptuerGuess && guessesLeft > 0 ){
        wins++;
        alert("YOU WIN!");
        gameStart();
    
    }

    else {
        losses++;
        alert("YOU LOSS!");
        gameStart();
    }

    

}



        
// console.log(alpha[1]);

// Setting array for computer to choose 




