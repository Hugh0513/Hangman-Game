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

//var snd = new Audio();
//snd.loop = true;
//snd.volume = 0.5;
//snd.src = "assets/audio/soundsofcinema.m4a";

var m4a = [];
m4a[0] = new Audio("assets/audio/hangover.m4a");
//m4a[0].src = "assets/audio/hangover.m4a";
m4a[1] = new Audio("assets/audio/godzilla.m4a");
//m4a[1].src = "assets/audio/godzilla.m4a";
m4a[2] = new Audio("assets/audio/darkknight.m4a");
//m4a[2].src = "assets/audio/darkknight.m4a";
m4a[3] = new Audio("assets/audio/silverliningsplaybook.m4a");
//m4a[3].src = "assets/audio/silverliningsplaybook.m4a";

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

	// Play sound
	var audio = document.getElementById('music');
	audio.play();
	//audio.loop = true;

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

	// Display texts
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

		// Change image
		document.getElementById("ansImg").src = img[num].src;
		console.log('num:' + num)

		// Display subject
		var elem = document.getElementById('ansSubject');
		elem.innerText = ans_subject[num]; 

		// Play sound
		var audio = document.getElementById('music');
		console.log(m4a[num]);
		audio.pause();
		audio.currentTime = 0;
		//audio.stop();

		//var source = document.getElementById('sound');
		//source.src = m4a[num].src;
		//console.log(source.src);
		//audio.source = m4a[num].src;
		//audio.play();

		if (num > 0){
			m4a[num-1].pause();
			m4a[num-1].currentTime = 0;
		}
		m4a[num].play();
		//audio.loop = true;

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
			elem.innerText = "Game End"; 
		}
	}	
};

