// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
type Value = string | number;

function lengthOrSquare(value2: Value): number | string {
  // TODO: Use a type guard to check the actual type of 'value'
  // if type is string, retrurn the length of the string
  if (typeof value2 === "string") {
    const resultString = value2.length.toString();
    return resultString;
  } else if (typeof value2 === "number") {
    return value2 * value2;
  }
}

// Prompt the user to enter a value as either a string or a number
const userInput2 = prompt("enter string or number");
const parsedValue2: Value = userInput2
  ? isNaN(parseFloat(userInput2))
    ? userInput2
    : parseFloat(userInput2)
  : "";

// Call the lengthOrSquare function
const result2 = lengthOrSquare(parsedValue2);
console.log(typeof result2);
console.log(result2);
