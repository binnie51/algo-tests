// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
  // /* for of */
  // // entries allows us to get the index
  // // the const [i, num] will deconstruct each entry using es6
  // for ( const [i, num] of arr.entries()){
  //   console.log({i, num});
  //   if(num === target){
  //     return i;
  //   }
  // }
  // // after the for loop is done going through all the elements, 
  // // it will return -1 because it could not find the target
  // return -1;

  // /* for loop */
  // // entries allows us to get the index
  // // the const [i, num] will deconstruct each entry using es6
  // for ( var i = 0; i < arr.length; i++){
  //   if(arr[i] === target){
  //     return i;
  //   }
  // }
  // // after the for loop is done going through all the elements, 
  // // it will return -1 because it could not find the target
  // return -1;

  // // /* forEach */
  // var index = -1;
  // arr.forEach( (val, i) =>{
  //   if(val === target){
  //     index = i;
  //   }
  // } );
  // return index;

  return arr.reduce( (foundIndex, value, currIndex) => {
    if(target === value){
      return currIndex;
    }
    return foundIndex;
  }, -1);
};
