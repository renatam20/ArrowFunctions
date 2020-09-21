import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// --------- Example --------

// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });

// ----------- Example as Arrow Function ----------

// const newNumbers = numbers.map( x => x * x);

// console.log(newNumbers);

////Map -Create a new array by doing something with each item in an array.

// --------- Example --------

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// ----------- Example as Arrow Function ----------

// const newNumbers = numbers.map( x => x * 2);

// console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.

// --------- Example --------

// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

// ----------- Example as Arrow Function ----------

// const newNumbers = numbers.filter( num => num < 10);

// console.log(newNumbers);

/////Reduce - Accumulate a value by doing something to each item in an array.

// --------- Example --------

// var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

// ----------- Example as Arrow Function ----------

// var newNumbers = numbers.reduce( (accumulator, currentNumber) => accumulator + currentNumber);

// console.log(newNumbers);

/////Find - find the first item that matches from an array

// --------- Example --------

// const newNumbers = numbers.find(function (num) {
//   return num > 10;
// })

// ----------- Example as Arrow Function ----------

// const newNumbers = numbers.find( num => num > 10);

// console.log(newNumbers);

////FindIndex - find the index of the first item that matches.

// --------- Example --------

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// ----------- Example as Arrow Function ----------

// const newNumbers = numbers.findIndex( num => num > 10);

// console.log(newNumbers);
