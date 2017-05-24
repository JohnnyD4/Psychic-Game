var wins = 0;

var losses = 0;

var answer =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesLeft = 9;

var guessSoFar = [];

var rand = "";

document.onkeyup = function(event) {

	var userGuess = event.key;

	var removeGuess = [];
	
	//removeGuess = answer.splice(answer.length);

	//console.log('removed', removeGuess);

	

	//var removed = guessSoFar.splice(userGuess);
		//	console.log('removed', removed);
	// guessSoFar = document.getElementById("guessUsed");
	//for loop to generate random number
	//for (var i = 9; i >= guessesLeft; i--) {
		
		if (guessesLeft === 9) {	
			
			rand = answer[Math.floor(Math.random() * answer.length)];
			console.log("Computer guess:", rand);
			answer =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


		}	

		var checking = answer.indexOf(userGuess);
		
		if (checking >= 0) {
			 answer.splice(answer.indexOf(userGuess), 1);

		//if statement to see if user won or lost
		 if (rand === userGuess) {
		 	
		 	wins++;
		 	guessesLeft = 9; 
		 	console.log("Winner!");
		 	document.getElementById("guessUsed").innerHTML = "";
		 	document.getElementById("winCount").innerHTML = wins;
		 	document.getElementById("guessCount").innerHTML = guessesLeft;

		 	//userGuess.length = 0;
		 	//guessSoFar.length = 0;
				

		} else {
			guessesLeft--;
			document.getElementById("guessCount").innerHTML = guessesLeft;
			document.getElementById("guessUsed").innerHTML += userGuess + ", ";

			guessSoFar.push(userGuess);
			console.log("You guessed: ", userGuess);

			//console.log("guesses", guessSoFar);
		}

		if (guessesLeft < 1) {
			losses++;
			guessesLeft = 9;
			document.getElementById("guessUsed").innerHTML = "";
			document.getElementById("lossCount").innerHTML = losses;
			document.getElementById("guessCount").innerHTML = guessesLeft;
			
			// guessSoFar.length = 0;
			// guessSoFar.push(userGuess);
		}
	} else {
		console.log("Letter does not exist");
	}


	
}




