/* global document */

function calculate(string) {
  const input = string.match(/[\d.]+|[+\-//*%]/g) || [];
  const operands = [];
  const operators = [];

  for (let i = 0; i < input.length; i += 1) {
    const element = input[i];

    if (/[\d.]+/.test(element)) {
      operands.push(+element);
    } else if (/[*/%]/.test(element)) {
      operators.push(element);
    } else if (/[+-]/.test(operators.at(-1)) || !operators.length) {
      operators.push(element);
    } else {
      const operator = operators.pop();

      if (operator === '*') {
        operands.push(operands.pop() * operands.pop());
      }
      if (operator === '/') {
        operands.push(1 / (operands.pop() / operands.pop()));
      }
      if (operator === '%') {
        const second = operands.pop();
        const first = operands.pop();
        operands.push(first % second);
      }
      operators.push(element);
    }
  }

  while (operators.length) {
    const operator = operators.pop();
    if (operator === '+') {
      operands.push(operands.pop() + operands.pop());
    }
    if (operator === '-') {
      operands.push(-(operands.pop() - operands.pop()));
    }
    if (operator === '*') {
      operands.push(operands.pop() * operands.pop());
    }
    if (operator === '/') {
      operands.push(1 / (operands.pop() / operands.pop()));
    }
    if (operator === '%') {
      const second = operands.pop();
      const first = operands.pop();
      operands.push(first % second);
    }
  }

  return operands[0] ? operands[0].toString() : '0';
}

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
