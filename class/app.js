const choices = ['rock', 'paper', 'scissors'];

class RockPaperScissors {
  constructor() {
    this.resetScore();
    this.resetResult();
    this.getElements();
    this.setButtons();
  }

  resetScore() {
    this.wins = 0;
    this.losts = 0;
    this.draws = 0;
  }

  resetResult() {
    this.userChoice = null;
    this.computerChoice = null;
  }

  getWinner() {
    const gameStr = this.userChoice + this.computerChoice;
    switch (gameStr) {
      case 'rockscissors':
        return 'user';
      case 'rockpaper':
        return 'computer'
      case 'rockrock':
        return 'draw'
      case 'scissorsrock':
        return 'computer'
      case 'scissorspaper':
        return 'user'
      case 'scissorsscissors':
        return 'draw'
      case 'paperrock':
        return 'user';
      case 'paperscissors':
        return 'computer'
      case 'paperpaper':
        return 'draw'
    }
  }

  updateResult(winner) {
    if (winner === 'user') {
      console.log('user');
      // update result title
      this.resultTitleEl.innerHTML = 'You win!!';
      // update result sub-title
      this.resultSubTitleEl.innerHTML = `${this.userChoice} beats ${this.computerChoice}`;
      // update score
      this.wins++;
      this.winsEl.innerHTML = 'Won = ' + this.wins;
    }
    if (winner === 'computer') {
      console.log('computer');
      this.resultTitleEl.innerHTML = 'You lose!';
      this.resultSubTitleEl.innerHTML = `${this.computerChoice} beats ${this.userChoice}`;
      this.losts++;
      this.lostsEl.innerHTML = 'Lost = ' + this.losts;
    }
    if (winner === 'draw') {
      console.log('draw');
      this.resultTitleEl.innerHTML = 'Draw';
      this.resultSubTitleEl.innerHTML = '';
      this.draws++;
      this.drawsEl.innerHTML = 'draw = ' + this.draws;
    }
  }

  getElements() {
    this.winsEl = document.querySelector('#wins');
    this.lostsEl = document.querySelector('#losts');
    this.drawsEl = document.querySelector('#draws');
    this.resultTitleEl = document.querySelector('#title');
    this.resultSubTitleEl = document.querySelector('#sub-title');
    this.rockBtnEl = document.querySelector('#rock');
    this.paperBtnEl = document.querySelector('#paper');
    this.scissorsBtnEl = document.querySelector('#scissors');
  }

  handleChoice(evt) {
    console.log('handleChoice', evt)
    this.userChoice = evt.target.id;
    this.computerChoice = choices[Math.floor(Math.random() * 2)];
    const winner = this.getWinner();
    this.updateResult(winner);
  }

  setButtons() {
    this.rockBtnEl.addEventListener('click', this.handleChoice.bind(this));
    this.paperBtnEl.addEventListener('click', this.handleChoice.bind(this));
    this.scissorsBtnEl.addEventListener('click', this.handleChoice.bind(this));
  }
}

const game = new RockPaperScissors();