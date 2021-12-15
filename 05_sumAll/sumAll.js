const sumAll = function(firstNum, secondNum) {
    let totalSum = 0;

    if (typeof(firstNum) !== "number" || typeof(secondNum) !== "number"){
        console.log(typeof(firstNum));
        console.log(typeof(secondNum));
        return ("ERROR");
    } else if (firstNum < 0 || secondNum < 0) {
        return("ERROR");
    } else if (firstNum === secondNum){
        totalSum = firstNum + secondNum;
        return (totalSum);
    } else {
        for (i = firstNum; i <= secondNum; i++){
            totalSum += i;
        };
        for (i = secondNum; i <= firstNum; i++){
            totalSum += i;
        }
        return (totalSum);
    }
};

// Do not edit below this line
module.exports = sumAll;
