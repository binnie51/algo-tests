// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  var out = []; 
  var startingIndex1 = 0;
  var startingIndex2 = 0;
  for(let i = 0; i < arr1.length; i++){
    // console.log({arr1_i: arr1[i]});
    for(let j = startingIndex2; j < arr2.length; j++){
      // console.log({arr2_j: arr2[j]});
      console.log({
        arr1_i: arr1[i],
        arr2_j: arr2[j]
      });
      if(arr1[i] < arr2[j]){
        out.push(arr1[i]);
        startingIndex1++;
        break;
      }
      else if(arr2[j] < arr1[i]){
        out.push(arr2[j]);
        startingIndex2++;
      }
    }
  }
  // append left overs
  for(let i = startingIndex1; i < arr1.length; i++){
    out.push(arr1[i]);
  }
  for(let j = startingIndex2; j < arr2.length; j++){
    out.push(arr2[j]);
  }
  return out;
};
