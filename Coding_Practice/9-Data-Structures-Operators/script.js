'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
// 각각 변수를 선언
const a = arr[0];
const b = arr[1];
const c = arr[2];

//? Destructuring Arrays
// Destructuring is to break a complex data structure down into a smaller data structure like a variable.
// Destructuring is an ES6 feature it's basically a way of unpacking values from an array or an object into separate variables.

// 배열을 활용해 한번에 변수를 선언
// '='의 왼편에 있는 []은 array처럼 보이지만 array가 아니다.
// 이것은 destructring을 해준다.
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

// const [first, second] = restaurant.categories; // restaurant.categories의 1번, 2번 요소를 가져온다.
let [main, , secondary] = restaurant.categories; // restaurant.categories의 1번, 3번 요소를 가져온다.
console.log(main, secondary);

//? 값의 위치 바꾸기
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//? Destructuring을 활용한 값의 위치 바꾸기
// 값을 reassigning 할때는 let, const를 사용하지 않는다.
[main, secondary] = [secondary, main];
console.log(main, secondary);
