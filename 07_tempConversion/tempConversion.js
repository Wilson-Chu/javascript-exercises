const ftoc = function (tempF) {
  return Number(((tempF - 32) / 1.8).toFixed(1));
};

const ctof = function (tempC) {
  return Number(((1.8 * tempC) + 32).toFixed(1));
};

module.exports = {
  ftoc,
  ctof
};
