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
const buttonEl = document.querySelector('.buttons');
const buttons = document.querySelectorAll('.button');
export const dot = document.querySelector('.btn-dot');

const math = ['+', '-', 'x', '/', '%'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

let a = '';
let b = '';
let sign = '';
let result = 0;

buttonEl.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') return;

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

// ================ Clear All ==============
function clearAll() {
  a = '';
  b = '';
  sign = '';
  result = 0;
  mainDisplay.textContent = '0';
  secondDisplay.textContent = '';
}

// ================ showDisplays ===========
function showDisplays() {
  mainDisplay.textContent = a;
  secondDisplay.textContent = a;
}

// ============== SERVICES ==============
import { dot } from './index.js';

export function clearZero(str) {
  const dotIdx = str.indexOf('.');
  const tempStr = str.slice(0, dotIdx);
  let startIdx = tempStr.length - 1;

  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr[i] === '0') {
      continue;
    } else {
      startIdx = i;
      break;
    }
  }

  return str.slice(startIdx);
}

export function doDisable(el) {
  el.setAttribute('disabled', 'disabled');
}

export function doEnable(arr) {
  arr.forEach((item) => {
    if (item.hasAttribute('disabled')) {
      item.removeAttribute('disabled');
    }
  });
}

export function deleteLastSymbol(str) {
  let newStr = str.slice(0, -1);
  let hasDot = false;

  if (str.includes('.')) {
    hasDot = true;
  }
  if (newStr.includes('.')) {
    hasDot = false;
  }

  dot.removeAttribute('disabled');

  return newStr;
}

export function doNegativeNumber(num) {
  return -num;
}
