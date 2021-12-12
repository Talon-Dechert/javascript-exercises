const removeFromArray = function(arr, ...numToRemove) {

    if (numToRemove.length > 1){
        for (i = 0; i < numToRemove.length; i++){
            let innerNumToRemove = numToRemove[i];
            for (x = 0; x < arr.length; x++){
                if (innerNumToRemove === arr[x]){
                    arr.splice(x, 1);
                }
            }
        }
    } else {
        for (x = 0; x < arr.length; x++){
            if (numToRemove[0] === arr[x]){
                arr.splice(x, 1);
            }
            
        }
    }
    return(arr);
};

// Do not edit below this line
module.exports = removeFromArray;
