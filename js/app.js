var numGuesses, guesses, answer;

$(document).ready(function(){
  newGame();

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
  setNumGuesses(0);
  guesses = [];
  answer = Math.floor(Math.random() * 100) + 1;  
  $('h2#feedback').text('Make your Guess!');
  $('.guessBox').empty();
  clearAndFocusGuessBox();  
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
  if (guesses.indexOf(guess) === -1) {
    addGuessToList(guess);
    setNumGuesses(numGuesses+1);
    feedback = guessFeedback(guess);
    $('h2#feedback').text(feedback);    
  }
}

function guessFeedback(guess) {
  feedback = '';

  difference = Math.abs(guess-answer);

  if (difference >= 50) {
    feedback = 'ice cold';
  } else if (difference >= 30 && difference <= 49) {
    feedback = 'cold';
  } else if (difference >= 20 && difference <= 29) {
    feedback = 'warm';
  } else if (difference >= 10 && difference <= 19) {
    feedback = 'hot';
  } else if (difference >= 1 && difference <= 9) {
    feedback = 'very hot';
  } else if (difference == 0) {
    feedback = "You Win! Press 'New Game' to play again";
  }

  return feedback;
}