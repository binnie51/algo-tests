// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function (arr) {
  // let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     let ch = arr[i][j];
  //     if (ch === 'X') {
  //       // console.log(ch);
  //       count++;
  //     }
  //   }
  // }
  // return count;

  // let count = 0;
  // // ['X', 'X', 'O'].filter( ch => ch === 'X').length
  // count = arr.reduce( (count, innerArr) => {
  //   // console.log(innerArr);
  //   return count + innerArr.filter( ch => ch === 'X').length;
  // }, 0);
  // return count;

  return arr.reduce( (count, innerArr) => count + innerArr.filter( ch => ch === 'X').length, 0);
};
