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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicius pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//? Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Logical OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*

//?The Nullish Coalescing Operator (??)
// It's an operator that was introduced in ES2020.
// works with the idea or with the concept of nullish values instead of falsy values.
// it is as if the zero and the empty string were not falsy values and were instead truthy values as well.

//* Nullish : null and undefined (NOT 0 or '')
// only if this was null or undefined, only then the second operand here would be executed and returned.
// 첫번째 값이 null, undefined인 경우에만 두번째 값이 리턴된다.

// restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

*/

/*

//? Short Circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting
// 1. the OR operator will return the first truthy value of all the operands.
// or simply the last value if all of them are falsy.
// 2. the AND operator will return the first falsy value
// or the last value if all of them are truthy.

// we can use the OR operator to set default values.
// we can use the AND operator to execute code in the second operand if the first one is true.

console.log('----- OR(||) -----');

console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(null || 0); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 3;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
 
console.log('----- AND(&&) -----');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'jonas'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushromms', 'spinach');
}
// many times we can use the AND operator to actually avoid an if statement like this one.
restaurant.orderPizza && restaurant.orderPizza('mushromms', 'spinach');

*/

/*

//? Rest Pattern and Parameters
// The rest pattern looks exactly like the spread operator So it has the same syntax with the three dots
// but it actually does the opposite of the spread operator.
//* The spread operator is to unpack an array, while rest is to pack elements into an array

// 1) Destructuring

// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// The rest syntax collects all the array after the last variable.
// So in this case here 'risotto'. It does not include any skipped elements like 'Pasta'.
// Rest 문법은 마지막 요소를 기준으로 나머지를 모두 가져오는 것이기에 오직 1개만 사용할 수 있다.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // Spread operator로 풀어주고 넣어준다.

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

*/

/*

//? The Spread Operator (...)

// what the spread operator does is to basically take all the values out of this 'arr' array.
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

// 아래의 두개의 결과 값은 동일
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Destructuring과 Spread operator의 차이점.
// Array(배열)의 요소를 out of 한다는점에서 유사하나
// Spread operator는 모든 배열의 요소를 가져오고 variables를 만들지 않는다.

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//? Spread Operator는 Iterable에 모두 사용 가능
//? Iterable의 정의와 종류
// Most of the built-in data structures in JavaScript are now iterables, but except objects.
// arrays, strings, maps, sets but not objects.

// strings 예시
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str); // Jonas가 각각의 요소로 출력됨
console.log('j', '0');
// 템플릿 리터럴은 multiple values seprated by a comma를 출력할 수 없다.
// console.log(`${...str} Schmedtmann`);

//* 중요개념
//? multiple values separated by a comma are usually only
//? expected when we pass arguments into a function or when we build a new array.

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// // 동일한 결과값이 나온다.
// restaurant.orderPasta(...ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/*

//? Destructuring Object
// Destructure objects we use the curly braces. Because this is also how we create objects, right?
// Then all we have to do is to provide the variable names that exactly match the property names that we want to retrieve from the object.

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

*/

/*

//? Destructuring Arrays
// Destructuring is to break a complex data structure down into a smaller data structure like a variable.
// Destructuring is an ES6 feature it's basically a way of unpacking values from an array or an object into separate variables.

const arr = [2, 3, 4];
// 각각 변수를 선언
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// 배열을 활용해 한번에 변수를 선언
// '='의 왼편에 있는 []은 array처럼 보이지만 array가 아니다. 이것은 destructring문법이다.
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

// const [first, second] = restaurant.categories; // 1번, 2번 요소를 가져온다.
let [main, , secondary] = restaurant.categories; // 1번, 3번 요소를 가져온다.
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
const [i, , [j, k]] = nested; // 2 5 6
// const [i, , j, k] = nested; // 2 [5, 6]
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9]; // API에 자주 사용되는 문법
console.log(p, q, r);

*/
