const { capitalize, reverseString } = require("./jestpractic");

test("Capitalize the first letter in a string", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
});

test("Takes a string and returns it reversed");
