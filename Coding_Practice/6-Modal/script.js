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
