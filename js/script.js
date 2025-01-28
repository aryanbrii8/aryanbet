'use strict';
// problem

// 1) Understanding the problem

// 2) Breaking up into sub-problems

// start coding

// Variables
const boxSelect = document.getElementsByClassName('box-select');

// Function
const random = function () {
  let random = Math.trunc(Math.random() * 1000) + 1;
  alert(`you won ${random}$`);
};

for (let i = 0; i < boxSelect.length; i++) {
  boxSelect[i].addEventListener('click', random);
}
