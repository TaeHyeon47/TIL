'use strict';

////////////////////////////////
/////// Defalut Parameter //////
////////////////////////////////
/*

const bookings = [];

// ES6
const createBooking = function (
  fligtNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    fligtNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// 파라미터 값의 중간값을 비워두고 싶으면 undefined를 사용. (undefined는 세팅을 안한 것과 같다.)
createBooking('LH123', undefined, 1000);

*/

///////////////////////////////////////////////////////////////
/////// How Passing Arguments Works: Value vs. Reference //////
///////////////////////////////////////////////////////////////
/*

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

//? Primitive type을 함수의 파라미터로 사용하는 경우.
// flight는 function의 파라미터로 들어갈 때 value가 복사된다. 주소가 다르므로 이는 실제 original value가 아니다.
// 코드로 표현하면 'flightNum = flight'와 같다. 따라서 함수 밖에 있는 flight에 영향을 주지 못한다.

//? Reference type을 함수의 파라미터로 사용하는 경우.
// jonas는 메모리 HEAP의 Reference(memory address)가 passenger로 복사된다. 하지만 두개의 Reference point 같은 메모리의 object를 나타낸다.
// 코드로 표현하면 'passenger = jonas'와 같다.

checkIn(flight, jonas);
console.log(flight); //? 함수 밖의 'LH234'이 출력
console.log(jonas); //? 함수 안의 'Mr. Jonas Schmedtmann' 출력

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//? 결론
// There are two terms that are used all the time when dealing with functions,
// which is passing by value, and passing by reference,
// and many experienced programmers that are new to JavaScript have some confusion between these terms

*/
/////////////////////////////////////////////////////
/////// Functions Accepting Callback Functions //////
/////////////////////////////////////////////////////

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
