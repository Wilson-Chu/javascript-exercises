const caesar = function (message, shift) {
    let charUnicode;
    let newMessage = [];

    for (let i = 0; i < message.length; i++) {
        charUnicode = message.charCodeAt(i);
        if ((charUnicode >= 65 && charUnicode <= 90) || (charUnicode >= 97 && charUnicode <= 122)) {
            // Uppercase letters wrapping around alphabet
            if (charUnicode >= 65 && charUnicode <= 90) {
                if (charUnicode + shift % 26 > 90)
                    newMessage[i] = String.fromCharCode(charUnicode - (26 - shift % 26));
                else if (charUnicode + shift % 26 < 65)
                    newMessage[i] = String.fromCharCode(charUnicode + (26 + shift % 26));
                else
                    newMessage[i] = String.fromCharCode(charUnicode + shift % 26);
            }
            // Lowercase letters wrapping around alphabet
            else if (charUnicode >= 97 && charUnicode <= 122) {
                if (charUnicode + shift % 26 > 122)
                    newMessage[i] = String.fromCharCode(charUnicode - (26 - shift % 26));
                else if (charUnicode + shift % 26 < 97)
                    newMessage[i] = String.fromCharCode(charUnicode + (26 + shift % 26));
                else
                    newMessage[i] = String.fromCharCode(charUnicode + shift % 26);
            }
            else {
                newMessage[i] = String.fromCharCode(charUnicode + shift % 26);
            }

        }
        else {
            newMessage[i] = message.charAt(i);
        }
    }

    return newMessage.join("");
};

module.exports = caesar;
