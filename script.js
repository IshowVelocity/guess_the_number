let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    //console.log(guess)
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100.');
    console.log(guess);
  } else {
    prevGuess.push(guess);
    if (numGuess === 9) {
      displayGuess(guess);
      displayMessage(`Game Over. The randoom number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guessed it right. The number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is too low.`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is too high.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id='NewGame'>Start new game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#NewGame');
  newGameButton.addEventListener('click', (e) => {
  location.reload();
  });
}
