const fibonacci = function (position) {
    if (position <= 0)
        return "OOPS";

    let fibArr = [1, 1];

    for (let i = 2; i < position; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }

    return fibArr[position - 1];
};

module.exports = fibonacci;
