// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    // set default total value to 0
    let total = 0
    // looping through "arr"
    for (let i = 0; i < arr.length; i++) {
        // set each elements as an individual value and total each one with the following values until every elements
        // in the "arr" had been totaled up
        let currentNumber = arr[i];
        total += currentNumber; 
    }
    return total;
};
