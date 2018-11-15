// create array for words

var hmWord = ['squirtle', 'charmander', 'bulbasaur'];

// choose a word randomly
var hmNumber = Math.floor(Math.random() * hmWord.length);
var pickWord = hmWord[hmNumber];
var underScore = [];

console.log(pickWord);
// Create underscores based on word length

function makeUnderscores() {
    for (var i = 0; i < pickWord.length; i++) {
        underScore.push('_');
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
    if(pickWord.indexOf(userGuess) > -1){
        console.log(true);

    }

    // Tut Vid: ttps://www.youtube.com/watch?v=f5BbzXgvi1o
    // Timestamp: 56:26
    // Check if user has typed key in already
    // If so, do nothing, dont take from guesses left

    // else new guess


    // or wrong
}




// Check if user is right
// If right, push letter into correct position
// if wrong, push letter into wrong guesses box