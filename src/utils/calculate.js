import toRPN from "./toRPN";

export default function calculate(exp) {
  const input = toRPN(exp);
  const stack = [];

  for (let i = 0; i < input.length; i += 1) {
    switch (true) {
      case input[i] === "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case input[i] === "-":
        stack.push(-(stack.pop() - stack.pop()));
        break;
      case input[i] === "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case input[i] === "/":
        stack.push(1 / (stack.pop() / stack.pop()));
        break;
      case input[i] === "%": {
        const second = stack.pop();
        const first = stack.pop();
        stack.push(first % second);
        break;
      }
      default:
        stack.push(+input[i]);
    }
  }

  return stack[0] ? stack[0].toString() : "0";
}
