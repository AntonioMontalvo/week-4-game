////////////////////////////////////////////////////
//                    GLOBAL                      //
////////////////////////////////////////////////////
var score = 0;
var guess;

function randomNumber(lowerNumber, upperNumber){
  guess = Math.floor(Math.random()*(upperNumber - lowerNumber + 1) + lowerNumber);
  return guess;
}

////////////////////////////////////////////////////
//                    GLOBAL                      //
////////////////////////////////////////////////////
$('document').ready(function(){
  randomNumber(19, 120); //call

  $('#userScore').text(score);

  $('#guessNumber').text(guess);







});
