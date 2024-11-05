export default function toRPN(exp) {
  const lowPriorityOperators = exp.match(/\+|(?<![+\-/*%]|^)-/g) || [];
  const expReplaced = exp
    .replace(/\+|(?<![+\-/*%]|^)-/g, " ") // delete all lowPriorityOperators
    .replace(/([*/%])((?<=[+\-/*%]|^)-?\d[\d.]*)/g, " $2 $1") // push highPriorityOperators behind
    .split(" ");

  return expReplaced.concat(lowPriorityOperators.reverse());
}
