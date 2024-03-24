import {
  doAddition,
  doSubstract,
  doMultiplay,
  doDivide,
  doPercent,
  addPercent,
  substractPercent,
} from './math.js';
import { setDisabled, setEnabled } from './services.js';

const mainDisplay = document.querySelector('.main-display');
const secondDisplay = document.querySelector('.second-display');
const numButtons = document.querySelectorAll('.num-button');
const mathButtons = document.querySelectorAll('.math-button');
const serviceButtons = document.querySelectorAll('.service-button');
const dotButton = document.querySelector('.btn-dot');

let num1 = '';
let num2 = '';
let mathSign = '';
let result = '';

// =========== Nums Actions ===========
numButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const value = button.getAttribute('data');

    if (!num2 && !mathSign && !result) {
      num1 += value;
      mainDisplay.textContent = num1;
      secondDisplay.textContent += num1;
      if (value === '.') {
        setDisabled(dotButton);
      }
    } else {
      num2 += value;
      mainDisplay.textContent = num2;
      secondDisplay.textContent += num2;
    }

    if (num1 && num2 && result) {
      onClearAll();
      if (!num2 && !mathSign && !result) {
        num1 += value;
        mainDisplay.textContent = num1;
        secondDisplay.textContent += num1;
        if (value === '.') {
          setDisabled(dotButton);
        }
      } else {
        num2 += value;
        mainDisplay.textContent = num2;
        secondDisplay.textContent += num2;
      }
    }
  })
);

// =========== Math Actions ===========
mathButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const sign = button.getAttribute('data');

    const mathAction = {
      '+': doAddition(num1, num2),
      '-': doSubstract(num1, num2),
      '*': doMultiplay(num1, num2),
      '/': doDivide(num1, num2),
    };

    if ((sign === '*' || sign === '/') && num1 && num2) {
      mathSign = sign;
      mainDisplay.textContent = mathSign;
      secondDisplay.textContent = `(${secondDisplay.textContent}) ${mathSign} `;
    }

    if (sign !== '=' && !num2 && (sign !== '*' || sign !== '/')) {
      mathSign = sign;
      mainDisplay.textContent = mathSign;
      secondDisplay.textContent += ` ${mathSign} `;
    }

    if (sign !== '=' && num1 && num2 && (sign !== '*' || sign !== '/')) {
      num2 = num1;
      num1 = result;
      mathSign = sign;
      result = mathAction[mathSign];
      mainDisplay.textContent = result;
      secondDisplay.textContent += ` ${mathSign} `;
    }

    if (mathSign && sign === '=' && !result) {
      result = mathAction[mathSign];
      mainDisplay.textContent = result;
    }
  })
);

// =========== Services Actions =========
serviceButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const value = button.getAttribute('data');

    const action = {
      AC: onClearAll(),
    };

    action[value];
  })
);

function onClearAll() {
  num1 = '';
  num2 = '';
  mathSign = '';
  result = '';

  mainDisplay.textContent = '0';
  secondDisplay.textContent = '';

  setEnabled(dotButton);
}
