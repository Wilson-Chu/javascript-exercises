const repeatString = function(phrase, num) {
let newPhrase="";

if (num<0)
return 'ERROR';

for (let i=0;i<num;i++) {
    newPhrase+=phrase;
}

return newPhrase;
};

module.exports = repeatString;
