// For repeat letters
var alphabet = ['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'
];


var hmWord = ['squirtle', 'charmander', 'bulbasaur']; // Words to choose from
var hmNumber = Math.floor(Math.random() * hmWord.length); // choose a word randomly
var pickWord = hmWord[hmNumber];


var lettersInWord = []; // Hold letters in picked word (pickWord) //
var underScore = []; // Holds correct amount of underscores and updates when user guesses correct letter //
var rightLetter = []; // Collects correct letters
var wrongLetter = []; // Collects wrong letters


// *** COUNTERS *** //

var guessesLeft = 10;
var wins = 0;
var losses = 0;


lettersInWord = pickWord.split('');
console.log(lettersInWord);

// *** RESET GAME *** //

function reset() {

    console.log('calling Reset works!');


}






// *** MAKE UNDERSCORES *** //

function makeUnderscores() {


    for (var i = 0; i < pickWord.length; i++) {

        underScore.push('_');

        document.getElementById('underscores').innerHTML = underScore.join(' ');

    }
    return underScore;
}

console.log(makeUnderscores()); // Console out to check that underscores printed correctly










// ***  *** //


// *** LETS RECORD WHAT THE USER TYPED *** //

document.onkeyup = function (event) {

    gameStart = true;
    var userGuess = event.key;
    console.log(userGuess);



        for (var j = 0; j < alphabet.length; j++) {

            if (userGuess === alphabet[j]) {
                console.log('You picked a letter');

            if (lettersInWord[j] === userGuess) {

                rightLetter.push(userGuess);

                underScore[lettersInWord.indexOf(userGuess)] = userGuess;

                underScore[lettersInWord.lastIndexOf(userGuess)] = userGuess;

            }
        }

        } else {
            console.log('Type a letter please');
        }

    
}



// function winLose() {
//     for (var k = 0; k < )
// }