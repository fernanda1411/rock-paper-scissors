var computerChoiceDisplay = document.getElementById('computer-choice');
var userChoiceDisplay = document.getElementById('user-choice');
var resultDisplay = document.getElementById('result');
var possibleChoices = document.querySelectorAll('button');
var userChoice;
var computerChoice;
var result;

possibleChoices.forEach(function(possibleChoice) {
  possibleChoice.addEventListener('click', function(e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

var generateComputerChoice = function() {
  var randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'paper';
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

var getResult = function() {
  if (computerChoice === userChoice) {
    result = 'Its a draw!!';
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You win!!';
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You lost!!';
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You win!!';
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You lost!!';
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You win!!';
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You lost!!';
  }
  resultDisplay.innerHTML = result;
}