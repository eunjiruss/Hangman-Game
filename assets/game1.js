//The wordBank.
var words = [
    "cereal",
    "bacon",
    "biscuit",
    "pancake",
    "sausage",
    "doughnut",
    "egg",
    "french toast",
    "waffle",
    "eggs benedict"
  ];

var wins = 0;

var losses = 0;

var word =words[Math.floor(Math.random()*words.length)];

//Create an empty array so that the "_" will show up, then fill in as player gets the right answer.
var answerArray=[];
var letterArray=[];

for (var i =0; i< word.length; i++) {
	answerArray[i] = "_";
}

var remainingLetters=word.length;

var guesses = 10;

function onGameLoss() {
	++losses;

	// Reset everything and setup a new word!
	guesses = 10;
	answerArray = [];
	letterArray = [];
	word =words[Math.floor(Math.random()*words.length)];
}

function onGameWin() {
		++wins;
		alert("Congrats. The answer was " + word);

}

document.addEventListener('keydown', function(event) {
	--guesses;
  	var selectedKey = event.key;
  	letterArray.push(selectedKey);
  	console.log("selected key is ", selectedKey);
	//alert("Press any key from a-z to start!");

	//Computer will randomly choose a word from the wordBank.
	if (selectedKey === null) {
		return;
	}

	if (guesses < 1) {
		onGameLoss();
	}

	console.log("Word is: ", word);
	//Takes each alphabet player guesses, update the game page, then display the result.

	for (var j = 0; j < word.length; j++) {
//Check to see if the player's guess matches with the computerGuess.
      if (word[j] === selectedKey) {

        answerArray[j] = selectedKey;

        remainingLetters--;

		}
	}

	//var elem = document.getElementById('computerGuess');
	//elem.innerHTML = " Number of Letters: " + answerArray.join(" _ "); 
	//I couldn't seem to place the correct anwers on top of the _ on this part.



	var elem = document.getElementById('wins');
	elem.innerHTML = " Number of Wins: " + wins;

	var elem = document.getElementById('losses');
	elem.innerHTML = "Number of Losses: " + losses;

	var elem = document.getElementById('guesses');
	elem.innerHTML = "Number of Guesses Left: " + guesses;

	var elem = document.getElementById('letters');
	var liselectedKey = letterArray.join(" , ");
	elem.innerHTML = "Letters Tried So Far: " + liselectedKey;

	var checkforWin = answerArray.join("");
	if (checkforWin === word)
	{
		onGameWin();
	}

});



