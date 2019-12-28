let maxValue = 9;
let randomValue = Math.floor(Math.random()* maxValue);
let userNumber;
let attemps = 3;
let prize = 100;
let totalPrize = 0;




if (!confirm('Do you want to play a game?')) {
  alert('You did not become a billionaire, but can.');
} else {
  while (attemps > 0) {
    randomValue;
    console.log(`Random number is ${randomValue}`);
    userNumber = prompt(`Choose a roulette pocket number from 0 to 8 
      Attemps left: ${attemps}
      Total prize: ${totalPrize}
      Possible prize on curent attempt: ${prize} $`);
    if (randomValue === Number (userNumber)) {}
  }
}