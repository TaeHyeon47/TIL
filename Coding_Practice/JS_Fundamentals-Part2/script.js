//////////////////////////////////
///// Activating Strict Mode /////
//////////////////////////////////

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

// "use strict"; // 없으면 에러 메세지가 나오지 않지만, 있으면 에러메세지가 나온다.

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

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

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
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples ${oranges} oranges.`;
  return juice; // we can use the return keyword and with this, we can return any value from the function
}

// The "juice" was returned from this function.
fruitProcessor(5, 0); // So basically that means that the result of running this function here. // Once this function has been executed this code here is then replaced by the result of the function
// "fruitProcessor("5", 0)"는 최종적으로 return 값인 juice로 변한다.
// in this case that's gonna be the juice string that we produced.

// So if we want to use that value that was returned we need to store it in a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// functions allow us to write more maintainable code because with functions we can create reusable chunks of code
// instead of having to manually write the same code over and over again.
// So that's the most important thing that you need to know about functions
// and when you know that you will know when you should actually use functions
// and this is actually a very important principle for writing clean code
// that is used in programming all the time
// and this principle is called don't repeat yourself or dry.

// Console dot log here is actually also just a function but a built in function
// that we do not have to write ourselves

const num = Number("23");

///////////////////////////////////////////////////
////// Function Declarations vs. Expressions //////
///////////////////////////////////////////////////

// Function Declarations(선언문)
// because we simply use the function keyword
// to declare a function a bit like we declare a variable.
// So let's now write another function declaration.

//Function declaration
const age1 = calcAge1(1991); // Function declaration, we can call them in a code before they are defined.

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

//Function expression (expression produces a value)
//we simply write function basically without a name
//and then we still define the parameter,
//we still define the function body,
//which is gonna be the same as this one
//and to store all of this here into a variable

// const age2 = calcAge2(1991); // in Function expression not work

const calcAge2 = function (birthYeah) {
  // calcAge2 varible will then hold this function value basically
  return 2037 - birthYeah;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

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
