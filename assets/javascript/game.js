//var ans_array = ["movie", "hangover", "dark knight", "silver lining playbook"]
var ans_array = ["HANGOVER", "GODZILLA", "DARK KNIGHT", "SILVER LININGS PLAYBOOK"];
var ans_subject = ["HANGOVER BY TEDD PHILLIPS", "GODZILLA BY HIDEAKI ANNO", "DARK KNIGHT BY CHRISTOPHER NOLAN", "SILVER LININGS PLAYBOOK BY DAVID O. RUSSELL"];

var img = [];
img[0] = new Image();
img[0].src = "assets/images/hangover.jpg";
img[1] = new Image();
img[1].src = "assets/images/godzilla.jpg";
img[2] = new Image();
img[2].src = "assets/images/darkknight.jpg";
img[3] = new Image();
img[3].src = "assets/images/silverliningsplaybook.jpg";

var num = 0; // current position in array
var numOfWins = 0; // numnber of wins

var currentWord = [];
var guessedLetters = [];
var guessed_counter = 0;
var guesses_limit = 13;
var endFlg = false;

var ansSplit = ans_array[num].split("");

for (var i = 0; i < ans_array[num].length; i++) {
	if ( ansSplit[i] === " ") {
		currentWord[i] = " ";
	}
	else {
		currentWord[i] = "_";
	}
}	

window.onload = function()
{
	// To display Current Word
	var letters = "";
	for (var i = 0; i < currentWord.length; i++)  {
		letters += currentWord[i];
	}

	// Display
		var elem = document.getElementById('currentWord');
		elem.innerText = letters;   
};

document.onkeyup = function(event) {

	var letterExist = false;
	var letterGuessed = false;

	// Captures the key press, converts it to lowercase, and saves it to a variable.
	var letter = String.fromCharCode(event.keyCode).toUpperCase();

	// Check if the letter exists in the answer
	for (var i = 0; i < ansSplit.length; i++) {
		if (letter === ansSplit[i]) {
			currentWord[i] = ansSplit[i];
			letterExist = true;
		}
	}	

	// input letter doesn't exist in the answer
	if (letterExist === false) {
		// check if the letter exists in the letters already guessed
		for (var i = 0; i < guessedLetters.length; i++){
			if (letter === guessedLetters[i]) {
				letterGuessed = true;
				break;
			}
		}

		// if input letter doesn't exist in the letters already guessed,
		// add to the letters already guessed
		if (letterGuessed === false && letterExist === false) {
			guessedLetters.push(letter);
			guessed_counter = guessed_counter + 1;
		}
	}
	
	// To display Current Word
	var letters = "";
	for (var i = 0; i < currentWord.length; i++)  {
		letters += currentWord[i];
	}

	// Display
	var elem = document.getElementById('currentWord');
	elem.innerText = letters;   

	var elem = document.getElementById('guessesRemain');
	elem.innerText = guesses_limit - guessed_counter;

	var elem = document.getElementById('alreadyGuessed');
	elem.innerText = guessedLetters;   

	//var matchAnswer = false;
	console.log('guess:' + letters);
	console.log('ans:' + ans_array[num]);

	if (letters === ans_array[num]) {
		//document.getElementById('gameResult').elem.innerText = "Wins";
		var elem = document.getElementById('gameResult');
		elem.innerText = "Wins";  

		numOfWins++;
		var elem = document.getElementById('numOfWins');
		elem.innerText = String(numOfWins); 

		document.getElementById("ansImg").src = img[num].src;
		console.log('num:' + num)

		var elem = document.getElementById('ansSubject');
		elem.innerText = ans_subject[num]; 

		endFlg = true;
	}
	else {
		if (guesses_limit === guessed_counter){
			var elem = document.getElementById('gameResult');
			elem.innerText = "Loses";
			endFlg = true;
		}
	}

	console.log('endFlg:' + endFlg);

	//initialize
	if (endFlg === true){
		console.log('endFlg:' + endFlg);
		num++;

		if (num < ans_array.length) {
			currentWord = [];
			guessedLetters = [];
			guessed_counter = 0;
			guesses_limit = 13;
			endFlg = false;

			ansSplit = ans_array[num].split("");

			for (var i = 0; i < ans_array[num].length; i++) {
				if ( ansSplit[i] === " ") {
					currentWord[i] = " ";
				}
				else {
					currentWord[i] = "_";
				}
			}
				
			var letters = "";
			for (var i = 0; i < currentWord.length; i++)  {
				letters += currentWord[i];
			}
			var elem = document.getElementById('currentWord');
			elem.innerText = letters;   

			endFlg = false;
		}
		else {
			var elem = document.getElementById('ansSubject');
			elem.innerText = "End of Game"; 
		}
	}	
};

