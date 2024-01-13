// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = "developer";

let myNewString;

// Solution 1:
myNewString = myString.charAt(3).toUpperCase() + myString.substring(3);
// // Solution 2:
myNewString = myString[3].toUpperCase() + myString.substring(3);
// // Solution 3:
myNewString = `${myString[3].toUpperCase()}${2}${myString.slice(3)}`;

console.log(myNewString);
