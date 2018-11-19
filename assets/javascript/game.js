// create array for words

var hmWord = ['squirtle', 'charmander', 'bulbasaur'];

// For repeat letters

var doubleWord = ['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'
];

// choose a word randomly
var hmNumber = Math.floor(Math.random() * hmWord.length);
var pickWord = hmWord[hmNumber];
var lettersInWord = [];
var underScore = [];
var rightWord = [];
var wrongWord = [];


var guessesLeft = 10;
var wins = 0;
var losses = 0;


// RESET

function reset() {
    var hmNumber = Math.floor(Math.random() * hmWord.length);
    var pickWord = hmWord[hmNumber];
    var lettersInWord = [];
    var underScore = [];
    var rightWord = [];
    var wrongWord = [];
    var doubleWord = ['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'
    ];

}






// Working on the DOM


// var domUnderscores = document.getElementById('underscores');

console.log(pickWord);
// Create underscores based on word length

function makeUnderscores() {

    lettersInWord = pickWord.split('');
    console.log(lettersInWord);

    for (var i = 0; i < pickWord.length; i++) {

        underScore.push('_');

        document.getElementById('underscores').innerHTML = underScore.join(' ');

    }
    return underScore;
}

console.log(makeUnderscores());

// get users guess
document.onkeyup = function (event) {

    // create variable from key press 
    var userGuess = event.key;
    console.log(userGuess);

    // check if keypress matches the selected word
    if (pickWord.indexOf(userGuess) > -1) {
        console.log(true);

        // add to right words array
        rightWord.push(userGuess);

        underScore[pickWord.indexOf(userGuess)] = userGuess;
        console.log(underScore);

        //Writes initial underscores to screen, removes commas with .join(' ')
        document.getElementById('underscores').innerHTML = underScore.join(' ');

    } else {

        // if the incorrect letter is already guessed
        if (wrongWord.includes(userGuess)) {

            // feedback to check success
            console.log('Wrong guess already answered');

        } else if (guessesLeft > 0) {



            // If incorrect letter given, push to wrongWord array
            wrongWord.push(userGuess);

            //subtract from guesses left before losing
            guessesLeft--;
            console.log(guessesLeft);

            // Write to html the incorrect guesses & how many guesses are 
            document.getElementById('guessesMade').innerHTML = wrongWord.join(', ');
            document.getElementById('remainingGuesses').innerHTML = guessesLeft;

        } else {

            document.getElementById('remainingGuesses').innerHTML = "You lose!";
            losses++;
            document.getElementById('losses').innerHTML = losses;
            reset();
        }

    }


}




// Check if user is right
// If right, push letter into correct position
// if wrong, push letter into wrong guesses box