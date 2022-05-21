'use strict';

////////////////////////////////////
/////// Scoping in Practice ////////
////////////////////////////////////

// Every browser has its own JavaScript engine but probably the most well known engine is Google's V-8. but also Node.js
// So any JavaScript engine always contains a 'call stack' and a 'heap'.
// call stack : where our code is actually executed using something called execution contexts
// heap : an unstructured memory pool which stores all the objects that our application needs.

// 이벤트 루프에 대한 설명
// callback queue : This is a data structure that contains all the callback functions that are ready to be executed.
// click하면 이벤트가 발생하는 이벤트 리스터가 있다고 가정
// 클릭 시, 이벤트리스너에 담겨있는 'callback function'은 'callback queue'에 담긴다(put).
// 이후 call stack이 비어있다면, 'callback function'은 call stack에 담기게 된다.
// 이러한 과정을 Event loop라고 한다.
// Basically the event loop takes callback functions from the callback queue
// and puts them in the call stack so that they can be executed.

// Execution context란
// Environment in which a piece of JavaScript is executed.
// It's like a box that stores all the necessary information for some code to be executed.
// Such as local variables or arguments passed into a function.
// JavaScript code always runs inside an execution context.
// in any JavaScript project, no matter how large it is, there is only ever one global execution context.
// It's always there as the default context, and it's where top-level code will execute.

// Execution context 안에 들어가있는 것들...
// 1. variable Environment
//  - let, const and var declarations
//  - Functions : each function gets its own execution context as soon as the function is called.
//  - arguments object
//    : this is a special arguments object. This object contains as the name says all the arguments that were passed
//    into the function that the current execution context belong to.

// scope is the place in our code where variables are declared.

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating New variablee with same name as outer scope's variable
      const firstName = 'Steven'; // 함수에 파라미터 이름은 같아도 오류가 안나는 이유
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // functions are now in fact, block scoped.
      // But remember that that is only true for strict mode.
      function add(a, b) {
        return a + b;
      }
    }
    //  console.log(str);
    console.log(millenial);
    //  console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

///////////////////////////////////////////////////////////
/////// Variable Environment: Hoisting and The TDZ ////////
///////////////////////////////////////////////////////////

// Function expressions and arrows are simply variables.
// so they behave the exact same way as variables in regard to hoisting.
// (let/const 또는 var에 따라서 호이스팅이 결정된다)
// this is actually the reason why I told you earlier before we write them in the code. unlike function declarations.

/////////////////////////////////////////////
/////// Hoisting and TDZ in Practice ////////
/////////////////////////////////////////////

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr);
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
// variables declared with var will create a property on the global window object.
var x = 1; //window 오브젝트 생성된다.
let y = 2; // window 오브젝트에 생성되지 않는다. (do not create properties on the window object.)
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);