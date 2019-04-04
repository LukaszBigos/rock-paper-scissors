const userScore = 0;
const computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');


const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const compChoice = choices[ Math.floor(Math.random() * 3)];
  return compChoice;
};

const game = (userChoice) => {

};

const main = () => {
  rock_div.addEventListener('click', () => {
    game('rocgit k');
  });
  paper_div.addEventListener('click', () => {
    game('paper');
  });
  scissors_div.addEventListener('click', () => {
    game('scissors');
  });
};

main();

