console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log('Test - should say "Hello, Riley!"', helloName("Riley"));
console.log('Test - should say "Hello, Lottie!"', helloName("Lottie"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log("Test - the numbers 5 and 6 should add up to 11", addNumbers(5, 6));

// 4. Function to multiply three numbers & return the result
function multiplyThree(oneNum, twoNum, threeNum) {
  return oneNum * twoNum * threeNum;
}
console.log(
  "Test - 5 times 4 times 5 should equal 100",
  multiplyThree(5, 4, 5)
);
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log(
  "Test - the number 6 is positive, should return true",
  isPositive(6)
);
console.log(
  "Test - the number -7 is negative, should return false",
  isPositive(-7)
);

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(numArray) {
  return numArray[numArray.length - 1];
}
console.log(
  "Test - the last number is 3, 3 should be logged",
  getLast([1, 2, 3])
);
console.log(
  "Test - the array is empty, undefined should be logged",
  getLast([])
);

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (i of array) {
    if (i === value) {
      return true;
    }
  }
  return false;
}
console.log(
  "Test - 3 is not listed in the array, false should be logged",
  find(3, [6, 7, 4, 7])
);
console.log(
  "Test - 6 is listed in the array, true should be logged",
  find(6, [6, 1])
);
console.log(
  "Test - 7 is not listed in the array, false should be logged",
  find(7, [27, 77, 70, 67, 71, 34])
);
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.charAt(0) === letter;
}
const letterCheck = "a";
const stringCheck = "apple";
const letterResult = isFirstLetter(letterCheck, stringCheck);
console.log(`Is '${letterCheck}' the first letter? ${letterResult}`);
// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (const num of array) {
    sum += num;
  }
  // TODO: return the sum
  return sum;
}
const result1 = sumAll([2, 3, 4, 5]);
console.log(`Test 1: Should be 14 (result: ${result1} ${result1 === 14})`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  for (num of array) {
    num > 0
  }
}

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
