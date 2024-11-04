/* global document */
import calculate from './utils/calculate';

const displayInput = document.querySelector('.display__input');
const displayAnswer = document.querySelector('.display__answer');
const buttons = document.querySelectorAll('.keypad__buttons');
const controls = document.querySelectorAll('.keypad__controls');

let input = '';

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    input += btn.value;
    displayInput.innerHTML = input;
    displayInput.scrollLeft = displayInput.scrollWidth;
    if (btn.classList.contains('--operands')) {
      displayAnswer.innerHTML = calculate(input);
    }
  });
});

controls.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.value === 'clear') {
      input = '';
      displayInput.innerHTML = '';
      displayAnswer.innerHTML = '0';
    }
    if (btn.value === 'delete') {
      input = input.slice(0, -1);
      displayInput.innerHTML = input;
      displayInput.scrollLeft = displayInput.scrollWidth;
      displayAnswer.innerHTML = calculate(input);
    }
    if (btn.value === 'equals') {
      input = calculate(input);
      displayInput.innerHTML = input;
      displayInput.scrollLeft = displayInput.scrollWidth;
      displayAnswer.innerHTML = input;
    }
  });
});
