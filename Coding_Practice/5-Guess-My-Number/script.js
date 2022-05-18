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

/////////////////////////////////////
/////// Handling Click Events ///////
/////////////////////////////////////

// 맞출 숫자는 전역 변수로 1번 선언
// addEventListener에 넣으면, 클릭할 때마다 새로운 변수가 생성되기 때문에 적합하지 않다.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.score').textContent = score;

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
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});
