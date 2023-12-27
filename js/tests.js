const mainDisplay = document.querySelector('.main-display');
const secondDisplay = document.querySelector('.second-display');
const buttons = document.querySelectorAll('.button');

const action = ['+', '-', 'x', '/', '%'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

let a = '';
let b = '';
let sign = '';
let result = false;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent === 'AC') {
      clearAll();
    }

    const key = e.target.textContent;

    // if push digit button
    if (digits.includes(key)) {
      if (b === '' && sign === '') {
        a += key;
        mainDisplay.textContent = a;
        secondDisplay.textContent = a;
      } else if (a !== '' && b !== '' && result) {
        b = key;
        result = false;
        mainDisplay.textContent = b;
        secondDisplay.textContent += b;
      } else {
        b += key;
        mainDisplay.textContent = b;
        secondDisplay.textContent += key;
      }
      console.log(a, sign, b);
      return;
    }
    // if push button +, -, x, /
    if (action.includes(key)) {
      sign = key;
      mainDisplay.textContent = sign;
      secondDisplay.textContent += ` ${sign} `;
      return;
    }
    // if push button = or action button
    if (key === '=' || (action.includes(key) && sign !== '')) {
      if (b === '') b = a;
      switch (sign) {
        case '+':
          a = doAdd(a, b);
          break;
        case '-':
          a = doSubstract(a, b);
          break;
        case 'x':
          a = doMultiplay(a, b);
          break;
        case '/':
          a = doDivide(a, b);
          break;
      }
      result = true;
      mainDisplay.textContent = a;
    }
  });
});

function clearAll() {
  a = '';
  b = '';
  sign = '';
  result = false;
  mainDisplay.textContent = 0;
  secondDisplay.textContent = '';
}

function doAdd(a, b) {
  return String(Number(a) + Number(b));
}

function doSubstract(a, b) {
  return String(a - b);
}

function doMultiplay(a, b) {
  return String(a * b);
}

function doDivide(a, b) {
  if (b === '0') return 'Error';
  return String(a / b);
}

function doPercent(a, b) {
  return String(a * (b / 100));
}

function addPercent(a, b) {
  return String(a + a * (b / 100));
}

function substractPercent(a, b) {
  return String(a - a * (b / 100));
}
