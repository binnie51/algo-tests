// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

// TDD - test driven development
// 1. check the test by opening the index.html file
// 2. see what tests are failing on the page
// 3. look at the test cases in the test folder
// 4. see what the expected values are
// 5. go to the javascript file/function in question
// 6. add your possible solution
// 7. go back to step 1 and repeat until all tests pass

var oddOrEven = function(num) {
  var answer = num % 2;

  if(answer === 1){
    return "odd";
  }
  else{
    return "even";
  }

  // if(num % 2 === 1){
  //   return "odd";
  // }
  // else{
  //   return "even";
  // }

  // switch(num % 2){
  //   case 1:
  //     return "odd";
  //   default:
  //     return "even";
  // }

  // ternary
  //     conditional   ? valueIfTrue : valueIf false;
  // return num % 2 === 1 ? "odd" : "even"; 
};
