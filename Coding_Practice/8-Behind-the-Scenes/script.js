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

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating New variablee with same name as outer scope's variable
//       const firstName = 'Steven'; // 함수에 파라미터 이름은 같아도 오류가 안나는 이유
//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       // functions are now in fact, block scoped.
//       // But remember that that is only true for strict mode.
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //  console.log(str);
//     console.log(millenial);
//     //  console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();

// ///////////////////////////////////////////////////////////
// /////// Variable Environment: Hoisting and The TDZ ////////
// ///////////////////////////////////////////////////////////

// // Function expressions and arrows are simply variables.
// // so they behave the exact same way as variables in regard to hoisting.
// // (let/const 또는 var에 따라서 호이스팅이 결정된다)
// // this is actually the reason why I told you earlier before we write them in the code. unlike function declarations.

// /////////////////////////////////////////////
// /////// Hoisting and TDZ in Practice ////////
// /////////////////////////////////////////////

// // Variables
// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// // console.log(addDecl(2, 3));
// // console.log(addExpr);
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// // variables declared with var will create a property on the global window object.
// var x = 1; //window 오브젝트 생성된다.
// let y = 2; // window 오브젝트에 생성되지 않는다. (do not create properties on the window object.)
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

/////////////////////////////////////////////
/////// The this Keyword in Practice ////////
/////////////////////////////////////////////

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined
// };

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this); // Window Object
// };

// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge(); // jonas 객체가 calcAge 메소드를 호출하기 때문에 this 사용 시, 객체가 호출됨.

// const matilda = {
//   year: 1993,
// };

// // remember that a function is just a value
// matilda.calcAge = jonas.calcAge; // method borrowing.
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

//////////////////////////////////////////////////////
/////// Regular Functions vs. Arrow Functions ////////
//////////////////////////////////////////////////////

// var firstName = 'Matilda';

// this is not a code block. It is an object literal.
// So it's just a way that we literally define objects. Okay?
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // 해결책 1
//     // const self = this; // 이와 같이 사용하여, this를 상속하여 전달할 수 있다.
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);

//     // 해결책 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     // It is a regular function call, even though it happens inside of a method.
//     // And the rule says that inside a regular function call, which this clearly is that this keyword must be undefined.
//     isMillenial();
//   },
//   greet: function () {
//     console.log(this);
//     // 글로벌 스코프(Windows)에 this.firstName를 나타냄
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// // you should never ever use an arrow function as a method.
// // 메소드에는 절대 에로우 펑션을 사용하지 않아야한다. 생각할 일이 적어진다.

// jonas.greet();
// jonas.calcAge();
// // console.log(this.firstName);

// // Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

///////////////////////////////////////////////////////////////////////
/////// Primitives vs. Objects (Primitive vs. Reference Types) ////////
///////////////////////////////////////////////////////////////////////

// identifier actually points to the address and not to the value itself.
// the value at a certain memory address is immutable.

// const are immutable. In fact, that is only true for primitive values,
// but not for reference values.

let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

////////////////////////////
// 객체에서 생각한것과 다르게 변경됨.. 주의...

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27; // me 객체의 age까지 변경됨.
console.log('Friend:', friend); // friend.age : 27
console.log('Me', me); // friend.age : 27

///////////////////////////////////////////////////
/////// Primitives vs. Objects in Practice ////////
///////////////////////////////////////////////////

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// 1. 새로운 객체는 전혀 다른 메모리에 저장된다.
// 2. 새로운 객체의 HEAP의 address는 기존과 달라진다.
// 3. 하지만 const로 선언되어 Call Stack에 저장된 marriedJessica의 Value는 변경이 불가하다.
// (REFERENCE TYPES은 CALL STACK의 Value 값으로 HEAP의 Address를 참조한다.)
// 4. const로 선언하여 Value값으로 변경이 불가능한 marriedJessica는 사용이 불가하다.
// 5. 만약 marriedJessica를 let으로 선언했다면 사용가능하다..
// marriedJessica = {};

// Copying Objects (객체를 복사하는 경우 설명)
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Object.assign only works on the first level
// Or in other words, if we have an object inside the object
// then this inner object will actually still be the same.
// So, it will still point to the same place in memory.
// And that's why we say that this object.assign
// only creates a shallow copy and not a deep clone which is what we would like to have.
// So, again, a shallow copy will only copy the properties
// in the first level while a deep clone would copy everything.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// Object.assign을 사용하면 lastName 프로퍼티는 보존이 되지만,
// 아래와 같이 배열은 같은 메모리를 지정하면서 보호가 되지 않는다.
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

//// Test
console.log('After marriage: ', jessicaCopy);
