// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    // check the length of the 2 strings and make sure they are the same 
    if (strA.length !== strB.length) {
        return false;
    }

    // sort each string inputs and compare them 
    // if they are the same
    let sortA = strA.split("").sort().join("");
    let sortB = strB.split("").sort().join("");

    if (sortA === sortB) {
        return true;
    }
    else {
        return false;
    }
};
