const reverseString = function(str) {
    if (str == null){
        return ('ERROR');
    } else {

        let newString = '';
        for (i = (str.length - 1); i >= 0; i--){
            newString = newString + str[i];
        }
        return (newString);
    };
};

// Do not edit below this line
module.exports = reverseString;
