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

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
