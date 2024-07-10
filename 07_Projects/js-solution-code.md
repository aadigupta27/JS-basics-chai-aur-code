# Projects related to DOM

### Project link

[Click me](https://stackblitz.com/edit/dom-project-chaiaurcode-8r8qmp?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution Code
### Project-1
#### Background Color converter


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
### Project-2 
#### BMI Calculator

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