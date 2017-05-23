var wins = 0;

var losses = 0;

var answer =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var guessesLeft = 9;

var guessSoFar = [];

var rand = "";
document.onkeyup = function(event) {
	var userGuess = event.key;
	guessSoFar.textContent += event.key + ", ";
	guessSoFar = document.getElementById("guessUsed");
	//for loop to generate random number
	//for (var i = 9; i >= guessesLeft; i--) {
	if (guessesLeft === 9) {	
		rand = Math.floor(Math.random() * answer.length);
		
	}	
		//}
		
	//if statement to see if user won or lost
	 if (answer[rand] === userGuess) {
	 	
	 	wins++;
	 	guessesLeft = 9; 
	 	
	 	document.getElementById("guessUsed").innerHTML = "";
	 	document.getElementById("winCount").innerHTML = wins;
	 	document.getElementById("guessCount").innerHTML = guessesLeft;
		
	} else {
		guessesLeft--;
		document.getElementById("guessCount").innerHTML = guessesLeft;
	}

	if (guessesLeft < 1) {
		losses++;
		guessesLeft = 9;
		document.getElementById("guessUsed").innerHTML = "";
		document.getElementById("lossCount").innerHTML = losses;
		document.getElementById("guessCount").innerHTML = guessesLeft;
		
	}

	console.log(rand);
}




