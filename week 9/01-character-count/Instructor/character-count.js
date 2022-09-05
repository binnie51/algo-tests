// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  var output = {};
  // for(var i = 0; i < str.length; i++){
  //   if(!output.hasOwnProperty(str[i])){
  //     output[str[i]] = 0;
  //   }
  //   output[str[i]]++;
  // }

  // for(var i = 0; i < str.length; i++){
  //   output[str[i]] = !output.hasOwnProperty(str[i]) ? 1 : output[str[i]] + 1;
  // }
  
  // str.split("").forEach( ch => console.log(ch) )

//   ["a", "b", "c", "a"].reduce((acc, value) => {
//     acc[value] = !acc.hasOwnProperty(value) ? 1 : acc[value] + 1
//    return acc;
// }, {})

  str.split("").forEach( ch => output[ch] = !output.hasOwnProperty(ch) ? 1 : output[ch] + 1);
  
  console.log(output);
  return output;
};
// var str = "abc"
// // arrays would probably require two for-loops which seems like a lot of work
// var ch = ["a", "b", "c"]
// var count = [1, 1, 1]
//
// // obj, you just need to know the key in order for it store the data.
// // there may still be a for loop, but it won't be coming from the data structure
// var count = {
//   a: 1,
//   b: 1,
//   c: 1
// }