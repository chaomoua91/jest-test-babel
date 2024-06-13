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

module.exports = { capitalize, reverseString, calculator };
