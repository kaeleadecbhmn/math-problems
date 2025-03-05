import { getRandomInt } from "math-random";

function solveMathProblem(problem: string) {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  return `The solution to the math problem is ${num1} + ${num2}`;
}
