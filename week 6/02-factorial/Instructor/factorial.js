// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  // if(num === 0 || num === 1){
  //   return 1;
  // }
  if(num <= 1){
    return 1;
  }
  var solution = 1;
  for(var i = 1; i <= num; i++){
    solution *= i; // solution = solution * i
  }
  return solution;
};

// 3
// 1 x 2 x 3 = 6

// quick trace of the for loop

// i has the value of 1
// solution has the value of 1
// solution = 1 * 1 = 1

// i has the value of 2
// solution has the value of 1
// solution = 1 * 2 = 2

// i has the value of 3
// solution has the value of 2
// solution = 2 * 3 = 6


// 4
// 1 x 2 x 3 x 4 = 24