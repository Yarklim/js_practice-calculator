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
