const mainDisplay = document.querySelector('.main-display');
const secondDisplay = document.querySelector('.second-display');
const buttons = document.querySelectorAll('.button');

const action = ['+', '-', 'x', '/', '%'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

let a = '';
let b = '';
let sign = '';
let result = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent === 'AC') {
      clearAll();
    }

    const key = e.target.textContent;

    //   if push digit button
    if (digits.includes(key)) {
      if (b === '' && sign === '' && !result) {
        a += key;
        if (a.includes('.')) {
          a = clearZero(a);
          disableDot(e);
        }
        mainDisplay.textContent = a;
        secondDisplay.textContent = a;
      }
    }
  });
});

function clearAll() {
  a = '';
  b = '';
  sign = '';
  result = 0;
  mainDisplay.textContent = 0;
  secondDisplay.textContent = '';
}

function clearZero(str) {
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

function disableDot(e) {
  e.target.setAttribute('disabled', 'disabled');
}
