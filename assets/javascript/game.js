// create array for words

var hmWord = ['squirtle', 'charmander', 'bulbasaur', 'diglett', 'dragonite', 'tentacool']; // Words to choose from

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
var rightLetter = [];
var wrongLetter = [];


var guessesLeft = 10;
var wins = 0;
var losses = 0;

// *** I NEED TO BUILD A RESET ***

function reset() {

console.log('It runs!');
    
}

// *** Working on the DOM ***

console.log(pickWord); // Console out the randomly chosen word

lettersInWord = pickWord.split('');
console.log(lettersInWord);

// This function creates underscores based on word length

function makeUnderscores() {

    for (var i = 0; i < lettersInWord.length; i++) {

        underScore.push('_');

        document.getElementById('underscores').innerHTML = underScore.join(' ');

    }
    return underScore;
}



console.log(makeUnderscores()); // Console out to check that underscores printed correctly


// *** BELOW DOES THIS ***
// .onkeyup records users key press
// userGuess creates a variable from key press 
// if(pickWord) checks if keypress matches the selected word 
// rightLetter.push(userGuess) adds guess to right words array

    document.onkeyup = function (event) {

        var userGuess = event.key;
        console.log(userGuess);

        
        if (pickWord.indexOf(userGuess) > -1) {

            for (var j = 0; j < pickWord.length; j++) {

                if(lettersInWord[j] === userGuess){
                                    
                    rightLetter.push(userGuess);

                underScore[pickWord.indexOf(userGuess)] = userGuess;
                }


            }

            console.log(underScore);

            document.getElementById('underscores').innerHTML = underScore.join(' ');
        } 

        // *** YOU WIN!!! But it's triggered too late. Where do i add this?
        else if (underScore.join('') === pickWord){
            console.log('You win!');
            wins++;
            console.log(wins);
            document.getElementById('wins').innerHTML = wins;

        }
        
            
        else {

            // if the incorrect letter is already guessed
            if (wrongLetter.includes(userGuess)) {

                // feedback to check success
                console.log('Wrong guess already answered');

            } else if (guessesLeft > 0) {



                // If incorrect letter given, push to wrongLetter array
                wrongLetter.push(userGuess);

                //subtract from guesses left before losing
                guessesLeft--;
                console.log(guessesLeft);

                // Write to html the incorrect guesses & how many guesses are 
                document.getElementById('guessesMade').innerHTML = wrongLetter.join(', ');
                document.getElementById('remainingGuesses').innerHTML = guessesLeft;
                            
            } else {

                alert("You Lose!")
                // document.getElementById('remainingGuesses').innerHTML = "You lose!";
                losses++;
                document.getElementById('losses').innerHTML = losses;

                reset();
            }

        }


    };







// Check if user is right
// If right, push letter into correct position
// if wrong, push letter into wrong guesses box