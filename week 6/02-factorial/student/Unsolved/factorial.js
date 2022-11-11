// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    // product of all positive "integers less 
    // than or equal" to the number
    if (num <= 1) {
        return 1;
    }

    // num = 3
    // so, 1 x 2 x 3 ⇒　６

    // defined the start of the positive integer
    let result = 1;
    // 1) looping through the num value
    // 2) as the looping value increased, 
    // times it to the "result" value  
    for (let i = 0; i <= num; i++) {
        result *= num;
    }
    return result;
};
