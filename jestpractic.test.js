const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./jestpractic");

test("Capitalize the first letter in a string", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
});

test("Reversing a string", () => {
  expect(reverseString("this is a test")).toBe("tset a si siht");
});

test("A calculator object", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.subtract(1, 2)).toBe("Impossible");
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.divide(2, 0)).toBe("Impossible");
  expect(calculator.divide(4, 2)).toBe(2);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
