const reverseString = function(str) {
let arrStr=str.split("");
let reverseStr=[];

for (let i=0;i<arrStr.length;i++){
reverseStr[i]=arrStr[arrStr.length-1-i];
}

return reverseStr.join("");

};

module.exports = reverseString;
