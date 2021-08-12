var userChoiceDisplay = document.createElement('h1');
var computerChoiceDisplay = document.createElement('h1');
var resultDisplay = document.createElement('h1');
var gameGrid = document.getElementById('game');


gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

var choices = ['rock', 'paper', 'scissors'];
var userChoice;
var computerChoice;

var handleClick = function(e) {
  debugger
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice;
  generateComputerChoice();
  getResult();
}

var generateComputerChoice = function() {
  var randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + randomChoice;
}

var getResult = function() {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = 'YOU WIN!!!';
      break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'YOU LOSE!!!';
      break;
    case 'paperpaper':
    case 'scissorscissor':
    case 'rockrock':
      resultDisplay.innerHTML = 'ITS A DRAW!!!';
      break;
  }
}

for (var i = 0; i < choices.length; i++) {
  var button = document.createElement('button');

  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener('click', handleClick);
  gameGrid.appendChild(button);
}