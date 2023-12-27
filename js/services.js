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
