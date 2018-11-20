
// For repeat letters
var doubleLetters = ['a', 'b', 'c',
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


// *** MAKE UNDERSCORES *** //

function makeUnderscores() {


    for (var i = 0; i < pickWord.length; i++) {

        underScore.push('_');

        document.getElementById('underscores').innerHTML = underScore.join(' ');

    }
    return underScore;
}

console.log(makeUnderscores()); // Console out to check that underscores printed correctly



function compareLetters(userKey) {
    console.log('Working');

    if(pickWord)

}








// *** LETS RECORD WHAT THE USER TYPED *** //

document.onkeyup = function (event) {

    test = true;
    var userGuess = event.key;
    console.log(userGuess);
    for (var j = 0; j < doubleLetters.length; j++) {
        if(userGuess === doubleLetters[j] && test === true){
             
            var splicedWord = doubleLetters.splice(j,1);
                // *** TEST *** //
                console.log('Double letter is: ' + doubleLetters[j]);
                console.log('Spliced is: ' + splicedWord);

                compareLetters(userGuess);

        }
       
    }




    

}
