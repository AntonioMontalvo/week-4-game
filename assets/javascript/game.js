////////////////////////////////////////////////////
//                    GLOBAL                      //
////////////////////////////////////////////////////
var score = 0;
var guess = 0;
var crystalValues = [];
var crystalImages = [$('#diamond'),$('#opal'),$('#diamond2'),$('#ruby')];//index each crystal image
var wins = 0;
var losses = 0;

$('#wins').text(wins);
$('#losses').text(losses);
var youWonorLost = $('<div id="game-end"></div>');
$('#wonlost').append(youWonorLost)

function randomNumber(lowerNumber, upperNumber){
  guess = Math.floor(Math.random()*(upperNumber - lowerNumber + 1) + lowerNumber);
  return guess;
}
function adder(name){ //add selected image value to score
  score = score + name;
  $('#userScore').text(score);
}
function newCrystalValues(){
  for (var i = 0; i < crystalImages.length; i++) {
    randomNumber(1, 12);
    crystalValues.push(guess);//generate 4  between 1 & 12 numbers and push to array
  }
}
function test(){
  if ( score === parseInt(guess) ){
    wins++;
    $('#wins').text(wins);
    score = 0;
    $('#userScore').text(score);
    newCrystalValues(); //call new crystal values
    randomNumber(19, 120); //call new number to match
    $('#guessNumber').text(guess);
    $('#game-end').text('YOU WON');
  }
  if ( score > parseInt(guess) ){
    losses++;
    $('#losses').text(losses);
    score = 0;
    $('#userScore').text(score);
    crystalValues = []; //empty the array
    newCrystalValues(); //call new crystal values
    randomNumber(19, 120); //call new number to match
    $('#guessNumber').text(guess);
    $('#game-end').text('YOU LOST');
  }
}

////////////////////////////////////////////////////
//                  loaded document               //
////////////////////////////////////////////////////
$('document').ready(function(){ //the DOM is now loaded and can be manipulated
  newCrystalValues();
  randomNumber(19, 120); //call
  $('#guessNumber').text(guess);

/////////handler/////////////////////////
  $('#diamond').on('click', function(){
    adder(crystalValues[0]);
    test();
  });
  $('#opal').on('click', function(){
    adder(crystalValues[1]);
    test();
  });
  $('#diamond2').on('click', function(){
    adder(crystalValues[2]);
    test();
  });
  $('#ruby').on('click', function(){
    adder(crystalValues[3]);
    test();
  });


});
