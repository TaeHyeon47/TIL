'use strict';

/*
// remember when we have multiple . operators
// they are executed from left to right
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// An event is something that happens on the page.
// For example, a mouse click, or a mouse moving, or a key press, or many other events.
// With an event listener, we can wait for a certain event to happen, and then react to it.

// addEventListener method, we first need to pass in the type of the event.
// click 이벤트의 반응을 expression 형 function에다가 정의한다.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 0이 falsy value이기 때문에 제외하기 위해 넣어줌..
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
