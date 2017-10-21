var words = [
	"warm",
	"soft",
	"sheet",
	"groan",
	"trousers",
	"eyes",
	"old",
	"floor",
	"island",
	"smell",
	"spotless",
	"house"];


var selectedWord = null;
//var numKeyPresses = 0;
var selectedKey;

var successes = [];


document.addEventListener('keydown', function(event) {
  selectedKey = event.key;
  console.log("selected key is ", selectedKey);
  renderHTML();
});

function isSuccessfulKeyPress(letter) {
	var index = successes.indexOf(letter);
	var result = (index !== -1);
	return result;
}

function renderHTML() {

	var html = "<div class=\"container\">";

    // For each letter...
	for (var i = 0; i < selectedWord.length; i++)
	{
		console.log(selectedWord[i]);
		// Add if it's the selected key, or a past succcessful press.
		if (selectedKey && selectedKey === selectedWord[i] || isSuccessfulKeyPress(selectedWord[i]))
		{
			successes.push(selectedKey);
			html = html + "<div class=\"letter\">" + selectedWord[i] + "</div>";
		}
		else
		{
			html = html + "<div class=\"letter\"></div>";
		}
	} 
	
	html = html + "</div>";

	document.body = document.createElement("body");
	document.body.innerHTML = html;
}

window.onload = function(e) {
	selectedWord = words[Math.floor(Math.random() * words.length)];
	console.log("Word is " + selectedWord);
	renderHTML();
}


