let randomMaximum;
let numberRandom;
let prizeTotal = 0;
let prizePossible;
let userNumber;
let attempts;
let answer = confirm('Do you want to play a game?');

const RANDOM_INCREASE = 4;
const PRIZE = 100;
const COEFICIENT = 2;
const MAX_ATTEMPTS = 3;
const MAX_RANDOM = 8;

attempts = MAX_ATTEMPTS;
prizePossible = PRIZE;
randomMaximum = MAX_RANDOM;
numberRandom = Math.floor(Math.random()* (randomMaximum + 1));

if (!answer) {
  alert('You did not become a billionaire, but can.');
} else {
  while (attempts > 0) {
    numberRandom;
    console.log(`Random number is ${numberRandom}`);
    userNumber = prompt(`Choose a roulette pocket number from 0 to ${randomMaximum}
          Attempts left: ${attempts}
          Total prize: ${prizeTotal}$
          Possible prize on current attempt: ${prizePossible}`, 'Your number');
    if (numberRandom === Number(userNumber)) {
      attempts = MAX_ATTEMPTS;
      randomMaximum += RANDOM_INCREASE;
      prizeTotal += prizePossible;
      answer = confirm(`Congratulation, you won! 
        Your prize is ${prizeTotal}
        Do you want to continue?`);
      if (!answer) {
        attempts = 0;
      } else {
        prizePossible *= COEFICIENT;
      }

    } else {
      prizePossible /= COEFICIENT;
      attempts--;
    }
    if (attempts === 0) {
      answer = confirm(`Thank you for your participation. Your prize is: ${prizeTotal}$. 
          Do you want to play again?`);
      if (!answer) {
        alert('You did not become a billionaire, but can.');
      } else {
        attempts = MAX_ATTEMPTS;
        randomMaximum = MAX_RANDOM;
        prizePossible = PRIZE;
        prizeTotal = 0;
      }
    }

  }
}


