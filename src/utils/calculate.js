export default function calculate(string) {
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
