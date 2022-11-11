// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    // if num returns a decimal number, set to false
    // otherwise, true

    // note: Math.floor returns the rounded down of a number

    // OOPS! THIS SOLUTION ISN'T ALLOWED TO :\
    // if (Math.sqrt(num) === Math.floor(Math.sqrt(num))) {
    //     return true;
    // }
    // return false;

    // set up a conditional where the total products that make "num" 
    // should be the same!
    // increment x if neither is the case
    let x = 0;

    while(true) {
        let xPerfectSquare = x * x;

        if(xPerfectSquare === num) {
            return true;
        }
        else if(xPerfectSquare > num) {
            return false
        }
        x++;
    }

};
