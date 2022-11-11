// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    // sort the array 
    // traverse through the array on by one 
    // and check wheter the number is the same as the prev one
    
    let sorted = arr.sort();

    for(let i = 0; i < sorted.length; i++){
        if (sorted[i] === sorted[i + 1]) {
            return false;
        }
    }
    return true;

};
