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
var userGuess = [];

// *** COUNTERS *** //

var guessesLeft = 10;
var wins = 0;
var losses = 0;


lettersInWord = pickWord.split('');
console.log(lettersInWord);



// *** RESET GAME *** //

function reset() {
    
    rightLetter.length = 0;   // THIS SETS ARRAY BACK TO EMPTY
    wrongLetter.length = 0;   // All of these arrays get reset DO NOT TOUCH
    underScore.length = 0;
    userGuess = 0;
    guessesLeft = 10;
    
    document.getElementById('remainingGuesses').innerHTML = guessesLeft;
    
    hmNumber = Math.floor(Math.random() * hmWord.length); // RESELECTS WORD
    pickWord = hmWord[hmNumber];                          //
    lettersInWord = [];                                   //
    
    lettersInWord = pickWord.split(''); // SPLITS WORD INTO lettersInWord Array
    console.log(lettersInWord);
    
    document.getElementById('guessesMade').innerHTML = wrongLetter.join(', '); // CLEAR THE DOM element
    
    makeUnderscores(); // Run function to create underscores
    
    console.log('Reset runs!');
        
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




// *** USE REGEX TO CHECK IF USER TYPED LETTER *** //


document.addEventListener('keypress', (event) = function (event) {
    userGuess = event.key;
    var letters = /^[a-zA-Z]+$/;

                // this runs to check if userGuess is a letter
        if ( letters.test(userGuess) === true){
            console.log('this is a letter');
            gameStart();

        } else {
            console.log('this is not letter');
            alert('Please type a letter');
        }

}); 


// *** RUN THE GAME *** //

function gameStart() {
    console.log('Game begins NOW!');

    if (lettersInWord.indexOf(userGuess) > -1) {

        for (var j = 0; j < lettersInWord.length; j++) {

            if(lettersInWord[j] === userGuess){
                                
                rightLetter.push(userGuess);

                underScore[lettersInWord.indexOf(userGuess)] = userGuess;
                underScore[lettersInWord.lastIndexOf(userGuess)] = userGuess;
            }


        }

        console.log(underScore);
        document.getElementById('underscores').innerHTML = underScore.join(' ');
        winLose ();

    } else {

        console.log('Incorrect Letter');

        // If incorrect letter given, push to wrongLetter array
        wrongLetter.push(userGuess);

        //subtract from guesses left before losing
        guessesLeft--;
        console.log(guessesLeft);
        
        // Write to html the incorrect guesses & how many guesses are 
        document.getElementById('guessesMade').innerHTML = wrongLetter.join(' ');
        document.getElementById('remainingGuesses').innerHTML = guessesLeft;


        winLose();

    }

}

function winLose () {

    if (underScore.join('') === pickWord){

        console.log('You win!');
        wins++;
        console.log(wins);
        document.getElementById('wins').innerHTML = wins;
        reset();

    } else if (guessesLeft === 0) {

        losses++;
        document.getElementById('losses').innerHTML = losses;
        reset();

    } else {
        console.log('Keep playing');
    }
}
    


