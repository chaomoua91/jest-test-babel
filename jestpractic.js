function capitalize(str) {
  return (str = str.charAt(0).toUpperCase() + str.slice(1));
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = { capitalize, reverseString };
