const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) return("OOPS");
    if (num == 0) return 0;

    let prevprev = 0;
    let prev = 1;
    let curr = 1;

    for (i = 1; i < num; i++){
        curr = prevprev + prev;
        prevprev = prev;
        prev = curr;
    }

    console.log(curr);
    return curr;
};

fibonacci(8);

// Do not edit below this line
module.exports = fibonacci;
