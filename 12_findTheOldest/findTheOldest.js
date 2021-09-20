const findTheOldest = function (dates) {
    return dates.reduce((oldestP, currentP) => {
        const oldestAge = getAge(oldestP.yearOfBirth, oldestP.yearOfDeath);
        const currentAge = getAge(currentP.yearOfBirth, currentP.yearOfDeath);
        return (oldestAge > currentAge) ? oldestP : currentP;
    })

};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

module.exports = findTheOldest;
