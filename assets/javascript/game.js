//var ans_array = ["movie", "hangover", "dark knight", "silver lining playbook"]
var ans_array = ["HANGOVER", "GODZILLA", "DARK KNIGHT", "SILVER LINING PLAYBOOK"];
var ans_subject = ["HANGOVER BY TEDD PHILLIPS", "GODZILLA BY HIDEAKI ANNO", "DARK KNIGHT BY CHRISTOPHER NOLAN", "SILVER LINING PLAYBOOK BY DAVID O. RUSSELL"];

var img = [];
img[0] = new Image();
img[0].src = "assets/images/hangover.jpg";
img[1] = new Image();
img[1].src = "assets/images/godzilla.jpg";
img[2] = new Image();
img[2].src = "assets/images/darkknight.jpg";
img[3] = new Image();
img[3].src = "assets/images/silverliningplaybook.jpg";

var num = 0;
var numOfWins = 0;

var current_letters = [];
var guessed_letters = [];
var guessed_counter = 0;
var guesses_limit = 13;
var endFlg = false;

var ansSplit = ans_array[num].split("");

for (var i = 0; i < ans_array[num].length; i++) {
	if ( ansSplit[i] === " ") {
		current_letters[i] = " ";
	}
	else {
		current_letters[i] = "_";
	}
}	
window.onload = function()
{
	// To display Current Word
	var letters = "";
	for (var i = 0; i < current_letters.length; i++)  {
		letters += current_letters[i];
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
			console.log(i);
			current_letters[i] = ansSplit[i];
			console.log(current_letters);
			letterExist = true;
		}
	}	

	console.log('aa:' + current_letters);
	console.log(letterExist);
	console.log(letterGuessed);

	// input letter doesn't exist in the answer
	if (letterExist === false) {
		// check if the letter exists in the letters already guessed
		for (var i = 0; i < guessed_letters.length; i++){
			if (letter === guessed_letters[i]) {
				letterGuessed = true;
				break;
			}
		}
		console.log('i=' + i);

		// if input letter doesn't exist in the letters already guessed,
		// add to the letters already guessed
		if (letterGuessed === false && letterExist === false) {
			guessed_letters.push(letter);
			guessed_counter = guessed_counter + 1;
		}
	}
	
	// To display Current Word
	var letters = "";
	for (var i = 0; i < current_letters.length; i++)  {
		letters += current_letters[i];
	}

	// Display
	var elem = document.getElementById('currentWord');
	elem.innerText = letters;   

	var elem = document.getElementById('guessesRemain');
	elem.innerText = guesses_limit - guessed_counter;

	var elem = document.getElementById('alreadyGuessed');
	elem.innerText = guessed_letters;   

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
			current_letters = [];
			guessed_letters = [];
			guessed_counter = 0;
			guesses_limit = 13;
			endFlg = false;

			ansSplit = ans_array[num].split("");

			for (var i = 0; i < ans_array[num].length; i++) {
				if ( ansSplit[i] === " ") {
					current_letters[i] = " ";
				}
				else {
					current_letters[i] = "_";
				}
			}
				
			var letters = "";
			for (var i = 0; i < current_letters.length; i++)  {
				letters += current_letters[i];
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

