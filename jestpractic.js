function capitalize(str) {
  return (str = str.charAt(0).toUpperCase() + str.slice(1));
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    if (b > a) return "Impossible";
    else return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) return "Impossible";
    else return a / b;
  },
};

function caesarCipher(str, shiftFactor) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (
      (ascii >= 32 && ascii <= 47) ||
      (ascii >= 58 && ascii <= 64) ||
      (ascii >= 91 && ascii <= 96)
    );
    else {
      ascii += shiftFactor;
      if ((ascii > 90 && str.charAt(i) <= "Z") || ascii > 122) ascii -= 26;
    }
    newString += String.fromCharCode(ascii);
  }
  return newString;
}

function analyzeArray(arr) {
  let obj = {};
  let sum = 0;
  let minIdx = 0;
  let maxIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < arr[minIdx]) minIdx = i;
    if (arr[i] > arr[maxIdx]) maxIdx = i;
  }
  obj.average = sum / arr.length;
  obj.min = arr[minIdx];
  obj.max = arr[maxIdx];
  obj.length = arr.length;
  return obj;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
