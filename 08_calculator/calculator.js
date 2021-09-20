const add = function (operandA, operandB) {
  return operandA + operandB;
};

const subtract = function (operandA, operandB) {
  return operandA - operandB;
};

const sum = function (arrToSum) {
  let total = 0;

  for (let i = 0; i < arrToSum.length; i++) {
    total += arrToSum[i];
  }

  return total;
};

const multiply = function (arrToMult) {
  let total=1;

  for (let i = 0; i < arrToMult.length; i++) {
    total *= arrToMult[i];
  }

  return total;
};

const power = function (base, exp) {
  return Math.pow(base, exp);
};

const factorial = function (factNum) {
  let total = factNum;

  if (factNum == 0 || factNum == 1)
    return 1;

  for (let i = factNum - 1; i > 0; i--) {
    total *= i;
  }

  return total;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
