const palindromes = function (phrase) {
    // Removes all punctuation and spaces, converts to uppercase array of chars
    let arrStr = phrase.replace(/[^a-zA-Z]|" "/g, "");
    arrStr = arrStr.toUpperCase();
    arrStr = arrStr.split("");

    // Populates the reversed string, to be compared with original above
    let reverseStr = [];
    for (let i = 0; i < arrStr.length; i++) {
        reverseStr[i] = arrStr[arrStr.length - 1 - i];
    }

    return reverseStr.join("") == arrStr.join("");
};

module.exports = palindromes;
