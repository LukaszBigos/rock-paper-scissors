let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
let result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');

const classTaken = (user, className) => {
  document.getElementById(user).classList.add(className);
  setTimeout(() => document.getElementById(user).classList.remove(className), 700);
}

const colorFlash = (user, type) => {
  switch (type) {
    case 'winner':
      classTaken(user ,'green-glow');
      break;
    case 'looser':
      classTaken(user, 'red-glow');
      break;
    case 'draw':
      classTaken(user, 'gray-glow');
      break;
  }
}

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const compChoice = choices[Math.floor(Math.random() * 3)];
  return compChoice;
};

const winner = (user, comp) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  const user_sub = 'user'.fontsize(3).sub();
  const comp_sub = 'comp'.fontsize(3).sub();
  result_p.innerHTML = `${user + user_sub} beats ${comp + comp_sub} You win :)`;
  colorFlash(user, 'winner');
};

const looser = (user, comp) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const user_sub = 'user'.fontsize(3).sub();
  const comp_sub = 'comp'.fontsize(3).sub();
  result_p.innerHTML = `${user + user_sub} loses to ${comp + comp_sub}. You lost :(`;
  colorFlash(user, 'looser');
}

const draw = (user, comp) => {
  const user_sub = 'user'.fontsize(3).sub();
  const comp_sub = 'comp'.fontsize(3).sub();
  result_p.innerHTML = `${user + user_sub} equals ${comp + comp_sub}. It's a draw.`;
  colorFlash(user, 'draw');
}

const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  switch (`${userChoice} vs ${computerChoice}`) {
    case ('rock vs scissors'):
    case ('paper vs rock'):
    case ('scissors vs paper'):
      winner(userChoice, computerChoice);
      break;
    case ('rock vs paper'):
    case ('paper vs scissors'):
    case ('scissors vs rock'):
      looser(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
};

const main = () => {
  rock_div.addEventListener('click', () => {
    game('rock');
  });
  paper_div.addEventListener('click', () => {
    game('paper');
  });
  scissors_div.addEventListener('click', () => {
    game('scissors');
  });
};

main();

