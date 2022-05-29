const findTheOldest = function(objArr) {
    const today = new Date();
    const thisYear = today.getFullYear();

    return objArr.reduce((prev, curr) => {
        let older = prev;
        if (!curr.yearOfDeath){
            curr.yearOfDeath = thisYear;
        };

        const age = curr.yearOfDeath - curr.yearOfBirth;
        curr.age = age;

        if (curr.age > prev.age) {
            older = curr;
        };

        return older;
    }, {name: "nobody", age: 1})
};

// Do not edit below this line
module.exports = findTheOldest;
