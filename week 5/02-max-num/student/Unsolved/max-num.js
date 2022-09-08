// Write code to return the largest number in the given array

var maxNum = function(arr) {
    // set var for maximun num
    var maxNum = arr[0]
    for(let i = 0; i < arr.length; i++) {
        // declares location of current number during iteration
        var currentNum = arr[i];

        if (currentNum > maxNum) {
            max = currentNum;
        }
    }
    return max;
};
