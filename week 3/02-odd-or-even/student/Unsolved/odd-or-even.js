// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

// * If `num` is evenly divisible by 2, return the string `"even"`.

// * If `num` is not evenly divisible by 2, return the string `"odd"`.

var oddOrEven = function(num) {
    // using modulus to check whether "num" division by 2 has any remainder

    // if there's no remainder in input "num", 
    // ⇒　even
    // else
    // ⇒　false 
    if (num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
};
