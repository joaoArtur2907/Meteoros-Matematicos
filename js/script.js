'use strict';

let lives = 3;

let num1 = Math.trunc(Math.random() * 10) + 1;
let num2 = Math.trunc(Math.random() * 10) + 1;

document.querySelector('.number').textContent = num1 + ' + ' + num2;

let result = num1 + num2;

const displayM = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayS = function (message) {
  document.querySelector('.lives').textContent = message;
};
const displayT = function (message) {
  document.querySelector('.title').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let attempt = Number(document.querySelector('.guess').value);

  console.log(attempt);

  // sem input
  if (!attempt) {
    displayM('Digite um valor');
  }
  // Tentativa errada
  else if (attempt !== result) {
    if (lives > 1) {
      displayM('errado');
      lives--;
      document.querySelector('.lives').textContent = lives;
      displayS(lives);
    } else {
      displayM('Você perdeu!');
      displayS(0);
    }
  }

  // Tentativa correta
  else {
    displayM('Correct!');
    document.querySelector('.number').textContent = attempt;
    displayT('Parabens!');
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
});

// Novo jogo
document.querySelector('.again').addEventListener('click', function () {
  lives = 3;
  num1 = Math.trunc(Math.random() * 10) + 1;
  num2 = Math.trunc(Math.random() * 10) + 1;
  result = num1 + num2;
  document.querySelector('.lives').textContent = lives;
  displayT('Resolva a conta!');
  document.querySelector('.number').textContent = num1 + ' + ' + num2;
  displayM('Boa sorte!');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ' ';
});
