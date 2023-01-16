"use strict";

// const userName = "Bob";
// const myAge = 23;
// let y = 44;

// Scoping:

// #1
// let car = "audi";
// let x = 5;
function testDrive() {
  let car = "ferrari";
  // const test = 99;
  console.log(`I got a raise, I can drive a ${car} now`);
  console.log(x);
  //Output : 5
}
// console.log(`Right now, I drive an ${car}`);

// #2
// var fullMoon = true;
// let species = "human";
// if (fullMoon) {
//   let species = "werewolf";
//   console.log(`Its a full moon. Lupin is currently a ${species}`);
// }
// console.log(`Its not a full moon. Lupin is currently a ${species} `);

// #3
// var species = "Human";
// var fullmoon = true;
// if (fullmoon) {
//   var species = "werewolf";
//   console.log(`Its a full moon. Lupin is currently a ${species}`);
// }
// console.log(`Its not a full moon. Lupin is currently a ${species}`);

//HOISTING BELOW

// #4
// console.log(x, "x");
// var x = 100;

// actually interpreted like this:
// var x; // x = undefined
// console.log(x, "x");
// x = 100;

// console.log(x, "x");
// const x = 100;
// let x = 100; // or

// #5
// const isTrue = true;
// // var x - the js moving the declaration of the variable to the beginning of the page (global scope)
// if (isTrue) {
//   var x = 5;
// }
// console.log(x, "x");

// #6
// var x = 100;
// function hoist() {
//   // var x; - the js moving the declaration of the variable to the beginning of the function
//   if (false) {
//     var x = 200;
//   }
//   console.log(x, "x in the hoist() function");
// }

// hoist();
// console.log(x, "x");

//LET and Const to the rescue:

// #7
// let x = true;
// function hoistWithLet() {
//   if (true) {
//     let x = "dsd";
//   }
//   console.log(x);
// }

// hoistWithLet();
// console.log(x, "x");
// ????

// Hoisting with Let and Const:

// let foo = "far";
// console.log(foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization

// console.log(boo); // Uncaught ReferenceError: Cannot access 'boo' before initialization

// const boo = "bar";

// Function hoisting

// foo(); // Uncaught TypeError: foo is not a function
// var foo = function (a, b) {
//   console.log("hello foo");
//   return 5;
// };

// bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
// let bar = function () {
//   console.log("hello bar");
// };

// baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
// const baz = function () {
//   console.log("hello baz");
// };
