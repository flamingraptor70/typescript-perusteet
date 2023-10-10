// Test the function with arrays of different types
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "cherry", "date"];
const mixedArray: (string | number | boolean)[] = [true, 42, "hello", false];

const reverseArray = <T>(arr: T[]): T[] => {
  return arr.reverse();
};
const reversedNumbers = reverseArray(numberArray);
const reversedStrings = reverseArray(stringArray);
const reversedMixedArray = reverseArray(mixedArray);

console.log("Reversed numbers: " + reversedNumbers);
console.log("Reversed strings: " + reversedStrings);
console.log("Reversed mixed arrays: " + reversedMixedArray);

// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]
