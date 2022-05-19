'use strict';

// Flow chart
// It's a representation of everything that can happen in the application.
// So on the left side, we have in yellow, the possible actions that the user can take.
// And then from there we see what happens in the application.
// building a flow chart like this is pretty similar to actually dividing the big problem down into smaller sub problems.

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // getElementById을 사용하면, #이 없어도 된다. getElementById가 querySelector보다 약간 더 빠르지만 정말 많은 경우에만 해당된다.
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // switch to next player
  }
});
