const { capitalize, reverseString } = require("./jestpractic");

test("Capitalize the first letter in a string", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
});

test("Reversing a string", () => {
  expect(reverseString("this is a test")).toBe("tset a si siht");
});
