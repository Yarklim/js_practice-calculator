import {
  clearZero,
  doDisable,
  doEnable,
  deleteLastSymbol,
  doNegativeNumber,
} from './services.js';
import {
  doAdd,
  doSubstract,
  doMultiplay,
  doDivide,
  doPercent,
  addPercent,
  substractPercent,
} from './math.js';

const mainDisplay = document.querySelector('.main-display');
const secondDisplay = document.querySelector('.second-display');
const buttons = document.querySelectorAll('.button');
export const dot = document.querySelector('.btn-dot');

const math = ['+', '-', 'x', '/', '%'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

let a = '';
let b = '';
let sign = '';
let result = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent === 'AC') {
      clearAll();
      doEnable(buttons);
    }

    const key = e.target.textContent;

    //   if push digit button
    if (digits.includes(key)) {
      if (b === '' && sign === '' && !result) {
        a += key;
        if (a.includes('.')) {
          a = clearZero(a);
          doDisable(dot);
        }
        mainDisplay.textContent = a;
        secondDisplay.textContent = a;
      }
    }

    //   if push Backspace button
    if (e.target.hasAttribute('backspace')) {
      a = deleteLastSymbol(a);

      mainDisplay.textContent = a;
      secondDisplay.textContent = a;
    }
  });
});

// ================ Clear All ==============
function clearAll() {
  a = '';
  b = '';
  sign = '';
  result = 0;
  mainDisplay.textContent = '';
  secondDisplay.textContent = '';
}

// ================ showDisplays ===========
function showDisplays() {
  mainDisplay.textContent = a;
  secondDisplay.textContent = a;
}
