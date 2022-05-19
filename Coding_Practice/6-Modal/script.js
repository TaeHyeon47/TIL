'use strict';

// We actually store the results of the selection so the selected element in this variable.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  // 'classlist' property itself has a couple of methods. the one we're gonna use now is "remove."
  // . 은 오직 선택자(selector)에만 사용한다. 이미 선택되어 있기 떄문에 그냥 클래스 이름만 사용한다.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //  modal.style.display = 'block';
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Each of these three buttons here has their own event handler function attached to it.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// 'closeModal()'은 작동하지 않는다.
// Because it will immediately called a function, as soon as JavaScript executes this line.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// document are basically listening for events everywhere.
// So no matter where they happen on the page.
// They will always trigger the event handler.

// Key up, which is so it's this one this one only happens when we lift or finger off the keyboard basically
// Key press is fired continuously as we keep our finger on a certain key.
// Key down is fired as soon as we just press down the key.

// 'e' = event object (JavaScript, we'll call this function with the event object as an argument.)
// This works because we do not call this function here or selves.
// We do not call the function. We only define it here
// Hey, JavaScript call function when a key down event happens.
// And when you do so please pass in the event object as an argument.
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
