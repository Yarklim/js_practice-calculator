const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

const mathSymbols = ['+', '-', 'x', '/', '%'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

let a = '';
let b = '';
let mathSign = '';
let finish = false;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent === 'AC') {
      clearAll();
    }

    const key = e.target.textContent;

    if (digits.includes(key)) {
      a += key;
      console.log(a);
    }
  });
});

function clearAll() {
  a = '';
  b = '';
  mathSign = '';
  finish = false;
  display.textContent = 0;
}

function doAdd(a, b) {
  return a + b;
}

function doSubstract(a, b) {
  return a - b;
}

function doMultiplay(a, b) {
  return a * b;
}

function doDivide(a, b) {
  return a / b;
}

function doPercent(a, b) {
  return a * (b / 100);
}

function addPercent(a, b) {
  return a + a * (b / 100);
}

function substractPercent(a, b) {
  return a - a * (b / 100);
}
