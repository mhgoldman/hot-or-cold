var numGuesses, guesses, answer;

$(document).ready(function(){
  newGame();

  clearAndFocusGuessBox();

  $('.new').click(function(){
    newGame();
  });

  $('form').submit(function() {
    guess = parseInt($('#userGuess').val());
    if (!isNaN(guess)) {
      handleGuess(guess);
    }

    clearAndFocusGuessBox();
    return false;
  });

	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);
	});

	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

});

function clearAndFocusGuessBox() {
  $('#userGuess').val('');
  $('#userGuess').focus();
}

function newGame() {
  resetGuesses();
  generateAnswer();
}

function generateAnswer() {
  answer = Math.floor(Math.random() * 100) + 1;  
}

function resetGuesses() {
  setNumGuesses(0);
  guesses = [];
}

function setNumGuesses(num) {
  numGuesses = num;
  $('#count').text(num);
}

function addGuessToList(guess) {
  guesses.push(guess);
  $('.guessBox').append('<li>' + guess + '</li>');
}

function handleGuess(guess) {
  addGuessToList(guess);
  setNumGuesses(numGuesses+1);
}