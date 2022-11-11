// Write code to create a function 
// that accepts a string and 
// returns an object containing the "number of times"
// each character appears in the string

var characterCount = function(str) {
    // setup counter variable
    var strCounter = {};

    // 1) loop the string, split into array 
    // 2) returns each char
    // 3) check if hr empty obj "strCounter" doesn't have the  
    str.split("").forEach(char => {
        strCounter[char] = !strCounter.hasOwnProperty(char)
            ? 1 : strCounter[char] + 1
    });
    return strCounter;
};
