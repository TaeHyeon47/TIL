///////////////////////////////////
///// Activating Strict Mode //////
///////////////////////////////////

// So strict mode is a special mode that we can activate in JavaScript, to write a secure JavaScript code.

// "use strict";
// So this statement here basically has to be the very first statement in the script.
// So if we have any code before this then strict mode will not be activated.
// Comments are allowed because JavaScript will just ignore them but no code.

// We actually can also activate strict mode, only for a specific function or a specific block.
// But I don't really see the point in doing that and so I always just use it at the beginning of each script
// and so I believe that you should do the same. So always just put strict mode in the beginning of your scripts
// and like that write more secure code. And when secure, I mean that strict mode makes it easier for us developers
// to avoid accidental errors. and that's because of 2 reasons.

// First, strict mode forbids us to do certain things
// Second, it will actually create visible errors for us in certain situations in which without strict mode
// JavaScript will simply fail silently without letting us know that we did a mistake.

// "use strict"; // 없으면 에러 메세지가 나오지 않지만, 있으면 에러메세지가 나오는 경우가 있다.

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can Drive :D");

// 아래의 경우 예약어이기 때문에 사용이 되지 않는다.
// const interface = "Audio";
// const private = 534;
// const if = 23;

/////////////////////
///// Functions /////
/////////////////////

// Function is simply a piece of code that we can reuse over and over again in our code.
// So it's a little bit like a variable but for whole chunks of code.
// So remember a variable holds value but a function can hold one or more complete lines of code.

// function logger() {
//   console.log("My name is Jonas");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// Usually when we write functions we also pass data into a function
// and additionally, a function can also return data as well which means to give us data back
// that we can then use for something else in the program.
// So a function cannot only reuse a piece of code but it can also receive data and return data back

// I like to think of functions as machines. So I think that's a great analogy
// so for example, let's imagine a food processor, so we put foot into the processor
// then the processor does something to our food which is the function body basically
// and then in the end the food processor returns to processed food
// and so that's exactly what we can do with functions as well

// we also specify something called parameters and parameters are like variables
// that are specific only to this function and they will get defined once we call the function.

// apples, oranges will get defined once the function is called
// and they represent the input data of this function
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples ${oranges} oranges.`;
//   return juice; // we can use the return keyword and with this, we can return any value from the function
// }

// // The "juice" was returned from this function.
// fruitProcessor(5, 0); // So basically that means that the result of running this function here. // Once this function has been executed this code here is then replaced by the result of the function
// // "fruitProcessor("5", 0)"는 최종적으로 return 값인 juice로 변한다.
// // in this case that's gonna be the juice string that we produced.

// So if we want to use that value that was returned we need to store it in a variable
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// functions allow us to write more maintainable code because with functions we can create reusable chunks of code
// instead of having to manually write the same code over and over again.
// So that's the most important thing that you need to know about functions
// and when you know that you will know when you should actually use functions
// and this is actually a very important principle for writing clean code
// that is used in programming all the time
// and this principle is called don't repeat yourself or dry.

// Console dot log here is actually also just a function but a built in function
// that we do not have to write ourselves

// const num = Number("23");

///////////////////////////////////////////////////
////// Function Declarations vs. Expressions //////
///////////////////////////////////////////////////

// Function Declarations(선언형 함수)
// because we simply use the function keyword
// to declare a function a bit like we declare a variable.
// So let's now write another function declaration.

//Function declaration
// const age1 = calcAge1(1991); // Function declaration, we can call them in a code before they are defined.

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// console.log(age1);

//Function expression (표현형 함수를) (expression produces a value)
//We simply write function basically without a name
//and then we still define the parameter,
//we still define the function body,
//which is gonna be the same as this one
//and to store all of this here into a variable

// const age2 = calcAge2(1991); // in Function expression not work

/*
const calcAge2 = function (birthYeah) {
  // calcAge2 varible will then hold this function value basically
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

//The functional expression works the exact same way as the function declaration.
//We call it in the same way we capture the return value in the same way and then of course the result is also the same
//because the function body is the same.

//But it's very important to know that we have these two type of functions in JavaScript.
//Because in some places we will actually need to write them like this,
//as you will see as we go through the course. So again, this part here that I just highlighted
//this function here is in fact an expression
//and remember that expressions produce values.

// functions are actually just values. So just as a number or a string or a boolean value.
// So a function is not a type, okay? but it's also a value.
// It will become very important later

// the main practical difference is that we can actually call function declarations
// before they are defined in the code.

//For now just keep in mind that you can call a function declaration before you define it
//even though that might not be such a good idea in many cases
//but you can do it if necessary.

//Personally, I prefer to use function expressions
//because this then forces me into a nice structure
//where I have to define all the functions first
//at the top of the code and only then I can call them.
//So this makes the code a little bit nicer
//and more structured.
//I also like to have everything stored in variables,

/////////////////////////////
////// Arrow Functions //////
/////////////////////////////

// Arrow Functions was added to JavaScript in ES6
// arrow function is simply a special form of function expression
// that is shorter and therefore faster to write.

//Function expression (expression produces a value)
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// Arrow expression
// A lot easier and faster to write.
// The first reason for that is that we don't need the curly braces,
// And second is that the return actually happens implicitly. without us having to explicitly write the return keyword.
// that this is gonna be extremely helpful in certain situations.
// const calcAge3 = (birthYeah) => 2037 - birthYeah; So we can only omit the return here in case we have a one-liner function like here.
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement; // we actually need to write the return keyword explicitly.
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// arrow function do not get a so-called this keyword.

//////////////////////////////////////////////
///// Functions Calling Other Functions //////
//////////////////////////////////////////////

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Why not simply multiply both of the input values by four??
// First, the point that I'm making here is that it's very common for one function to call another function.
// Second, this is also a very good example to illustrate the don't repeat yourself principle that I mentioned earlier.

////////////////////////////////
///// Reviewing Functions //////
////////////////////////////////

// // We have two different functions here with the same parameter names.
// // This one has birth year and this one has too, but that's not a problem at all.
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// // This birth year in this function is not at all related to this birth year in this function.
// // They are two completely different parameters.
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement; // this return keyword here will actually immediately exit the function.
//     console.log(`${firstName} retires in ${retirement} years`);
//   } else {
//     return -1;
//     console.log(`${firstName} retires in ${retirement} years`);
//   }

//   return retirement; // we actually need to write the return keyword explicitly.
//   // return `${firstName} retires in ${retirement} years`;
// };

// yearsUntilRetirement(1991, "Jonas"); //Without the parenthesis, the function is really just a value.
// // But then with the parenthesis, we actually called a function.
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

///////////////////////////////////
///// Introduction to Arrays //////
///////////////////////////////////

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020); // here we used a different way of creating the Array, which was using this Array function.

// console.log(friends[0]);

// // We used here is not only for retrieving elements from the Array
// // but we can also change it to add elements to the Array.
// console.log(friends[2]);

// friends[2] = "Jay"; // variables declared with const, cannot be changed. And we did in fact declare the friends variable
// console.log(friends); // But I was still able to change one element. isn't that a contradiction?
// // Well what I didn't tell you at the time is that only primitive values are immutable. But an Array is not a primitive value.
// // So we can actually always change it so we can mutate it.
// // friends = ['Bob', 'Alice'] //  illegal

// // Anyway what matters, is that this is gonna be the exact amount of elements that is in the Array. And it's not zero based.
// console.log(friends.length); // this dot length is something called a property which we're gonna talk about a little bit later in the section when we talk about objects.
// // This automatic retrieval of the last element works just fine.
// console.log(friends[friends.length - 1]); // friends.length is not zero based. And so we always need to subtract one from this number here.
// 'friends.length - 1' is expression. and remember that an expression is something that produces a value.
// And 'friends.length - 1' is gonna be calculated first. So it will compute friends.length which is three minus one is two, and then it will get friends at position two.

// const firstName = "Jonas";
// const jonas = [firstName, "Schemdtmann", 2037 - 1991, "teacher", friends]; // we could even put other Arrays inside of an Array.
// // we have all the relevant data about Jonas in one handy data structure.
// // And that's really convenient because then we don't have to create one variable for each of the data points.
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(years);
// console.log(calcAge(years)); // This would be not illegal, I would say but it's not gonna work because this years is an Array.
// // If we pass this years' Array as an argument to the calcAge function. it doesn't know what to do with it.
// // Because this operation here(return 2037 - birthYear;) expects a single value. We cannot do a number minus and array.

// console.log(years + 10); // '1990,1967,2002,2010,201810'
// // the plus operator what it does here, is to convert everything to a string.

// console.log(years - 10); // NaN
// //we cannot do operations with Arrays.

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

//////////////////////////////////////////////
///// Basic Array Operations (Methods) ///////
//////////////////////////////////////////////

// JavaScript has some built in functions that we can basically apply directly on arrays.
// method called 'push'. push method adds elements to the end of an array.

// const friends2 = ["Michael", "Steven", "Peter"];
//Add elements
// const newLength = friends2.push("Jay"); // push is a method which technically is a function. and we call that function directly on the friends array.
// console.log(friends2); // ['Michael', 'Steven', 'Jay', 'Jay']
// console.log(newLength); // 4

// Now since push is a function here, it can also return something. we already know that we can pass arguments
// Into functions and we did that here with Jay, then the function can do some work and in this case,
// The push function does return a value and the value that it returns is the length of the new array.
// So if we want to capture that data or that value, we can create a new variable for that.

// console.log(newLength); // 4
// So we just push an element and call it a day, Because usually we don't immediately need the length of the new array.
// But in case we need it, we don't need to then calculated separately, we can simply take the result of this function here(push) store it into a variable and then use that.

// const newfr = friends2.unshift("John");
// console.log(friends2);
// console.log(newfr);

// Remove elements
// friends2.pop(); // Last
// const popped = friends2.pop();
// console.log(popped); // Peter
// console.log(friends2); // ['John', 'Michael', 'Steven']

// friends2.shift(); //First
// console.log(friends2); // ['Michael', 'Steven']

// console.log(friends2.indexOf("Steven")); // 1
// console.log(friends2.indexOf("Bob")); // -1

// friends2.push(23);

//includes added Es6
// console.log(friends2.includes("Steven")); // true
// console.log(friends2.includes("Bob")); // false
// console.log(friends2.includes("23")); // false
// console.log(friends2.includes(23)); // true

// if (friends2.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

/////////////////////////////////////
///// Introduction to Objects ///////
/////////////////////////////////////

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// The key is basically the variable name.
// The value can be of any type that we want here.
// Now each of these keys is also called a property.
// this object, which is called Jonas has five properties.
// the object literal Syntax
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// the big difference between objects and arrays,
// is that in objects, the order of these values
// does not matter at all when we want to retrieve them.
// object(객체)의 경우, 배열과 달리 순서를 신경쓸 필요가 없다!
// 배열의 경우 순서를 신경써야 한다.

/////////////////////////////////////
///// Dot vs Bracket Notation ///////
/////////////////////////////////////

// the order of properties does not matter.
// 크롬에서 value 값이 알파벳 순서대로 변경된다.

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]); // we can actually put any expression that we'd like,
// // so we don't have to explicitly write the string here,
// // but instead we can compute it from some operation

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]); // we could put any expression here,
// console.log(jonas["last" + nameKey]);

// // 언제 dot을 쓰고 언제 Bracket Notation을 써야하는가?
// // When we need to first compute the property name like we did here with the first and last name.
// // Then of course we have to use the bracket notation in any other case, just use the dot notation,

// // prompt는 String 형태로 저장됨.
// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(interestedIn);
// console.log(jonas.interestedIn); // undefined is what we get when we try to access a property on an object that does not exist.
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log("hi", jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";

// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends,
//   and his best friend is called ${jonas.friends[0]}`
// );

////////////////////////////
///// Object Methods ///////
////////////////////////////

// expresstion형 함수만 객체 프로퍼티로 사용할 수 있다.
// 선언형 함수는 객체 프로퍼티로 사용할 수 없다.

// JavaScript gives us access to a special variable called this.
// And so what we can do now is in this calcAge function,
// we can read the birth year directly from this object itself without having to pass it in
// as a parameter here into this function.

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // this key word or the this variable is basically equal to the object
//   // on which the method is called, it is equal to the object calling the method.
//   // we create a new property on the current object.

//   calcAge: function () {
//     // console.log(this);
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job},
//     and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.
//     `;
//   },
// };

// // console.log(jonas.calcAge(1991));
// console.log(jonas.calcAge()); // this 키워드 사용 시
// // console.log(jonas["calcAge"](1991));
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's License"
// console.log(jonas.getSummary());

/////////////////////////////////////
///// Iteration: The for Loop ///////
/////////////////////////////////////

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
