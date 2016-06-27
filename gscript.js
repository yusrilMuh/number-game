//----------Random Number Guessing Game------//
var correctGuess = false;
var lower = Math.floor(Math.random() * 5) + 1;
var upper = Math.floor(Math.random() * (25 - 11)) + 10;
var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
var guess = prompt("I am thinking of a number greater than " + (lower-1) + " and less than " + (upper+1) + ". what is it?");


if( parseInt(guess) === randomNumber ) {
	correctGuess = true;
} else if( parseInt(guess) > randomNumber && parseInt(guess) < (upper+1) && parseInt(guess) > (lower-1) ) {
	var guessMore = prompt("The number I am thinking is less than " + guess + ". Try Again!");
	if( parseInt(guessMore) === randomNumber ) {
		correctGuess = true;
	} else if( parseInt(guessMore) > randomNumber ) {
		var guessMoreAgain = prompt("The number I am thinking is less than " + guessMore + ". Last chance!");
		if( parseInt(guessMoreAgain) === randomNumber ) {
			correctGuess = true;
		}
	} else if( parseInt(guessMore) < randomNumber ) {
		var guessLessNew = prompt("The number I am thinking is greater than " + guessMore + ". Last chance!");
		if( parseInt(guessLessNew) === randomNumber ) {
			correctGuess = true;
		}
	}
} else if( parseInt(guess) < randomNumber && parseInt(guess) < (upper+1) && parseInt(guess) > (lower-1) ) {
	var guessLess = prompt("The number I am thinking is greater than " + guess + ". Try again!");
	if( parseInt(guessLess) === randomNumber ) {
		correctGuess = true;
	} else if( parseInt(guessLess) > randomNumber ) {
		var guessLessAgain = prompt("The number I am thinking is less than " + guessLess + ". Last chance!");
		if( parseInt(guessLessAgain) === randomNumber ) {
			correctGuess = true;
		}
	} else if( parseInt(guessLess) < randomNumber ) {
		var guessMoreNew = prompt("The number I am thinking is greater than " + guessLess + ". Last chance!");
		if( parseInt(guessMoreNew) === randomNumber ) {
			correctGuess = true;
		}
	}
}

if(correctGuess) {
	document.write("<h3>You guessed the number!, it's " + randomNumber + ".</h3>");
} else {
	document.write("<h3>Sorry. it's " + randomNumber + ".</h3>");
}