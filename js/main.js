const display = document.querySelector('.display');
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
        display.textContent = a;
      } else if (a !== '' && b !== '' && result) {
        b = key;
        result = false;
        display.textContent = b;
      } else {
        b += key;
        display.textContent = b;
      }
      return;
    }
    // if push button +, -, x, /
    if (action.includes(key)) {
      sign = key;
      display.textContent = sign;
      return;
    }
    // if push button =
    if (key === '=') {
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
      display.textContent = a;
      console.log(a, sign, b);
    }
  });
});

function clearAll() {
  a = '';
  b = '';
  sign = '';
  result = false;
  display.textContent = 0;
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
