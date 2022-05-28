const palindromes = function (words) {

    //* Setting up comparable arrays
    words = words.toLowerCase();

    //* Remove punctuation and spaces

    let wordsArray = words.split('');
    wordsArray = wordsArray.filter(char => (char >= 'a') && (char <= 'z'));

    //* Set up array in reverse
    let reverseArray = [];
    wordsArray.forEach(element => reverseArray.push(element));
    reverseArray.reverse();

    //* Now to compare arrays

    for (i = 0; i < wordsArray.length; i++){
        if (wordsArray[i] != reverseArray[i]) return false;
        else return true;
    };

};


// Do not edit below this line
module.exports = palindromes;
