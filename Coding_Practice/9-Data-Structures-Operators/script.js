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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

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

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//? Destructuring Object
// Destructure objects we use the curly braces. Because this is also how we create objects, right?
// Then all we have to do is to provide the variable names that exactly match the property names that we want to retrieve from the object.

const { name, openingHours, categories } = restaurant; // API를 불러올 때 자주 사용
console.log(name, openingHours, categories);

// 이름 변경
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// 자바스크립트는 {}를 코드블럭으로 인식한다. 코드 블럭에는 값을 넣을 수 없다. ()로 감싸주어야만 사용할 수 있다.
// { a, b } = obj;
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/*
 
//? Destructuring Arrays
// Destructuring is to break a complex data structure down into a smaller data structure like a variable.
// Destructuring is an ES6 feature it's basically a way of unpacking values from an array or an object into separate variables.

const arr = [2, 3, 4];
// 각각 변수를 선언
const a = arr[0];
const b = arr[1];
const c = arr[2];

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

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9]; // API에 자주 사용되는 문법
console.log(p, q, r);

*/
