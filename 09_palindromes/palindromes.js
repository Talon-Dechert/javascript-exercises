const palindromes = function (words) {

    //* Setting up comparable arrays
    words = words.toLowerCase();
    let wordsArray = words.split('');
    let reverseArray = [];

    //! Need to remove punctuation and spaces

    wordsArray.forEach(element => reverseArray.push(element));

    reverseArray.reverse();

    //! Now to compare arrays - most likely through a forEach comparison


};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
