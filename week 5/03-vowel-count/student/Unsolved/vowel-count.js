// Write code to return the the number of vowels in `str`

// Solution 1
var vowelCount = function(str) {
    // prepares array of vowels
    var vowelsArr = ['a', 'i', 'e', 'o', 'u'];
    // breaking down each letter in the string into an array
    var stringArr = str.toLowerCase().split('');
    // count variables
    var vowelCount = 0;
    // booleans whether vowels has been found
    // if true, ⇒　count value into "vowelCount"
    var vowelFound = false;

    // 1) iterates through "stringArr"  
    for (let i = 0; i < stringArr.length; i++) {
        // compile after iterated stringArr into variable "word"
        var word = stringArr[i];

        // 2) do a second iteration on "vowelsArr" to perform checks/comparison to our word 
        for (let j = 0; vowelsArr.length; j++) {
            if (vowelsArr[j] === word ) {
                vowelFound = true;
                vowelCount++; 
                break;
            }
        }
    }
    return vowelCount;
};

// Solution 2 (the looong way)
var vowelCount = function(str) {
    // convert string input into an array
    var strArr2 = str.toLowerCase().split('');  
    // set count variable
    var vowelCount2 = 0;

    // the no array method
    // place conditionals of ever letter using OR operator
    for (let i = 0; i < strArr2.length; i++){
        var word2 = strArr2[i];
        
        if (word2 === "a" || word2 === "i" || word2 === "e" || word2 === "o" || word2 === "u") {
            vowelCount2 += 1;
        }
    }
    return vowelCount2;
}
