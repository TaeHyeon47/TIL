'use strict';

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
