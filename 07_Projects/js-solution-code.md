# Projects related to DOM

### Project link

[Click me](https://stackblitz.com/edit/dom-project-chaiaurcode-8r8qmp?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution Code
## Project-1
### Background Color converter


```Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'white';
        break;
    }
  });
});

```
## Project-2 
### BMI Calculator

```Javascript

const form = document.querySelector('form');

// this use case will give you empty. After every reload the input value will remain same even before event call.
// const height = parseInt(document.querySelector('#height'));

form.addEventListener('submit', function (e) {
  e.preventDefault(); // preventing default action on event.

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    const ans = document.createTextNode('Enter valid Height');
    result.appendChild(ans);
    // result.innerHTML = 'Enter valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    const ans = document.createTextNode('Enter valid Weight');
    result.appendChild(ans);
    // result.innerHTML = 'Enter valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const ans = document.createTextNode(`BMI : ${bmi}`);
    // displaying result
    // result.appendChild(ans);
    result.innerHTML = `<span> BMI : ${bmi} <br> </span>`;

    if (bmi < 18.6) {
      result.appendChild(document.createTextNode('You are Under-weight'));
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.appendChild(document.createTextNode('You are in a normal range'));
    } else {
      result.appendChild(document.createTextNode('You are Over-weight'));
    }
  }
});

```

## Project-3 
### Digital Clock

``` Javascript
const clock = document.querySelector('#clock');

//repeats method after every second !
setInterval(function () {
  const date = new Date();
  // const time = document.createTextNode(date.toLocaleTimeString());
  // clock.appendChild(time);   // time is getting printed multiple times.
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project-4
### Guess the number - Game

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

const preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // always use to dont let the event to be save in server.
    const guess = parseInt(userInput.value);
    validateGame(guess);
  });
}

function validateGame(guess) {
  // validates whether a userInput is a valid number and in the range or not.
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number lower than 100');
  } else {
    preGuess.push(guess);
    if (numGuess === 10) {
      displayMessage(`Game Over, random number was ${randomNumber}`);
      displayGuess(guess);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // checks number guessed by the user and display whether the number is higher or lower in accordance with original generated number.

  if (guess === randomNumber) {
    displayMessage(`You guessed it right !`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too LOW`);
  } else {
    displayMessage(`Number is too HIGH`);
  }
}
function displayMessage(message) {
  // just displays that the number is lower, higher or you guessed the correct number.
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function displayGuess(guess) {
  // this method displays messages about remaining guess and previous guess etc. and updates(cleans) the input field for new values.
  userInput.value = '';
  numGuess++;
  guessSlot.innerHTML += `${guess} `;
  remaining.innerHTML = 11 - numGuess;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    preGuess = [];
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled', '');
    startOver.removeChild(p);

    playGame = true;
  });
}

```


## Project-5
### Keyboard-keys

```Javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```


## Project-6
### UnlimitedColors 

```Javascript
// random color generator

const random = function () {
  const hexValue = '0123456789ABCDEF';
  let HexCode = `#`;
  for (let i = 0; i < 6; i++) {
    const randomIndex = parseInt(Math.random() * 16);
    // let randomArray = hexValue.split('');
    // HexCode += `${randomArray[randomIndex]}`;   // one of the way !
    HexCode += hexValue[randomIndex];
  }
  return HexCode;
};
function changeBg (){
  document.body.style.backgroundColor = random();
}
let interval;

const startChangingColor = function(){
  if(!interval){
  interval = setInterval(changeBg, 1000);
  }
}
const stopChangingColor = function(){
  clearInterval(interval);
  interval = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor,false);
document.querySelector('#stop').addEventListener('click',stopChangingColor,false);

```