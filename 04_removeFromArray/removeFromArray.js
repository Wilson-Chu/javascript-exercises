const removeFromArray = function (...args) {
    let originalArr = args[0];
    let newArr = [];

    originalArr.forEach(
        (element) => {
            if (!args.includes(element)) { newArr.push(element) }

        });

    return newArr;
};

module.exports = removeFromArray;
