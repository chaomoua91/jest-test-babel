const { capitalize, reverseString, calculator } = require("./jestpractic");

test("Capitalize the first letter in a string", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
});

test("Reversing a string", () => {
  expect(reverseString("this is a test")).toBe("tset a si siht");
});

test("A calculator object", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.divide(4, 2)).toBe(2);
});
