// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  const arrA = strA.split("");
  const arrB = strB.split("");
//   arrA.reduce( (acc, ch) => {
//     return acc;
//  }, 0);
  const sumLetters = (acc, ch) => {
    acc[ch] = acc.hasOwnProperty(ch) ? ++acc[ch] : 1;
    return acc;
  };
  const sumA = arrA.reduce( sumLetters, {});
  const sumB = arrB.reduce( sumLetters, {});
  if(Object.keys(sumA).length === Object.keys(sumB).length){
    // we know the number of keys is the same
    const keysA = Object.keys(sumA);
    for(var i = 0; i < keysA.length; i++){
      // console.log(keysA[i]);
      // console.log(sumA);
      // console.log(sumB);
      if(sumA[keysA[i]] !== sumB[keysA[i]]){
        return false;
      }
    }
    return true;
  }
  return false;

};
