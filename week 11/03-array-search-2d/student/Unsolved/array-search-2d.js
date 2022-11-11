// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {

    // set up a counter var to kep track of X's
    let xCount = 0;

    // loop add to xCount whenever X is found in the arr by filtering out the "O"
    xCount = arr.reduce( (xCount, innerArr) => {
        return xCount + innerArr.filter( el => el !== "O").length;
    }, 0);

    return xCount;
};
