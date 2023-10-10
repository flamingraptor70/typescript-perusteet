// Test the function with arrays of different types
var numberArray = [1, 2, 3, 4, 5];
var stringArray = ["apple", "banana", "cherry", "date"];
var mixedArray = [true, 42, "hello", false];
var reverseArray = function (arr) {
    return arr.reverse();
};
var reversedNumbers = reverseArray(numberArray);
var reversedStrings = reverseArray(stringArray);
var reversedMixedArray = reverseArray(mixedArray);
console.log("Reversed numbers: " + reversedNumbers);
console.log("Reversed strings: " + reversedStrings);
console.log("Reversed mixed arrays: " + reversedMixedArray);
// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]
