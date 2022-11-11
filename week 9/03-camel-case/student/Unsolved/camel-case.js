// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    // turn the str input into an array of words separated by the space
    // make sure they're all converted into all lower case

    // split it on the second time and capitalized it on the first index
    // join letters together on again before returning
    let result = "";
    let wordArr = str.toLowerCase().split(" "); 

    for (let i = 0; i < wordArr.length; i++){
        let word = wordArr[i];
        let letters = word.split("");

        if (i > 0) {
            letters[0] = letters[0].toUpperCase();
        }

        result += letters.join("");
    }

    return result;
};
