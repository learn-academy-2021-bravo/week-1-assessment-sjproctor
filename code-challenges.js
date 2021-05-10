// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// Create a function called checkTemp
// Parameter of a number
const checkTemp = (number) => {
  // Conditional
  if(number > 212) {
    // Number is greater than 212
    // Using string interpolation
    return `${number} is above boiling point`
  } else if(number < 212) {
    // Number is less than 212
    return `${number} is below boiling point`
  } else if(number === 212) {
    // Number is equal than 212
    return "212 is at boiling point"
  }
}

// invoke the function
console.log(checkTemp(temp1))  // "35 is below boiling point"
// console.log(checkTemp(35))
// this produces the same ouput as the first one with one additional level of abstraction
console.log(checkTemp(temp2))  // "350 is above boiling point"
console.log(checkTemp(temp3))  //"212 is at boiling point"


// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
var myNums2 = [4, 5, 6, 7, 8]
var myNums3 = [4, 9, 4, 8]


// Create a function called mult5
// Parameter - array
// Declare a variable of an empty array
// Iterate using a for loop
// Multiple each value by 5
// Push each multiplied value into the empty array
// Return an array

const mult5 = (array) => {
  let newArray = []
  for(let i=0; i<array.length; i++){
    newArray.push(array[i] * 5)
  }
  return newArray
}

console.log(mult5(myNumbers1))  // [ 15, 35, 0, 30, -45 ]
console.log(mult5(myNums2))  // [ 20, 25, 30, 35, 40 ]
console.log(mult5(myNums3))  // [ 20, 45, 20, 40 ]

// The argument takes the place of the parameter in the function
// const mult5 = ([3, 7, 0, 6, -9]) => {
//   let newArray = []
//   for(let i=0; i<[3, 7, 0, 6, -9].length (5); i++){
//     newArray.push([3, 7, 0, 6, -9][i] * 5)
//   }
//   return newArray
// }
// console.log(mult5([3, 7, 0, 6, -9]))  // [ 15, 35, 0, 30, -45 ]

// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]

// Create a function called giveOdds
// Parameter of number - nums
// Define an empty array
// Iterate over the nums array
// If statement to return odd numbers
// Action to take to store the odd numbers in the new array
// Return the new array
// Invoke/call the function

const giveOdds = (nums) => {
  let oddNums = []
  for(let i=0; i<nums.length; i++){
    if(nums[i] % 2 !== 0) {
      oddNums.push(nums[i])
    }
  }
  return oddNums
}
console.log(giveOdds(myNumbers2))  // [ -7, 9, 13 ]

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// Create a function called removeVowels
// Parameter - string
// Declare a variable of an empty string
// Iterate - for loop to each value in the string
// If each character is a not a vowel
// Concat into the string
// Return the variable that holds the string
// Invoke function

const removeVowels = (string) => {
  let consonants = ""
  for(let i=0; i<string.length; i++){
    let lowerCaseChar = string[i].toLowerCase()
    if(lowerCaseChar !== "a" && lowerCaseChar !== "e" && lowerCaseChar !== "i" && lowerCaseChar !== "o" && lowerCaseChar !== "u") {
      // concatenation
      consonants += string[i]
      // console.log("consonants:", consonants)
      // consonants = consonants + string[i]
    }
  }
  return consonants
}
// console.log(removeVowels(stringWithVowels1))
// console.log(removeVowels(stringWithVowels2))

// logical operators = logical and &&
// concat - arrays section


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

// determine if the input is a string
// conditional
// if the typeof is a string
// execute as normal
// else string interpolation for the error message


const removeVowelsPlus = (string) => {
  let consonants = ""
  if(typeof string === "string") {
    for(let i=0; i<string.length; i++){
      let lowerCaseChar = string[i].toLowerCase()
      if(lowerCaseChar !== "a" && lowerCaseChar !== "e" && lowerCaseChar !== "i" && lowerCaseChar !== "o" && lowerCaseChar !== "u") {
        consonants += string[i]
      }
    }
  } else {
    return `${string} is not a string`
  }
  return consonants
}

console.log(removeVowelsPlus(refactorTester1))
console.log(removeVowelsPlus(refactorTester2))
console.log(removeVowelsPlus(refactorTester3))
