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
function adder(name){ //add selected image value to score
  score = score + ($(name).data('num'));
  $('#userScore').text(score);
}


////////////////////////////////////////////////////
//                  loaded document               //
////////////////////////////////////////////////////
$('document').ready(function(){ //the DOM is now loaded and can be manipulated
  randomNumber(19, 120); //call
  $('#guessNumber').text(guess);

  var crystalImages = [$('#diamond'),$('#opal'),$('#diamond2'),$('#ruby')];//index each crystal image
  for (var i = 0; i < crystalImages.length; i++) {
    randomNumber(1, 12);
    crystalValues.push(guess);//generate 4  between 1 & 12 numbers and push to array
    crystalImages[i].attr('data-num', crystalValues[i]);// assign each number to each image.
  }

/////////handler/////////////////////////
  $('#diamond').on('click', function(){
    adder('#diamond');
  });
  $('#opal').on('click', function(){
    adder('#opal');
  });
  $('#diamond2').on('click', function(){
    adder('#diamond2');
  });
  $('#ruby').on('click', function(){
    adder('#ruby');
  });

});
