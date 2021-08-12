var resultDisplay = document.querySelector('#result');
var choicesDisplay = document.querySelector('#choices');
var choices = ['rock', 'paper', 'scissors'];

var handleClick = function(e){
  var userChoice = e.target.innerHTML;
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  getResults(userChoice, computerChoice);
}

choices.forEach(function(choice){
  var button = document.createElement('button');
  button.innerHTML = choice;
  button.addEventListener('click', handleClick);
  choicesDisplay.appendChild(button);
});

var getResults = function(userChoice, computerChoice){
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', YOU WIN!!! :)';
      break;
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', YOU LOSE!!! :(';
      break;
    case 'paperpaper':
    case 'scissorscissor':
    case 'rockrock':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ', ITS A DRAW!!!';
      break;
  }
}