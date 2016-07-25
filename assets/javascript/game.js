////////////////////////////////////////////////////
//                    GLOBAL                      //
////////////////////////////////////////////////////
var score = 0;
var guess;
var crystalValues = [];

function randomNumber(lowerNumber, upperNumber){
  guess = Math.floor(Math.random()*(upperNumber - lowerNumber + 1) + lowerNumber);
  return guess;
}

////////////////////////////////////////////////////
//                    loaded                      //
////////////////////////////////////////////////////
$('document').ready(function(){ //the DOM is now loaded and can be manipulated
  randomNumber(19, 120); //call

  $('#userScore').text(score);

  $('#guessNumber').text(guess);

  for (var i = 0; i < 4; i++) {
    randomNumber(1, 12);
    crystalValues.push(guess);
  }

});
